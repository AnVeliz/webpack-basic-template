import { ConsoleLog } from './ConsoleLogger';

// Just some code to check TypeScript and logic a bit
const buttonElement = document.getElementById("operateButton") as HTMLButtonElement;
const inputElement = document.getElementById("inputSomething") as HTMLInputElement;

buttonElement.addEventListener('click', () => {
    ConsoleLog(inputElement.value);
});
