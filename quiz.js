function send(){

Number1=document.getElementById("number").value;
Number2=document.getElementById("Number").value;

actual_answer = parseInt(Number1) * parseInt(Number2);

question_number="<h4>" + Number1 + " X " + Number2 + "</h4>";
input_box="<br>Answer : <input type='text' id='check'>";
Check_button="<br><br><button class='btn btn-info' onclick='check()' id='check'>Check</button>";
row = question_number + input_box + Check_button;

document.getElementById("output").innerHTML = row;

document.getElementById("number").value="";
document.getElementById("Number").value="";
}

player1_score=0;
player2_score=0;

question_turn="player1";
answer_turn="player2";

player1name = localStorage.getItem("Player_1_name");
player2name=localStorage.getItem("Player2_name");

function check(){

get_answer = document.getElementById("check").value;
if(get_answer == actual_answer){

  if(answer_turn == "player1"){
      player1_score= player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
  }



  else{
    player2_score= player2_score + 1;
    document.getElementById("player2_score").innerHTML = player2_score;
  }
}




  if(question_turn == "player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
}



else{
  question_turn="player1";
  document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
}




if(answer_turn == "player1"){
  answer_turn="player2"
  document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
}



else{
answer_turn="player1";
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;

}



document.getElementById("output").innerHTML="";

}