function getComputerChoice (x) {
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

console.log(getComputerChoice(2))