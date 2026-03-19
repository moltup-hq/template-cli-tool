const { execSync } = require('child_process');
const assert = require('assert');

function run(cmd) {
  return execSync('node src/index.js ' + cmd, { encoding: 'utf8' }).trim();
}

// Test help
assert(run('help').includes('Usage:'), 'help should show usage');

// Test version
assert.strictEqual(run('version'), '1.0.0', 'version should be 1.0.0');

// Test greet
assert(run('greet').includes('Hello, World!'), 'default greet');
assert(run('greet Agent').includes('Hello, Agent!'), 'named greet');

console.log('✅ All tests passed!');
