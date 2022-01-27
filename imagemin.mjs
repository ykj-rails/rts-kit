import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'

const files = await imagemin(['src/img/**/*.{jpg,png}'], {
  destination: 'public/img',
  plugins: [
    imageminMozjpeg(),
    imageminPngquant({
      quality: [0.6, 0.8],
    }),
  ],
})

console.log(files)
