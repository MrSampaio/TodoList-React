import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     '/todo': {
  //       target: 'https://potential-yodel-j6jvv5x4xxr3pw6p-3000.app.github.dev',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
