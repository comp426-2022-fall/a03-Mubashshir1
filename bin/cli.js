#!/usr/bin/env node
import {roll} from '../lib/roll.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
const side = args.sides || 6;
const dice = args.dice || 2;
const rolls = args.rolls || 1;

console.log(JSON.stringify(roll(side, dice, rolls)));