interface SiteMetadata {
  title: string;
  author: string;
  headerTitle: string;
  description: string;
  keywords: string;
  language: string;
  theme: "system" | "dark" | "light";
  siteUrl: string;
  siteRepo: string;
  siteLogo: string;

  socialBanner: string;
  email: string;
  github: string;
  x: string;
  facebook: string;
  youtube: string;
  linkedin: string;
  threads: string;
  instagram: string;
  medium: string;
  bluesky: string;
  locale: string;
  stickyNav: boolean;
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: string;
    };
  };
  newsletter: {
    provider: string;
  };
  search: {
    provider: string;
    kbarConfig: {
      searchDocumentsPath: string;
    };
  };
}

const siteMetadata: SiteMetadata = {
  title: "Yapay Zekâ SaaS'ını Tek Tıkla Yayına Al",
  author: "Atalas",
  headerTitle: "Yapay Zekâ SaaS'ını Tek Tıkla Yayına Al",
  description:
    "Next.js ve Supabase ile geliştirilmiş hepsi bir arada yapay zeka SaaS başlangıç şablonu. Kullanıcı kimlik doğrulama, Stripe ödeme ve çoklu dil desteği içerir. Fikirlerinizi hızla ürüne dönüştürmek için tek tıkla yayına alın.",
  keywords:
    "Yapay zekâ SaaS şablonu, tek tıkla SaaS başlatma, tek tıkla dağıtım, hızlı SaaS başlangıç şablonu, yapay zeka girişim şablonu, SaaS site oluşturucu, hızlı SaaS kurulum, yapay zeka SaaS iskeleti, Next.js SaaS şablonu, Supabase SaaS şablonu, geliştirici araçları, Stripe ödeme entegrasyonu, kullanıcı kimlik doğrulama sistemi, çok dilli SaaS, teknoloji girişim aracı, bağımsız geliştirici şablonu, modern SaaS teknoloji yığını, yapay zeka ürün geliştirme, uluslararası SaaS şablonu, Vercel tek tıkla dağıtım",
  language: "tr-TR",
  theme: "system", // system, dark or light

  siteUrl:
    process.env.NODE_ENV === "production"
      ? "https://shipsaas1click.com" // Üretim ortamı URL'si
      : "http://localhost:3000", // Geliştirme ortamı URL'si
  siteRepo: "https://github.com/fengyunzaidushi/ship-saas-one-click.git",
  siteLogo: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ""}/static/images/twitter-card.png`,
  email: "address@yoursite.com",
  github: "https://github.com",
  x: "https://twitter.com/x",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  linkedin: "https://www.linkedin.com",
  threads: "https://www.threads.net",
  instagram: "https://www.instagram.com",
  medium: "https://medium.com",
  bluesky: "https://bsky.app/",
  locale: "tr-TR",
  stickyNav: true,
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: "buttondown",
  },

  search: {
    provider: "kbar",
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ""}/search.json`,
    },
  },
};

export default siteMetadata;
