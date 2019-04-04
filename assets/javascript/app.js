function startGame(){
    //selecting the button and saving to a variable
    // adding a class name d-none to make it disappear
    document.getElementById("btn1").classList.add("d-none");
    //displaying again the container
    document.getElementById("container").classList.remove("d-none");
// data for the question displayed to user
const myQuestions = [
    {
      question: "Wher did i born?",
      answers: [
         "Ethiopia",
         "Eritrea",
         "USA"
      ],
      correctAnswer: "Eritrea"
    },
    {
        question: "when was i born?",
        answers : [
             1992,
             1995,
             2000
],
        correctAnswer: 1992
    },
    {
        question: "on what field did i graduate?",
        answers : [
            "Electrical Engineering",
             "Civil and Enviromental Eng.",
             "Computer science"
        ],
        correctAnswer: "Civil and Enciromental Eng."
    },
{
    question: "do i love coding?",
    answers : 
        [ "nope",
         "yepp",
        "who cares"],
    correctAnswer : "yepp"
    
}]
// display the questions to user
var i = 0;
//using forEach to display the questions
for(var l in myQuestions){
    //creating paragraph 
    var Q1 = document.createElement("p");
    //change the content of the paragraph 
    Q1.innerHTML = `${myQuestions[l].question} <br>`;    
    // creat a div and save to a variable element 
  var element = document.getElementById("displayQues");
  //append the paragraph to div created
  element.appendChild(Q1);  
  var containDiv = document.createElement("div");
  // for displaying the answers use forloop
  for(let i=0;i<3;i++){
      //to creat input button 
  var inp = `<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="${myQuestions[l].answers[i]}" name="customRadioInline${l}" class="custom-control-input">
  <label class="custom-control-label" for="${myQuestions[l].answers[i]}">${myQuestions[l].answers[i]}</label>
</div>`;
//setting the content of the div to the created input button
containDiv.innerHTML+=inp;}
element.appendChild(containDiv);

}
document.addEventListener("click",function(){
    
})
var correct = 0, incorrect =0;

// set time limit for the question to be 30 seconds
var time = 30;
// every one second the function is called 
var timer = setInterval(function(){
    // time is decremented by 1
    time= time-1;
    //in order to have 00 when time is below 10;
    if(time < 10) time = "0" + time;
    //display the remain time 
    document.getElementById("timer").innerHTML = time;
    if(time == 0){
        //calling the fuction after time over
       timeOver();
        
    }
},1000);
function timeOver(){
    // stopping timer
    clearInterval(timer);
    //checking if the correct answers are checked 
    if(document.getElementById("Eritrea").checked)correct++;
    // if correct answer not checked count incorrect
    else incorrect++;
    if(document.getElementById("1992").checked)correct++;
    else incorrect++;
    if(document.getElementById("yepp").checked)correct++;
    else incorrect++;
    if(document.getElementById("Civil and Enviromental Eng.").checked)correct++;
    else incorrect++;
    //result display 
    document.getElementById("container").innerHTML = `<p>GameOver!!</p><p>Correct:${correct}</p><p>Incorrect:${incorrect}</p>`;
}}


 window.onload = function windLoad(){
     //hidding the content of container on window load
     document.getElementById("container").classList.add("d-none");
 }
 // add event listner to the starting button 
document.getElementById("btn1").addEventListener("click",startGame);
