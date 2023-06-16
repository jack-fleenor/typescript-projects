#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { sleep } from './utils/index.js';
import { askName, multipleChoice } from './prompts/index.js';
import { createLinkedList } from './prompts/ds/index.js';

let playerName: string = 'John Doe';

async function welcome(): Promise<void> {
  const rainbowTitle = chalkAnimation.rainbow(
    'This is a test of the rainbow animation\n'
  );
  await sleep();
  rainbowTitle.stop();
  console.log(
    `${chalk.bgRed('ANOTHER TEST')}
      Beep beep boop.
      ${playerName}  
    `
  )
}

await welcome();
await askName();
await multipleChoice();
await createLinkedList();
