import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client'),
    },
  },
  build: {
    // Code splitting for better caching and smaller chunks
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-radix': ['@radix-ui/react-accordion', '@radix-ui/react-alert-dialog', '@radix-ui/react-popover'],
          'vendor-ui': ['sonner', 'lucide-react'],
          // Page chunks for better lazy loading
          'pages-company': ['./client/pages/company/AboutUs.jsx', './client/pages/company/MeetTheTeam.jsx', './client/pages/company/ESG.jsx'],
          'pages-projects': ['./client/pages/project/ProjectDetail.jsx', './client/pages/PortfolioProjects.jsx'],
        }
      }
    },
    // Minification and optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
    // CSS minification
    cssMinify: true,
    // Sourcemap only for debugging (disable for production)
    sourcemap: false,
    // Report file size
    reportCompressedSize: true,
    // Target modern browsers for smaller output
    target: 'es2020',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
    ]
  }
})