let userScore = 0;
let compScore = 0; //tracking the score

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
// getting the nodes using querySelector

const genCompchoice = () => {   // gettng the compuet to generate choice.
    const options = ['rock', 'paper', 'scissor'];
    const randChoice = options[Math.floor(Math.random() * options.length)];
    return randChoice;
};

const drawGame = () =>{   //in case of a draw.
    msg.innerText = "The game was DRAW. Play Again!";
    msg.style.backgroundColor ="black";
}

const showWinner = (userWin, userChoice, compChoice) =>{ // when there is a proper result.
    if (userWin) {
        msg.innerText = `You WIN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
        userScore++;
        userScorePara.innerText = userScore;
        console.log(userScorePara);
    }else{
        msg.innerText = `You LOSE! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
        compScore++;
        compScorePara.innerText = compScore;
    }

};
// playing the game 
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
// creating an event when the user selects something.
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    });

 