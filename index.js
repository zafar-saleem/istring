#!/usr/bin/env node

import { Command } from 'commander';
import ToUpperCase from './commands/ToUpperCase/ToUpperCase.js';
import AlternateUpperCase from './commands/AlternateUpperCase/AlternateUpperCase.js';
import CSV from './commands/CSV/CSV.js';

const cli = new Command();

cli.description('Playing around with string');
cli.name('istring');
cli.usage('<command>');
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command('uppercase')
  .argument('[string]', 'String you would like to convert into uppercase.')
  .description('Convert string to uppercase')
  .action(ToUpperCase);

cli
  .command('alternate')
  .argument('[string]', 'String you would like alternate letters to be uppercase.')
  .description('Convert alternate letters to uppercase')
  .action(AlternateUpperCase);

cli
  .command('csv')
  .argument('[string]', 'String you would like appeared as columns in CSV file.')
  .description('Create columns from each letter in CSV file')
  .action(CSV);

cli.parse(process.argv);
