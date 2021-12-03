var fs = require('fs')
var path = require('path')
var XLSX = require('./xlsx.js')

function sheet_to_json(filename, output) {
  const wb = XLSX.readFile(filename)

  const sheetNames = wb.SheetNames[0];
  const sheets = wb.Sheets;
  const sheet = sheets[sheetNames]
  const data = XLSX.utils.sheet_to_json(sheet)

  const dataString = JSON.stringify(data, null, "\t")

  fs.writeFile(output, dataString, function(err) {
    if (err) {
      console.log(err)
    }
  })
}

module.exports = sheet_to_json
