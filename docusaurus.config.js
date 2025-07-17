
module.exports = {
  title: 'Breadstone Документация',
  logo: {
    alt: 'Breadstone Logo',
    src: 'img/logo.svg',
  },
  tagline: 'Be Safe Through your life',
  url: 'https://Cvetomir2014.github.io',
  baseUrl: '/breadstone-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Cvetomir2014',
  projectName: 'breadstone-docs',
  trailingSlash: false,
  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'Breadstone, криптовалута, токени, добив, семейна безопасност'},
      {name: 'description', content: 'Breadstone е крипто платформа за безопасност и реална употреба на токени.'}
    ],
    googleAnalytics: {
      trackingID: 'UA-000000-2',
      anonymizeIP: true,
    },
    navbar: {
      title: 'Breadstone',
      items: [
        { to: '/breadstone-docs/docs/', label: 'Документация', position: 'left' }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Breadstone.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
