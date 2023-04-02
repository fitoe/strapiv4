module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::compression',
    config: {
      br: true,
      gzip: true
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          'script-src': ["'self'", "'unsafe-inline'", 'statics.feifantrade.com'],
          'img-src': ["'self'", 'data:', 'blob:', `${env('BASE_URL')}`],
          'media-src': ["'self'", 'data:', 'blob:', `${env('BASE_URL')}`],
          upgradeInsecureRequests: null,
        },
      }
    },
  }
];
