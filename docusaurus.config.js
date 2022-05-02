// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XRCloud 3rd App API Document',
  tagline: 'Make your custom Metaverse easily!',
  url: 'https://belivvr.github.io',
  baseUrl: '/xrcloud-3rd-app-user-api-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Belivvr', // Usually your GitHub org/user name.
  projectName: 'xrcloud-3rd-app-user-api-doc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/belivvr/xrcloud-3rd-app-user-api-doc/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'XRCloud 3rd App API Document',
        logo: {
          alt: 'XRCloud 3rd App API Document Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduce',
            position: 'left',
            label: 'Introduce',
          },
          {
            type: 'doc',
            docId: 'api/authorization',
            position: 'left',
            label: 'API',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: 'https://github.com/belivvr/xrcloud-3rd-app-user-api-doc',
                label: 'Help us translate',
              },
            ],
          },
          {
            href: 'https://github.com/belivvr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduce',
                to: '/docs/introduce',
              },
              {
                label: 'API',
                to: '/docs/api/authorization',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://medium.com/belivvr',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/belivvr',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BELIVVR, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
    },
  },
};

module.exports = config;
