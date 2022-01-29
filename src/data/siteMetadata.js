const siteMetadata = {
  title: "Dafunda.io",
  author: "Dafunda Dev Team",
  headerTitle: "Dafunda.io",
  description: "Dafunda Developer Site",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: "https://dafunda.io",
  siteRepo: "https://github.com/dafundacom/dafunda.io",
  siteLogo: "/static/images/dafunda-logo.webp",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "dev@dafunda.io",
  github: "https://github.com/dafundacom",
  twitter: "https://twitter.com/dafundacom",
  facebook: "https://facebook.com/dafundacom",
  youtube: "https://www.youtube.com/channel/UCYchN7Ddw494W2NfoujFUkQ",
  linkedin: "https://www.linkedin.com/company/dafunda",
  locale: "en-US",
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: "", // e.g. dafunda.io
    simpleAnalytics: false, // true or false
    umamiWebsiteId: "", // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: "", // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: "buttondown",
  },
}

module.exports = siteMetadata
