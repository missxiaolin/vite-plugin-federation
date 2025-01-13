import { defineConfig } from "vite";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "@vitejs/plugin-vue";
import importToConst from "./vite/importToConst";
const banner = `/*!
* xiaolin ${new Date()}
* (c) 2021 @Energy Monster All Right Reserved..
*/`;

// https://vitejs.dev/config/
export default defineConfig({
  // , importToConst()
  plugins: [vue()],
  build: {
    // outDir: "./dist",
    // lib: {
    //   entry: "src/components/button.vue",
    //   name: "MyButton",
    //   // fileName: (format) => `my-button.${format}.js`,
    //   formats: ["es", "umd", "cjs", "iife", "system"],
    // },
    // rollupOptions: {
    //   external: ["vue", "ant-design-vue"],
    //   output: {
    //     globals: {
    //       vue: "Vue",
    //       "ant-design-vue": "antd",
    //       // 'element-plus': 'ElementPlus', // import { ElRate } from 'element-plus' => const { ElRate } = ElementPlus
    //     },
    //   },
    // },
    outDir: "./dist",
    minify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      // plugins: [resolve(), commonjs()],
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue", "vue-router", "ant-design-vue"],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "ant-design-vue": "antd",
        },
      },
    },
    lib: {
      entry: "src/components/index.js",
      name: "button",
      fileName: "button",
      // formats: ["umd"],
      // formats: ["es"],
      formats: ["es", "umd"],
    },
  },
});
