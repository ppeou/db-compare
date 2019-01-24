//node util-compare.js srcDir=../output/dev destDir=../output/tst

const {args, fillTemplate} = require('./util-args.js');

var path = require("path");
const fse = require('fs-extra');
const {srcDir, destDir} = args;

(async () => {

  console.log(`src: ${srcDir}`);
  console.log(`dest: ${destDir}`);

})();
