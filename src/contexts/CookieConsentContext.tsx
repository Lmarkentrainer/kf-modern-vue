import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CookiePreferences, defaultPreferences } from "@/lib/cookieTypes";

interface CookieConsentContextType {
  preferences: CookiePreferences;
  hasConsent: boolean;
  isSettingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Partial<CookiePreferences>) => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = "cookie-consent-preferences";

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsent, setHasConsent] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setPreferences(parsed);
        setHasConsent(true);
      } catch {
        setHasConsent(false);
      }
    } else {
      setHasConsent(false);
    }
  }, []);

  const saveToStorage = (prefs: CookiePreferences) => {
    const withTimestamp = { ...prefs, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(withTimestamp));
    setPreferences(withTimestamp);
    setHasConsent(true);
  };

  const acceptAll = () => {
    saveToStorage({
      essential: true,
      statistics: true,
      marketing: true,
      externalMedia: true,
      timestamp: ""
    });
    setIsSettingsOpen(false);
  };

  const rejectAll = () => {
    saveToStorage({
      essential: true,
      statistics: false,
      marketing: false,
      externalMedia: false,
      timestamp: ""
    });
    setIsSettingsOpen(false);
  };

  const savePreferences = (prefs: Partial<CookiePreferences>) => {
    saveToStorage({
      ...preferences,
      ...prefs,
      essential: true // Always required
    });
    setIsSettingsOpen(false);
  };

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasConsent,
        isSettingsOpen,
        acceptAll,
        rejectAll,
        savePreferences,
        openSettings,
        closeSettings
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
};
