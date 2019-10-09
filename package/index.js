const package1 = require('package1');
const package2 = require('package2');

const package = require('./package.json');
const react = require('react');
console.log(`${package.name}: react version=${react.version}` );