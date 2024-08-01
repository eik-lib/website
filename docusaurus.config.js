module.exports = {
	title: "Eik",
	tagline: "A modern ESM and CSS asset server",
	url: "https://eik.dev",
	baseUrl: "/",
	favicon: "img/favicon.ico",
	organizationName: "eik-lib", // Usually your GitHub org/user name.
	projectName: "eik-lib.github.io", // Usually your repo name.
	plugins: [
		require.resolve("docusaurus-lunr-search"),
		[
			// Add redirects when moving pages around
			// https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects#configuration
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{
						from: "/docs/client_installation",
						to: "/docs/reference/eik-cli",
					},
					{
						from: "/docs/overview_eik_json",
						to: "/docs/reference/eik-json",
					},
				],
			},
		],
	],
	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/eik-lib/eik-lib.github.io/tree/source/docs",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],
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
};
