let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");


const genCompchoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randChoice = options[Math.floor(Math.random() * options.length)];
    return randChoice;
};

const drawGame = () =>{
    msg.innerText = "The game was DRAW. Play Again!";
    msg.style.backgroundColor ="black";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        msg.innerText = `You WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        msg.innerText = `You LOSE! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }

};

const playGame= (userChoice) => {
    console.log(`User Choice = ${userChoice}`);
    const compChoice = genCompchoice();
    console.log(`Computer choice =  ${compChoice}`);
    if(userChoice === compChoice){
        drawGame();
     }else{
        let userWin=true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissor" ? false :  true;
        }else{
            userWin = compChoice === "paper"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
     }
     
       
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    });

 