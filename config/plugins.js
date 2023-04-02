module.exports = ({ env }) => ({
  // ..
  'transformer': {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      }
    }
  },
  upload: {
    config: {
      provider: 'strapi-provider-upload-oss',
      providerOptions: {
        accessKeyId: env('ACCESS_KEY_ID'),
        accessKeySecret: env('ACCESS_KEY_SECRET'),
        region: env('REGION'),
        bucket: env('BUCKET'),
        uploadPath: env('UPLOAD_PATH'),
        baseUrl: env('BASE_URL'),
        timeout: env('TIMEOUT'),
        autoThumb: false
      }
    }
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::game.game",
          modelName: "game",
          transliterate: false,
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -1000,
            limit: 10,
            keys: [
              {
                name: "title",
                weight: 100,
              },
              {
                name: "intro",
                weight: 100,
              },
            ],
          },
        },
      ],
    },
  },
});