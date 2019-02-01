//node util-compare.js srcDir=../output/dev destDir=../output/tst

const {args, fillTemplate} = require('./util-args.js');

var path = require("path");
const fse = require('fs-extra');
const {srcDir, destDir} = args;

(async () => {
  const fileArrayToMap = (arr) => {return arr.reduce((p, i) => { p[i] = true; return p;}, {})};
  const compareLength = (obj1, obj2) => obj1.rows.length === obj2.rows.length;
  const compareRows = (obj1, obj2) => {
    const rows1 = obj1.rows;
    const rows2 = obj2.rows;
    const rows1Map = rows1.reduce((p, c)=> { p.push(c.join('~')); return p;}, {});
    const rows2Map = rows2.reduce((p, c)=> { p.push(c.join('~')); return p;}, {});

    

  };



  console.log(`comparing [src]: ${srcDir} }--and--{ [dest]: ${destDir}`);

  const srcFilesArr = fse.readdirSync(srcDir).sort();
  const srcFilesMap = fileArrayToMap(srcFilesArr);
  const destFilesArr = fse.readdirSync(destDir).sort();
  const destFilesMap = fileArrayToMap(destFilesArr);
  let notInDestFilesArr = [];
  let diffObj = [];
  srcFilesArr.forEach(srcFileName => {
    if(destFilesArr.some(i => i === srcFileName)) {
      const srcJSON = JSON.parse(fse.readFileSync(`${srcDir}/${srcFileName}`, 'utf8'));
      const destSON = JSON.parse(fse.readFileSync(`${destDir}/${srcFileName}`, 'utf8'));
      if(!compareLength(srcJSON,destSON)) {
        diffObj.push({type: 'rowCount', file: srcFileName, src: srcJSON.row.length, dest:  destSON.row.length});
        console.warn(`${srcFileName}: [src]: `);
      }

    } else {
      diffObj.push({type: 'fileCount', file: srcFileName});
    }
  });

  if(diffObj.length > 0) {
    console.warn(`Some files not found in dest folder: ${diffObj.join('\n')}`);
  }

})();
