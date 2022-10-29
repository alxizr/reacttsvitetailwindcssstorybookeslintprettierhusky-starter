// import path from "path";
// import { loadConfigFromFile, mergeConfig, UserConfig } from "vite";

module.exports = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
				cssLoaderOptions: {
					importLoaders: true,
				},
			},
		},

		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",

		// {
		// 	name: "storybook-addon-sass-postcss",
		// 	options: {
		// 		loadSassAfterPostCSS: true,
		// 		postcssLoaderOptions: {
		// 			implementation: require("postcss"),
		// 		},
		// 	},
		// },
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-vite",
	},
	features: {
		storyStoreV7: true,
	},

	// async viteFinal(config, { configType }) {
	// 	const { userConfig: UserConfig } = await loadConfigFromFile(
	// 		path.resolve(__dirname, "../vite.config.ts"),
	// 	);

	// 	return mergeConfig(config, {
	// 		...userConfig,
	// 	});
	// },
};
