const esbuild = require('esbuild')
const mode = process.env.NODE_ENV === 'production'

esbuild
  .build({
    entryPoints: {
      app: 'index.tsx',
    },
    outdir: 'build/esbuildjs',
    bundle: true,
    minify: mode,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  })
  .catch(() => process.exit(1))

// esbuild
//   .serve(
//     {
//       servedir: 'www',
//       port: 8000,
//     },
//     {
//       entryPoints: ['src/app.js'],
//       outdir: 'www/js',
//       bundle: true,
//     }
//   )
//   .then((server) => {
//     // Call "stop" on the web server to stop serving
//     server.stop()
//   })
