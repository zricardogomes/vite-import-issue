import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  worker: {
    rollupOptions: {
      output: {
        entryFileNames: `[name]-entry.js`,
        chunkFileNames: `[name]-chunk.js`,
        assetFileNames: `[name]-asset.[ext]`,
      },
    },
  },
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, 'index.js'), // Your main entry file
      name: 'exosocket',
      fileName: 'exosocket',
      formats: ['es'],
    },
    rollupOptions: {
      input: {
        exosocket: resolve(__dirname, 'index.js'), // Main entry file
        //worker: resolve(__dirname, 'worker.js'), // Worker script
      },
      output: {
        entryFileNames: '[name].js', // Set the naming pattern for entry chunk files
      },
    },
  },
});
