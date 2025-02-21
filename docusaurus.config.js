// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '标签筛选、关键词搜索和一键复制 Prompts',
  // tagline: '方便中文使用 ChatGPT 快捷指令',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://newzone.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/chatgpt/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rockbenben', // Usually your GitHub org/user name.
  projectName: 'ChatGPT-Shortcut', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales:  ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        /* docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-RWKZTY2P9R',
          anonymizeIP: false,
        },
      }),
    ],
  ],
  plugins: [
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
    './plugins/piwik.js',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      metadata: [{name: 'keywords', content: 'prompt,ChatGPT,AI prompts，提示词'}],
      navbar: {
        title: 'ChatGPT SC',
        logo: {
          alt: 'ChatGPT Shortcuts',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'https://newzone.top/posts/2023-02-27-chatgpt_shortcuts.html',
            label: 'ChatGPT 使用说明',
            position: 'left',
          },
          {
            to: 'https://nav.newzone.top',
            label: '开源工具导航',
            position: 'left',
          },
          {href: '/', label: 'EN', title: '英文提示词', position: 'right'},
          {to: '/cn', label: 'CN', title: '中文提示词', position: 'right'},
          {
            href: 'https://github.com/rockbenben/ChatGPT-Shortcut',
            position: 'right',
            className: 'header-github-link',
          },
          /* {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          */
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} ChatGPT Shortcut`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
