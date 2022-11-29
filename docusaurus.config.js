// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mr.Gil",
  tagline: "A Powerful Guilded API wrapper made entirely in Typescript.",
  url: "https://mrgil.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://avatars.githubusercontent.com/u/116489754?s=400&u=1101ad39497589fa9e440653b48e2804b3d0adcd&v=4",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/mr-gil/gil-docs",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },

      navbar: {
        title: "Mr.Gil",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/mr-gil/mr.gil",
            label: "GitHub",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Guilded API",
                href: "https://www.guilded.gg/docs/api",
              },
              {
                label: "Learn Javascript",
                href: "https://www.codecademy.com/learn/introduction-to-javascript",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: "Guilded",
                href: "https://guilded.gg/simply-develop",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/3JzDV9T5Fn",
              },
              {
                label: "GitHub",
                href: "https://github.com/mr-gil",
              },
            ],
          },
        ],
        copyright: `<br>Copyright © ${new Date().getFullYear()} Simply Develop. npm i mr.gil<br></br><b>Not affiliated with Guilded.gg</b>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
