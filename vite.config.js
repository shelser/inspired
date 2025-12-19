import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import vitePluginSvgr from 'vite-plugin-svgr';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
});
