var fs = require('fs')
var path = require('path')
var XLSX = require('./xlsx.js')

const wb = XLSX.readFile(path.resolve(__dirname, './index.xlsx'))

const sheetNames = wb.SheetNames[0];
const sheets = wb.Sheets;
const sheet = sheets[sheetNames]
const data = XLSX.utils.sheet_to_json(sheet)

const dataString = JSON.stringify(dataString, null, "\t")

fs.writeFile('data.json', str, function(err) {
  if (err) {
    console.log(err)
  }
})
