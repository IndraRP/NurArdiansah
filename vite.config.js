import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Nur Ardiansah',
        short_name: 'Nur Ardiansah',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/icon.jpg',
            sizes: '192x192',
            type: 'image/jpg',
          },
          {
            src: '/icon.jpg',
            sizes: '512x512',
            type: 'image/jpg',
          },
        ],
      },
    }),
  ],
  base: "/"
});
