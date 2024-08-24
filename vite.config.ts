import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({ resolvers: [PrimeVueResolver()] }),
    tsconfigPaths(),
  ],
  server: {
    host: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/config/test-utils"],
  },
});
