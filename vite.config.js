import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Source contains JSX in .js files from the older CRA structure.
export default defineConfig({
  base: '/',
  plugins: [react({ include: /\.[jt]sx?$/ })],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: { loader: { '.js': 'jsx' } },
  },
})
