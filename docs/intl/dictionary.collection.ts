import fs from 'fs';
import path from 'path';

const dictionaryCollection = {
  slug: 'dictionaries',
  fields: [
    {
      name: 'language',
      type: 'text',
      required: true,
    },
    {
      name: 'translations',
      type: 'array',
      fields: [
        {
          name: 'key',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        }
      ]
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const filePath = path.join(__dirname, `./${doc.language}.json`);
        const translations = doc.translations.reduce((acc, curr) => {
          acc[curr.key] = curr.value;
          return acc;
        }, {});

        fs.writeFileSync(filePath, JSON.stringify(translations, null, 2));
      }
    ]
  }
}