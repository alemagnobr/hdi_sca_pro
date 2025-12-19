import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base is crucial for GitHub Pages. 
  // It ensures assets are loaded from /repo-name/ instead of root /
  base: './', 
})