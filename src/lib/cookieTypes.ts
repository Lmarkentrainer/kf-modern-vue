export interface CookieInfo {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
}

export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  cookies: CookieInfo[];
}

export const cookieCategories: CookieCategory[] = [
  {
    id: "essential",
    name: "Essenziell",
    description: "Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht deaktiviert werden. Sie werden nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen.",
    required: true,
    cookies: [
      {
        name: "cookie-consent",
        provider: "BKF Assekuranz",
        purpose: "Speichert Ihre Cookie-Einstellungen",
        duration: "1 Jahr"
      }
    ]
  },
  {
    id: "statistics",
    name: "Statistik",
    description: "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.",
    required: false,
    cookies: [
      {
        name: "Derzeit keine",
        provider: "-",
        purpose: "Keine Statistik-Cookies aktiv",
        duration: "-"
      }
    ]
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen. Sie können auch dazu verwendet werden, die Häufigkeit zu begrenzen, mit der Sie eine Anzeige sehen.",
    required: false,
    cookies: [
      {
        name: "Derzeit keine",
        provider: "-",
        purpose: "Keine Marketing-Cookies aktiv",
        duration: "-"
      }
    ]
  },
  {
    id: "externalMedia",
    name: "Externe Medien",
    description: "Inhalte von Videoplattformen und Social-Media-Plattformen werden standardmäßig blockiert. Wenn Cookies von externen Medien akzeptiert werden, bedarf der Zugriff auf diese Inhalte keiner manuellen Einwilligung mehr.",
    required: false,
    cookies: [
      {
        name: "Google Maps",
        provider: "Google LLC",
        purpose: "Einbindung von Google Maps Karten",
        duration: "Session bis 2 Jahre"
      }
    ]
  }
];

export interface CookiePreferences {
  essential: boolean;
  statistics: boolean;
  marketing: boolean;
  externalMedia: boolean;
  timestamp: string;
}

export const defaultPreferences: CookiePreferences = {
  essential: true,
  statistics: false,
  marketing: false,
  externalMedia: false,
  timestamp: ""
};
