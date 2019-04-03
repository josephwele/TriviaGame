
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
  <input type="radio" id="${myQuestions[l].answers[i]}" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label" for="${myQuestions[l].answers[i]}">${myQuestions[l].answers[i]}</label>
</div>`;
//setting the content of the div to the created input button
containDiv.innerHTML+=inp;}
Q1.appendChild(containDiv);

}