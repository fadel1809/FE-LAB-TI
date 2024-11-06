/* eslint-disable no-undef */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());

  console.log("LOCAL_URL:", env.VITE_LOCAL_URL); // Debug, cek apakah variabel terbaca dengan benar

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_LOCAL_URL, // Gunakan env.VITE_LOCAL_URL, bukan process.env
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
