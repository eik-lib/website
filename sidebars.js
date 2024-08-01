/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
	sidebar: [
		{
			type: "category",
			label: "Overview",
			collapsed: false,
			items: ["overview", "overview_concepts", "overview_workflow"],
		},
		{
			type: "category",
			label: "Publishing to Eik",
			collapsed: false,
			items: [
				"client",
				"client_installation",
				"client_login",
				"client_app_packages",
				"client_npm_packages",
				"client_import_maps",
				"client_aliases",
				"client_putting_it_all_together",
			],
		},
		{
			type: "category",
			label: "Import mapping",
			collapsed: false,
			items: ["mapping_import_map", "mapping_browser", "mapping_plugins"],
		},
		{
			type: "category",
			label: "Eik server",
			items: [
				"server",
				"server_api",
				"server_sink",
				"server_rest_api",
				"server_file_structure",
				"server_metrics",
			],
		},
		{
			type: "category",
			label: "Continuous integration",
			items: ["ci", "travis"],
		},
		{
			type: "category",
			label: "Reference",
			items: [
				{
					type: "autogenerated",
					dirName: "reference",
				},
			],
		},
	],
};
