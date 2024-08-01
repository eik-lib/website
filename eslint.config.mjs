import config from "@eik/eslint-config";
import react from "eslint-plugin-react";

export default [
	...config,
	react.configs.flat.recommended,
	{
		settings: {
			react: {
				version: "18.2.0",
			},
		},
	},
	{ ignores: [".docusaurus/*", "build/*"] },
];
