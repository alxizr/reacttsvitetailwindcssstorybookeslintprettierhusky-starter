import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			// Exclude storybook stories from using HMR
			exclude: /\.stories\.(t|j)sx?$/,
			include: "**/*.tsx",
		}),
		tsconfigPaths(),
		basicSsl(),
		svgr(),
		splitVendorChunkPlugin(),
	],
	server: {
		hmr: true,
		https: true,
		open: true,
		port: 3000,
	},
});
