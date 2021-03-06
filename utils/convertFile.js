const csvjson = require('csvjson');
const path    = require('path');
const fs      = require('fs');
const appRoot = require('app-root-path');

exports.csvToJson = (csv) => {
  let file = fs.readFileSync(path.join(appRoot.path, csv), { encoding : 'utf8'});
  let options = {
    delimiter : ',',
    quote     : '"'
  };

  return csvjson.toObject(file, options);
}

exports.jsonToCsv = (json) => {
  let file = fs.readFileSync(path.join(appRoot.path, json), { encoding : 'utf8'});
  let options = {
    delimiter : ',',
    wrap        : false
  };

  return csvjson.toCSV(file, options);  
}
