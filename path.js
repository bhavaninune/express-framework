const path = require('path');
const mainModuleFilename = process.mainModule ? process.mainModule.filename : 'unknown';

console.log('mainModuleFilename:', mainModuleFilename);

module.exports = path.dirname(mainModuleFilename);
