import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'

import path from 'path'
import fs from 'graceful-fs'
import makeDir from 'make-dir'
import util from 'util'

const writeFile = util.promisify(fs.writeFile)
const srcDir = 'src/img'
const distDir = 'public/img'

imagemin([`${srcDir}/**/*.{jpg,jpeg,png,svg}`], {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
  ],
}).then((files) =>
  files.forEach(async (v) => {
    let source = path.parse(v.sourcePath)
    v.destinationPath = `${source.dir.replace(srcDir, distDir)}/${source.name}${
      source.ext
    }`
    await makeDir(path.dirname(v.destinationPath))
    await writeFile(v.destinationPath, v.data)
  })
)
