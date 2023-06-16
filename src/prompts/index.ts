/** 
 * Summary: This is a giant file of all the prompts used
 * in the project, it is incredibly ugly, but that's future
 * Jack's problem.
 *
 * */

import inquirer from 'inquirer';
import { sleep } from '../utils/index.js';
import { createSpinner } from 'nanospinner';

/**
 * Prompts the user to enter their name.
* @return {Promise<void>}
*
* */
export async function askName(): Promise<void> {
  // Need to remove this any, it sucks.
  const answers: any = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default(): string {
      return 'Player'
    },
  });
  console.log(`You entered: ${answers.player_name}`);
}

/**
 * Prompts the user to select a multiple choice question.
* @return {Promise<void>}
*
* */
export async function multipleChoice(): Promise<void> {
  // Need to remove this any, it sucks.
  const answers: any = await inquirer.prompt({
    name: 'multiple_choice',
    type: 'list',
    message: 'This is a multiple choice question',
    choices: [
      'A',
      'B',
      'C',
      'D'
    ],
  });
  /** this checks to see if an answer is correct or not. */
  await handleAnswer(answers.multiple_choice == 'C');
}

/** 
* @param {Boolean} isCorrect <- Pass in whether or not it matches 
*                  expected answer, this is the responsiblity of
*                  the prompt calling this function. handleAnswer
*                  only creates a spinner and displays a success
*                  or failure message.
* @return {Promise<void>} returns a promise.
*
* */
export async function handleAnswer(isCorrect: Boolean): Promise<void> {
  // This creates the loading spinner
  // Need to remove this any, it sucks.
  const spinner: any = createSpinner('Checking answer...').start();
  await sleep();
  if(isCorrect){
    spinner.success({text: 'You entered the correct answer.'});
  } else {
    spinner.error({text: 'You entered the wrong answer.'});
    process.exit(1);
  }
} 
