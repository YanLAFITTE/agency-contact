import gulp from 'gulp';
import sharpResponsive from 'gulp-sharp-responsive';

const responsive_img = () =>
   gulp
      .src('./src/assets/images/*.jpg')
      .pipe(
         sharpResponsive({
            formats: [
               // webp
               { width: 330, format: 'webp', rename: { suffix: '-330w' } },
               { width: 768, format: 'webp', rename: { suffix: '-768w' } },
               {
                  width: 1024,
                  format: 'webp',
                  rename: { suffix: '-1024w' },
               },
            ],
         })
      )
      .pipe(gulp.dest('./src/assets/images/responsive'));

export { responsive_img };
