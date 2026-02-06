const score = {
   win: 0,
   lose: 0,
   tie: 0
}

function playGame(playerMove) {
 const computerMove = pickComputerMove();

   result = '';

   if(playerMove === 'rock') {
      if(computerMove === 'rock') {
         result = 'Tie';
      } else if(computerMove === 'paper') {
         result = 'you win';
      } else if(computerMove === 'scissors') {
         result = 'OH HOOO...you lose';
      }
  
   }else if(playerMove === 'paper') {
      if(computerMove === 'rock') {
         result = 'you win';
      } else if(computerMove === 'paper') {
         result = 'Tie' ;
      } else if(computerMove === 'scissors') {
         result = 'OH HOOO...you lose';
      }

   } else if(playerMove === 'scissors') {
      if(computerMove === 'rock') {
         result = 'OH HOOO...you lose';
      } else if(computerMove === 'paper') {
         result = 'you win';
      } else if(computerMove === 'scissors') {
         result = 'Tie';
      }
   }

   if(result === "you win") {
      score.win += 1;
   } else if(result === "OH HOOO...you lose") {
      score.lose += 1;
   } else if(result === Tie) {
      score.tie += 1;
   }
   alert(`you picked ${playerMove}. computer picked ${computerMove}. ${result}
 win: ${score.win}, lose: ${score.lose}, tie: ${score.tie}`)
}
 


function pickComputerMove() {
   const randomNumber = Math.random();

   let computerMove = '';

   if(randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
   } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
   } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
   }
   return computerMove;
}