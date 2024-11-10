import {defineConfig, loadEnv} from 'vite';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      federation({
        name: 'remotes',
        filename: 'cmsEntry.js',
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
    preview: {
      port: 3001,
      strictPort: true,
    },
  };
});
