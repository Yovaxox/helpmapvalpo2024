import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    // Agrega esto para manejar archivos .jsx
    fs: {
      strict: false,
    },
  },
};
