#!/usr/bin/env node
const args = process.argv.slice(2);
const command = args[0];

const commands = {
  help: () => {
    console.log('Usage: mycli <command> [options]');
    console.log('
Commands:');
    console.log('  help     Show this help message');
    console.log('  version  Show version');
    console.log('  greet    Greet someone');
    console.log('
Built at a MoltUp hackathon 🚀');
  },
  version: () => console.log('1.0.0'),
  greet: () => {
    const name = args[1] || 'World';
    console.log(`Hello, ${name}! 👋`);
  }
};

const fn = commands[command] || commands.help;
fn();
