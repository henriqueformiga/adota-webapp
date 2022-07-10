import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@constants': '/src/constants',
      '@router': '/src/router',

      '@atoms': '/src/componentes/atoms',
      '@molecules': '/src/componentes/molecules',
      '@organisms': '/src/componentes/organisms',
      '@templates': '/src/componentes/templates',
    },
  },
});
