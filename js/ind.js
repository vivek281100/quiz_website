function valTrue() {
    var radio = document.getElementById("true");
    var text = document.getElementById("optTrue");
    if (radio.checked == true){
      text.style.display = "block";
    } else {
        text.style.display ="none";
    }
  }

function valFalse() {
    var radio = document.getElementById("false");
    var text = document.getElementById("optFalse");
    if (radio.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

function ans(){
  var answer = prompt("Please enter your answer:");
  answer1 = answer.toUpperCase();
  if (answer1 === "QUIZ TIME"){
    alert("Your are correct!..");
  }
  else if (answer1 == null)
  { alert("Please enter an answer!..")}
  else
  {
    alert("your answer is wrong!..");
  }
}
function ans1(){
  var answer = prompt("Please enter your answer:");
  answer1 = answer.toUpperCase();
  if (answer1 === "GREAT"){
    alert("keep that feeling going!..");
  }
  else if (answer1 === "GOOD")
  { alert("keep up the good work")}
  else
  {
    alert("cheer up!...");
  }
}
function ans2(){
  var answer = prompt("Please enter your answer:");
  answer1 = answer.toUpperCase();
  if (answer1 === "TESLA"){
    alert("Your are correct!..");
  }
  else if (answer1 == null)
  { alert("Please enter an answer!..")}
  else
  {
    alert("your answer is wrong!..");
  }
}
function ans3(){
  var answer = prompt("Please enter your answer:");
  answer1 = answer.toUpperCase();
  if (answer1 === "LUDO"){
    alert("Your are correct!..");
  }
  else if (answer1 == null)
  { alert("Please enter an answer!..")}
  else
  {
    alert("your answer is wrong!..");
  }
}
function ans4(){
  var answer = prompt("Please enter your answer:");
  answer1 = answer.toUpperCase();
  if (answer1 === "GOKU"){
    alert("Your are correct!..");
  }
  else if (answer1 == null)
  { alert("Please enter an answer!..")}
  else
  {
    alert("your answer is wrong!..");
  }
}

function sign() {
  var userName = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var passward = document.getElementById("passWard").value;
  var repassward = document.getElementById("repassWard").value;
  if (email != null){
    if (userName != null){
      if (passward != null){
        if (repassward != null){
          window.location.href= "frontpage.html";
        }else{
          alert("please enter repassward!");
        }
      }else{
        alert("plaese enter passward!");
      }
    }else{
      alert("plaese enter username!");
    }
  }else{
    alert("please enter Email!");
  }
}
function check() {
  var em = prompt("Enter your Username :");
  //var pa = prompt("Enter your passward :");
  var pa
  if (em === "vivek"){
    pa = prompt("Enter your passward:")
    if(pa == 12345678){
    window.location.href= "frontpage.html";}
    else{
      alert("wrong passward!")
    }
  }
  else if(em == null){
    alert("plaese enter a value!");}

   else
  {
    alert("wroung user name and passward!");
  }
}