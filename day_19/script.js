let enterButton = document.getElementById('enter');
let againButton = document.getElementById('again');
let outputText = document.getElementById('output');

let randonNum = Math.ceil(Math.random()* 100);

const result = () => {
    let inputNum =document.getElementById('inputNumber').value;
   
    if(inputNum==randonNum){
        outputText.innerHTML ="It is True" + "The Number is" + randonNum;

    }
    else if (inputNum > randonNum && inputNum < 100){
        outputText.innerHTML = "Your Guess is High";
    }
    else if (inputNum < randonNum && inputNum > 1){
        outputText.innerHTML = "Your Guess is Low";
    }
    else if (inputNum <1){
        outputText.innerHTML = "higher, It has to be between 1 and 100!";
    }
    else if(isNaN(inputNum)){
        outputText.innerHTML = "IT is not a number";
    }
    else{
        outputText.innerHTML ="Lower, It has to be between 1 and 100!";
    }
}

enterButton.addEventListener('click', result);
againButton.addEventListener('click', function()[
    location.reload()
]);