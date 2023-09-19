import { defineConfig, loadEnv } from "vite";
import vue from '@vitejs/plugin-vue';

// config_prefix environment
const ENV_PREFIX = [loadEnv('', process.cwd(), "ENV_").ENV_PREFIX];
process.env = { ...process.env, ...loadEnv('', process.cwd(), ENV_PREFIX) };


// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.VUE_APP_MODE,
  envPrefix: ENV_PREFIX,
  envDir: process.cwd(),
  plugins: [vue()],
  publicDir: "public",
  clearScreen: true,
  appType: "spa",
  build: {
    modulePreload: true,
    target: "esnext",
    minify: true,
    cssCodeSplit: true,
    outDir: "dist",
    assetsDir: "",
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        chunkFileNames: `chunk-vue-app.js`,
        entryFileNames: `vue-app.js`,
        assetFileNames: `vue-app.css`,
        minifyInternalExports: true,
        noConflict: true,
        validate: true,
        format: "esm",
        sourcemap: true,
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes(""))
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
          }
        },
      },
    },
    copyPublicDir: true,
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
      { find: "@/", replacement: "/src/" },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        rootpath: process.env.VUE_APP_HOST,
      },
    },
  },
  base: process.env.VUE_APP_BASE_PATH,
});
