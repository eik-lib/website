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
						from: "/docs/overview",
						to: "/docs/introduction",
					},
					{
						from: "/docs/overview_concepts",
						to: "/docs/dependencies/introduction",
					},
					{
						from: "/docs/overview_workflow",
						to: "/docs/introduction/workflow",
					},
					{
						from: "/docs/overview_eik_json",
						to: "/docs/reference/eik-json",
					},
					{
						from: "/docs/client",
						to: "/docs/introduction/workflow",
					},
					{
						from: "/docs/client_installation",
						to: "/docs/reference/at-eik-cli",
					},
					{
						from: "/docs/client_login",
						to: "/docs/reference/at-eik-cli",
					},
					{
						from: "/docs/client_app_packages",
						to: "/docs/introduction/workflow",
					},
					{
						from: "/docs/client_npm_packages",
						to: "/docs/dependencies/npm",
					},
					{
						from: "/docs/client_import_maps",
						to: "/docs/dependencies/import-maps",
					},
					{
						from: "/docs/client_aliases",
						to: "/docs/dependencies/aliases",
					},
					{
						from: "/docs/client_putting_it_all_together",
						to: "/docs/introduction/workflow",
					},
					{
						from: "/docs/mapping_import_map",
						to: "/docs/dependencies/import-maps",
					},
					{
						from: "/docs/mapping_browser",
						to: "/docs/introduction#import-mapping",
					},
					{
						from: "/docs/mapping_plugins",
						to: "/docs/introduction/workflow#build-time-import-mapping",
					},
					{
						from: "/docs/server_api",
						to: "/docs/reference/at-eik-service",
					},
					{
						from: "/docs/server_sink",
						to: "/docs/server/storage",
					},
					{
						from: "/docs/server_rest_api",
						to: "/docs/server/http-api",
					},
					{
						from: "/docs/server_file_structure",
						to: "/docs/server/storage#internal-storage-structure",
					},
					{
						from: "/docs/server_metrics",
						to: "/docs/server/metrics",
					},
					{
						from: "/docs/ci",
						to: "/docs/guides/github-actions",
					},
					{
						from: "/docs/travis",
						to: "/docs/guides/travis",
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
					editUrl: "https://github.com/eik-lib/eik-lib.github.io/tree/source",
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
					to: "/docs/introduction/",
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
