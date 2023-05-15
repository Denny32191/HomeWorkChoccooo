const {src, dest, task} = require("gulp");
const rm = require( 'gulp-rm');

gulp.task("default", function () {
    return gulp
      .src("src/*.html")
      .pipe(
        remove({
          whitelist: [
            ".ExternalClass",
            ".ReadMsgBody",
            ".yshortcuts",
            ".Mso*",
            ".maxwidth-apple-mail-fix",
            "#outlook",
            ".module-*",
          ],
        })
      )
      .pipe(gulp.dest("./dist"));
  });

function copy() {
    return src("css/components/*.scss").pipe(dest("dist"))
}

exports.copy = copy