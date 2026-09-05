export const site = {
  // Identidad
  name: "",
  tagline: "",
  lang: "", // ej: "es"

  // URLs
  url: "", // sin / al final
  logo: "",

  // Contacto
  email: "",
  phone: "",
  whatsapp: "", // link completo: https://wa.me/<numero>

  // Dirección física
  address: {
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "",
  },

  // Redes sociales (dejar vacío "" el que no aplique, no borrar la key)
  social: {
    facebook: "",
    instagram: "",
    tiktok: "",
    googleMaps: "", // link a la ficha de Google Business Profile
  },

  // SEO (usado por <SEO> de astro-seo en Layout.astro)
  seo: {
    defaultTitle: "",
    titleTemplate: "", // ej: "%s - Pool supply"
    defaultDescription: "",
    ogImage: "",
    twitterHandle: "",
    locale: "", // ej: "es_CO", "es_CR", "es_MX"
  },

  // Datos de negocio local (JSON-LD / schema.org)
  business: {
    type: "", // ej: "Plumber", "Electrician", "HVACBusiness", "HousePainter"
    priceRange: "", // ej: "$$"
    openingHours: [], // ej: ["Mo-Fr 08:00-17:00", "Sa 09:00-13:00"]
    geo: {
      latitude: "",  // ej: 9.9281
      longitude: "", // ej: -84.0907
    },
    areaServed: "", // string o array — ej: "San José" o ["San José", "Heredia"]
  },
};