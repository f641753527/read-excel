#!/usr/bin/env node
var pak = require('./package.json')
var sheet_to_json = require('./src/sheet_to_josn.js')

function parseArgs (argvs) {
  const argMap = {}
  argvs.forEach(arg => {
    if (arg.indexOf('=') > -1) {
      const [key, value] = arg.split('=')
      argMap[key] = value
    } else {
      argMap[arg] = true
    }
  })
  return argMap
}

const args = parseArgs(process.argv.slice(2))

run()

function run() {
  if (args['--version'] || args['-v']) {
    console.log(`version is ${pak.version}`)
  } else if (args['--help'] || args['-h']) {
    console.log('-v   |   --version        show version')
    console.log('-e   |   --entry          entry file')
    console.log('-o   |   --output         output file')
  } else if (!(args['-e'] || args['--entry']) || !(args['-o'] || args['--output'])) {
    console.log('missing entry or output argument')
  } else {
    const entry = args['-e'] || args['--entry']
    const output = args['-o'] || args['--output']
    sheet_to_json(entry, output)
  }
}
