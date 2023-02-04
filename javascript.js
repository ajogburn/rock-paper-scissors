
// program to get a random item from an array

function getComputerChoice(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ['rock', 'paper', 'scissors'];

const result = getComputerChoice(array);
console.log(result);


/*  function playerSelection (x) {
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

console.log(playerSelection(2)); */