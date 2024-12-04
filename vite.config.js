/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  // Load environment variables



  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: "https://api-lab-ti.my.id/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
