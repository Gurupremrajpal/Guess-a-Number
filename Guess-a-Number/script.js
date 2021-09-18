//Adding the event listner 
document.querySelector("button").addEventListener("click", submit);

//Score Update 
var score = 0;
var q_scr = 20;
//var ans2 = "Markup language";
var ans1 = "Internet Programming"
var ans4 = "Dr. Miguel Lara";


//the options for question 2).
var radi = ["Markup language", "Programming Language", "Machine Language"];

 radi = _.shuffle(radi);

// creates radio buttons 
for (i=0; i<radi.length; i++) {
  $("#radiodiv").append(`<input type='radio' name='answerchoices' value='${radi[i]}'> ${radi[i]}`);
} 

//options for question3 using checkboxes
var check = ["HTML ","CSS ","C ","Java "];
check = _.shuffle(check);


for(i=0; i<check.length; i++){
  $("#checkdiv").append(`<input type='checkbox' name='checkboxanswers' value='${check[i]}'> ${check[i]}`);
}

function submit(){

  //question 1
  let ques1= $("input").val();

  if(ques1.toLowerCase()==ans1.toLowerCase()){
      score+=q_scr;
     $(".message").html('<span class="text-success"> Correct </span>')
  }
  else{
     $(".message").html('<span class="text-danger"> Incorrect </span>')
  }

  //question 2 
  //let rad = document.querySelector("input[name=answerchoices]:checked").value;
   
  if ($("#radiodiv [type='radio']:checked").val() == "Markup language"){
    score+=q_scr;
    $(".q2message").html('<span class="text-success"> Correct </span>')

  }else{
       $(".q2message").html('<span class="text-danger"> Incorrect </span>')

  }
  
  //question 3
  let a1 = "HTML ";
  let a2 = "CSS ";
  let a3 = "C ";
  let a4 = "Java ";
  //var checkboxes = document.getElementById("checkdiv");
let checkbox = document.querySelector("#checkdiv").checked;

  if ((checkbox==a1 && checkbox==a2 ) && (checkbox != a3 && checkbox != a4) ) {
     $(".q3message").html('<span class="text-danger"> Incorrect </span>')
    }else{
      score+=q_scr;
       $(".q3message").html('<span class="text-success"> Correct </span>')
    }
  
  

  // question 4
 let ques4= $("#q4").val();

  if(ques4==ans4){
      score+=q_scr;
     $(".q4message").html('<span class="text-success"> Correct </span>')
  }
  else{

     $(".q4message").html('<span class="text-danger"> Incorrect </span>')
  }

    // Displaying score
  document.querySelector("#scr").innerHTML= `Score : ${score}`;

}
