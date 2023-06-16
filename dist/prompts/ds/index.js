/**
 * Summary: This is a giant file of all the prompts used
 * in the project, it is incredibly ugly, but that's future
 * Jack's problem.
 *
 * */
import inquirer from 'inquirer';
import { sleep } from '../../utils/index.js';
import { CNode } from '../../classes/Node.js';
import { CLinkedList } from '../../classes/LinkedList.js';
export async function nodePrompt() {
    let value;
    const answers = await inquirer.prompt({
        name: 'value_input',
        type: 'input',
        message: 'Insert value for node:',
        default() {
            return 0;
        },
    });
    value = answers.value_input;
    return value;
}
export async function linkedListPrompt() {
    console.log('Creating linked list...');
    await sleep();
    let list = new CLinkedList();
    await sleep();
    console.log('Please enter value for root node...');
    let root = await nodePrompt();
    let node = new CNode(root);
    list.setHead(node);
    return list;
}
export async function addAnotherPrompt() {
    let response;
    const answers = await inquirer.prompt({
        name: 'value_input',
        type: 'input',
        message: 'Would you like to create another? (Y)es or (N)o: ',
        default() {
            return 'N';
        },
    });
    response = answers.value_input;
    return response;
}
export async function printLinkedListPrompt(list) {
    const answers = await inquirer.prompt({
        name: 'value_input',
        type: 'input',
        message: 'Would you like to see all the values in the list? (Y)es or (N)o: ',
        default() {
            return 'N';
        },
    });
    if (answers.value_input == 'Y') {
        list.print();
    }
}
export async function createLinkedList() {
    let list = await linkedListPrompt();
    let continue_ = false;
    do {
        let response = await addAnotherPrompt();
        if (response == 'Y') {
            continue_ = true;
            let node = await nodePrompt();
            list.insert(node);
        }
        else {
            continue_ = false;
        }
    } while (continue_);
    printLinkedListPrompt(list);
    return list;
}
