document.querySelector (".sumbit-button").addEventListener("click", displayContent);
document.querySelector (".reset_button").addEventListener("click", resetBox);

var gCount =0;
var randomNumber = Math.floor(Math.random() * 99) +1;
var reset = false;
var win = 0;
var lose= 0;
var guess = '';
var tries =0;


function displayContent(){

  gCount= document.querySelector("input").value;
  

  if (gCount <1 || gCount >99){
    document.querySelector(".result").innerHTML = "Invalid input. Enter a number between 1 and 99.";
    document.querySelector("#input").value = "";
    return;
  }  
  guess += gCount + ' ';

  document.querySelector("#previous_guesses").innerHTML = `${guess}`;
  tries = tries +1;
  console.log(tries);

  if(gCount == randomNumber) {
    document.querySelector(".result").innerHTML = `Congratulations !! You got it right: ${tries}`;
    win++;
    document.querySelector(".win_span").innerHTML = `${win}`;
  }
  else {
    document.querySelector (".result").innerHTML = "Wrong!";

    if(gCount < randomNumber){
      document.querySelector("#hint").innerHTML= "Your guess was too low.";
    }
    else{
      document.querySelector("#hint").innerHTML = "Your guess was too high";
    }
  }
  if (tries >=7) {
    document.querySelector(".result").innerHTML = "Sorry, you lost!";
    lose++;
    document.querySelector(".lose_span").innerHTML = `${lose}`;
    document.querySelector(".sumbit-button").disabled = true;
    document.querySelector("#input").disabled = true;
  }
}

function resetBox(){
  document.querySelector(".result").innerHTML = "";
  document.querySelector("#hint").innerHTML = "";
  document.querySelector("#previous_guesses").innerHTML = "";
  guess = '';
  tries = 0;
  console.log("reset button clicked");
  document.querySelector("#input").value = "";
  document.querySelector(".sumbit-button").disabled = false;
  document.querySelector("#input").disabled = false;
}
  
