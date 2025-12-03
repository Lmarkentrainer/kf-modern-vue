import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useCookieConsent } from "@/contexts/CookieConsentContext";
import { cookieCategories, CookiePreferences } from "@/lib/cookieTypes";
import { Shield, BarChart3, Megaphone, MonitorPlay } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  essential: <Shield className="h-5 w-5 text-primary" />,
  statistics: <BarChart3 className="h-5 w-5 text-primary" />,
  marketing: <Megaphone className="h-5 w-5 text-primary" />,
  externalMedia: <MonitorPlay className="h-5 w-5 text-primary" />
};

const CookieSettings = () => {
  const { preferences, isSettingsOpen, closeSettings, savePreferences, acceptAll } = useCookieConsent();
  
  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    setLocalPrefs(preferences);
  }, [preferences, isSettingsOpen]);

  const handleToggle = (categoryId: string, checked: boolean) => {
    setLocalPrefs(prev => ({
      ...prev,
      [categoryId]: checked
    }));
  };

  const handleSave = () => {
    savePreferences(localPrefs);
  };

  return (
    <Dialog open={isSettingsOpen} onOpenChange={(open) => !open && closeSettings()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Cookie-Einstellungen</DialogTitle>
          <p className="text-sm text-muted-foreground mt-2">
            Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten 
            personenbezogene Daten von Ihnen (z.B. IP-Adresse), um unsere Website zu optimieren.
          </p>
        </DialogHeader>

        <Accordion type="multiple" className="w-full" defaultValue={["essential"]}>
          {cookieCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 flex-1">
                  {categoryIcons[category.id]}
                  <span className="font-semibold">{category.name}</span>
                  {category.required && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      Erforderlich
                    </span>
                  )}
                </div>
                <div className="mr-4" onClick={(e) => e.stopPropagation()}>
                  <Switch
                    checked={category.required || localPrefs[category.id as keyof CookiePreferences] as boolean}
                    onCheckedChange={(checked) => handleToggle(category.id, checked)}
                    disabled={category.required}
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Cookie</TableHead>
                      <TableHead>Anbieter</TableHead>
                      <TableHead>Zweck</TableHead>
                      <TableHead>Dauer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.cookies.map((cookie, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{cookie.name}</TableCell>
                        <TableCell>{cookie.provider}</TableCell>
                        <TableCell>{cookie.purpose}</TableCell>
                        <TableCell>{cookie.duration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button variant="outline" onClick={handleSave} className="w-full sm:w-auto">
            Auswahl speichern
          </Button>
          <Button onClick={acceptAll} className="w-full sm:w-auto">
            Alle akzeptieren
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieSettings;
