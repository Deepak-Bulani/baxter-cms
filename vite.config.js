import {defineConfig} from 'vite';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

export default defineConfig({

  plugins: [
    federation({
      name: 'remotes',
      filename: 'cmsEntry.js',
      remotes: {
        baxterAtoms: `http://localhost:3006/dist/assets/atomicLibrary.js`, 
        // baxterAtoms: 'http://localhost:3002/dist/assets/vueEntry.js', 
      },
      exposes: {   
        './Patient': './src/components/patient/index.jsx',
      },
      // exposes: {   
      //   './Tidal': './src/components/Tidal.jsx',
      // },
      shared: ['react', 'react-dom'],
    }),
    [svgr()],
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
      },
    },
  },
  server: {
    port: 3001,
    cors: true, // Enable CORS
  },
});
