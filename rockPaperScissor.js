function computerTurn() {
  const generateNumber = Math.ceil(Math.random() * 3);
  if (generateNumber === 1) {
    return "R";
  }

  return generateNumber === 2 ? "P" : "S";
}

function userTurn() {
  const userChoice = prompt("\nEnter your choice .... ");
  return userChoice;
}

function isUserWantToPlay() {
  const userChoice = confirm("\nwould you like play again.....");
  return userChoice;
}

function getResult(userChoice, computerChoice) {
  const data = userChoice + computerChoice;

  if (data === "RS" || data === "PR" || data === "SP") {
   return "\nYOU WIN !!🏆🏆🏆. \ncomputer choice : " + computerChoice;
  }

  if (userChoice === computerChoice) {
    return "\nGAME TIE.... \ncomputer choice :  " + computerChoice;
  }

  return "\nYOU LOST....\\ncomputer choice : " + computerChoice;
}

function playContinue() {
  const userChoice = userTurn();
  const computerChoice = computerTurn();

  console.log(getResult(userChoice, computerChoice));

  if (isUserWantToPlay()) {
    return playContinue();
  }

  return "\nOk thanks .. good byee";
}

function instruction() {
  const text = "Instruction : \n\n Enter R for Rock. \n Enter P for Paper \n Enter S for Stone.";
  return text;
}

function start() {
  console.log("\n****************************Welcome the RPS************************** ");

  const name = prompt("\nenter your name :  ");
  console.log("\nHello Mr./Miss. " + name);
  console.log("\n", instruction());
  console.log(playContinue());
}

start();
