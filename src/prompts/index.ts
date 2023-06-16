/** 
 * Summary: This is a giant file of all the prompts used
 * in the project, it is incredibly ugly, but that's future
 * Jack's problem.
 *
 * */

import inquirer from 'inquirer';
import { sleep } from '../utils/index.js';
import { createSpinner } from 'nanospinner';
import { CNode } from '../classes/Node.js';
import { CLinkedList } from '../classes/LinkedList.js';

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

export async function nodePrompt(): Promise<string | number> {
  let value: string | number;
  const answers: any = await inquirer.prompt({
    name: 'value_input',
    type: 'input',
    message: 'Insert value for node:',
    default(): number {
      return 0;
    },
  });
  value = answers.value_input;
  return value;
}

export async function linkedListPrompt(): Promise<CLinkedList> {
  console.log('Creating linked list...')
  await sleep();
  let list: CLinkedList = new CLinkedList();
  await sleep();
  console.log('Please enter value for root node...')
  let root: string | number = await nodePrompt();
  let node = new CNode(root);
  list.setHead(node);
  return list;
}

export async function addAnotherPrompt(): Promise<string>{
  let response: string;
  const answers: any = await inquirer.prompt({
    name: 'value_input',
    type: 'input',
    message: 'Would you like to create another? (Y)es or (N)o: ',
    default(): string {
      return 'N';
    },
  });
  response = answers.value_input; 
  return response;
}

export async function printLinkedListPrompt(list: CLinkedList): Promise<void> {
  const answers: any = await inquirer.prompt({
    name: 'value_input',
    type: 'input',
    message: 'Would you like to see all the values in the list? (Y)es or (N)o: ',
    default(): string {
      return 'N';
    },
  }); 
  if(answers.value_input == 'Y'){
    console.log('First node value: ')
    list.getHead()?.getValue();
  }
}

export async function createLinkedList(): Promise<CLinkedList> {
  let list: CLinkedList = await linkedListPrompt()
  let continue_: Boolean = false;
  do {
    let response: string = await addAnotherPrompt();
    if(response == 'Y'){
      continue_ = true;
      let node = await nodePrompt();
      list.insert(node);
    } else {
      continue_ = false;
    }
  } while (continue_)
  printLinkedListPrompt(list);

  return list;
}
