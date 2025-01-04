/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {


  const ENV_DEV = "http://localhost:3000/api"
  const ENV_STAGING = "https://api-lab-ti.my.id/api"
  const ENV = "development"
  return {
    plugins: [react()],
    build:{
      chunkSizeWarningLimit:5000,
    },
    server: {
      proxy: {
        "/api": {
          target: ENV === "development" ? ENV_DEV: ENV_STAGING,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
