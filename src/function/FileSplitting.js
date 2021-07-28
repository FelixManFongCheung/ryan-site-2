const testFolder = "../public/paintings/";
const fs = require("fs");

fs.readdir(testFolder, (err, files) => {
  console.log(testFolder);
  console.log(files);
});
