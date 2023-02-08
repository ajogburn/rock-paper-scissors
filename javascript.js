
// program to get a random item from an array

function computer(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['rock', 'paper', 'scissors'];

const getComputerChoice = computer(array);

function playerSelection (x) {
switch(x){
     case 0:
        text = 'rock';
        break;
    case 1:
        text = 'paper';
        break;
    case 2:
        text = 'scissors'
        break;
    default:
        text = 'something is wrong';
}
    return text

}

/* console.log(playerSelection(2), getComputerChoice); */

const playRound = (play, comp) => {

   return play +" " + comp;
}
console.log(playRound(playerSelection(2), getComputerChoice))



