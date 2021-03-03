
    // Function returns either rock, paper or scissors randomly
    function computerPlay(){
        //Computer choice is set equal to a random number from 0 to 99.99
        let computerChoice = Math.random()*100;
  
        //if statement used to determine what choice to return based on the result of computerChoice
        if(computerChoice<=33)
        {
          return 'Rock';
        }
        else if(computerChoice<=66){
          return 'Paper';
        }
        else{
          return 'Scissors';
        }
  
      }
  
  
      
      //This function simulates a round of rock, paper, scissors by comparing user input to a random result 
      //returned from the computerPlay function
      function playRound(playerSelection,computerSelection){
        //Parameters are made lowercase to avoid case issues
        let comparablePlayerSelection = playerSelection.toLowerCase();
        let comparableComputerSelection = computerSelection.toLowerCase();
  
        //If statement to determine the result if the player input is rock
        if(comparablePlayerSelection == 'rock')
        {
          if(comparableComputerSelection=='rock'){
            return 'It is a tie!! Rock vs Rock';
          }
  
          return (comparableComputerSelection=='paper')?  'You lose!! Paper beats Rock!' : 'You win!! Rock beats Scissors!';
        }
  
        //If statement to determine the result if the player input is paper
        if(comparablePlayerSelection == 'paper')
        {
          if(comparableComputerSelection=='paper'){
            return 'It is a tie!! Paper vs Paper';
          }
  
          return (comparableComputerSelection=='scissors')?  'You lose!! Scissors cuts Paper!!' : 'You win!! Paper covers Rock!';
        }
  
        //If statement to determine the result if the player input is scissors
        if(comparablePlayerSelection == 'scissors')
        {
          if(comparableComputerSelection=='scissors'){
            return 'It is a tie!! Scissors vs Scissors';
          }
  
          return (comparableComputerSelection=='rock')?  'You lose!! Rock beats Scissors!' : 'You win!! Scissors cuts Paper!!';
        }
  
        //Return statement in case the player enters any thing besides the three choices
        return 'That is not a valid response please try again';
      }

      //Record is initially declared
      let wins =0;
      let losses=0;
      let ties=0;

      //Keeps track of wins or losses
      function winOrLose(result){
        let winOrLose;


        winOrLose=result.slice(4,5);
      
        if(winOrLose=='l'){
          losses++;
        }
        else if(winOrLose=='w'){
          wins++;
        }
        else if(winOrLoss='s'){
          ties++;
        }
      }

      function champion(won,lost){
        if(won==5){
            wins=0;
            losses=0;
            ties=0;
            return ' CONGRAGULATIONS!! You WON THE TOURNAMENT!!';
        }

        if(lost == 5){
            wins=0;
            losses=0;
            ties=0;
            return ' I\'m Sorry!! The computer has won. All hope is lost...'
        }

        return '';
      }


  
      const log = document.querySelector("#logResults");
      const result = document.createElement('div');

      
      function buttonRound(e){
        let computerSelection = computerPlay();
        winOrLose(playRound(this.id,computerSelection));
        result.textContent = ' ' + playRound(this.id,computerSelection);
        result.textContent +=` Wins: ${wins} Losses: ${losses} Ties: ${ties}${champion(wins,losses)}`;
        log.appendChild(result);
      }

      const buttonChoice = document.querySelectorAll('.button');
      buttonChoice.forEach(button => button.addEventListener('click',buttonRound));