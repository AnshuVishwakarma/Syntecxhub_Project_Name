const questions=[
    {
        question:"Which input type is used for passwords?",
        answers:[
            {text:"text",correct:false},
            {text:"password",correct:true},
            {text:"secure",correct:false},
            {text:"pass",correct:false}
        ]
    },
    {
        question:"What does CSS stand for?",
        answers:[
            {text:"Cascading Style Sheets",correct:true},
            {text:"Creative Style Sheets",correct:false},
            {text:"Computer Style Syntax",correct:false},
            {text:"Colorful Style Sheets",correct:false}
        ]
    },
    {
        question:"Which attribute provides alternative text for images?",
        answers:[
            {text:"title",correct:false},
            {text:"src",correct:false},
            {text:"href",correct:false},
            {text:"alt",correct:true}
        ]
    },
    {
        question:"Which selector targets an element with id='main'?",
        answers:[
            {text:".main",correct:false},
            {text:"#main",correct:true},
            {text:"main",correct:false},
            {text:"*main",correct:false}
        ]
    },

];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
};
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();