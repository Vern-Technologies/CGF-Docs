module.exports = {
  // themeConfig: {
  //   // ...
  //   algolia: {
  //     apiKey: 'YOUR_API_KEY',
  //     indexName: 'YOUR_INDEX_NAME',

  //     // Optional: see doc section below
  //     contextualSearch: true,

  //     // Optional: Algolia search parameters
  //     searchParameters: {},

  //     //... other Algolia params
  //   },
  // },
  docs: [
    {
      type: 'category',
      label: 'Tracker Web',
      items: ['tracker-web/customers', 'tracker-web/containers', 'tracker-web/users', 'tracker-web/settings', 
      'tracker-web/password_standards', 'tracker-web/qrcodes'],
      collapsed: false,
    },
  ]
};
