module.exports = {
  title: "Eik",
  tagline: "A modern ESM and CSS asset server",
  url: "https://eik.dev",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "eik-lib", // Usually your GitHub org/user name.
  projectName: "eik-lib.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Eik",
      logo: {
        alt: "Eik Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/overview",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://github.com/eik-lib",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} - FINN.no.`,
    },
    prism: {
      theme: require("prism-react-renderer").themes.github,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    require.resolve("docusaurus-lunr-search"),
    [
      // Add redirects when moving pages around
      // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects#configuration
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            from: "/docs/podium/conceptual_overview",
            to: "/docs/",
          },
          {
            from: "/docs/api/getting_started",
            to: "/docs/introduction/hello-podium",
          },
          {
            from: "/docs/podlet/getting_started",
            to: "/docs/introduction/hello-podium",
          },
          {
            from: "/docs/layout/getting_started",
            to: "/docs/introduction/hello-podium",
          },
          {
            from: "/docs/layout/assets",
            to: "/docs/guides/assets",
          },
          {
            from: "/docs/introduction/assets",
            to: "/docs/guides/assets",
          },
          {
            from: "/docs/layout/context",
            to: "/docs/guides/context",
          },
          {
            from: "/docs/introduction/context",
            to: "/docs/guides/context",
          },
          {
            from: "/docs/podlet/context",
            to: "/docs/guides/context",
          },
          {
            from: "/docs/podlet/fallbacks",
            to: "/docs/guides/fallbacks",
          },
          {
            from: "/docs/podlet/proxying",
            to: "/docs/guides/proxying",
          },
          {
            from: "/docs/layout/handling_redirects",
            to: "/docs/guides/redirects",
          },
          {
            from: "/docs/layout/unavailable_podlets",
            to: "/docs/guides/fallbacks#throwable-podlets",
          },
          {
            from: "/docs/layout/dynamic_routes",
            to: "/docs/guides/passing-values-to-podlets",
          },
          {
            from: "/docs/layout/local_development",
            to: "/docs/guides/layout-development",
          },
          {
            from: "/docs/podlet/local_development",
            to: "/docs/guides/podlet-development",
          },
        ],
      },
    ],
  ],
};
