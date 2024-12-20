import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      scopeBehaviour: "local",
      localsConvention: "camelCase",
    },
    postcss: { plugins: [autoprefixer()] },
  },
  cacheDir: "node_modules/.cacheDir",
  plugins: [
    vue(),
    federation({
      name: "layout",
      filename: "remoteEntry.js",
      remotes: {
        // 第一种方案
        // "css-modules": "http://localhost:5003/assets/remoteEntry.js",
        // 第二种方案
        // "css-modules": {
        //   external: `Promise.resolve('http://localhost:5003/assets/remoteEntry.js')`,
        //   externalType: "promise",
        // },
      },
      shared: ["vue", "ant-desine-vue"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
