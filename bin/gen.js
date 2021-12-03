var pkg = require('../package.json')

if (argv[0] === '-v' || argv[0] === '--version') {
	console.log(`  version is ${pkg.version}`);
} else if (argv[0] === '-h' || argv[0] === '--help') {
	console.log('  usage:\n');
	console.log('  -v --version [show version]');
}
