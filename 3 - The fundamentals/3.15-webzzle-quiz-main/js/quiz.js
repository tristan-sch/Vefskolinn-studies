//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const quiz_name = document.querySelector(".quiz_name");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const feedback_btn = document.querySelector(".feedback_btn"); 
const feedback_box = document.querySelector(".feedback_box"); 
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const question_sound = document.getElementById("question_sound");
const winner_sound = document.getElementById("winner_sound");
const answer_sound = document.getElementById("answer_sound");




//logout
document.getElementById("logout").onclick = function (){
  if(confirm("Are you sure you want to logout?")){
      window.location = "./index.html";
  }else{
      //stays on the same page          
  }
}

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    start_btn.style.opacity = "0";
    quiz_name.style.opacity = "0";
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    start_btn.classList.add("transition");
    start_btn.style.opacity = "1";
    quiz_name.classList.add("transition");
    quiz_name.style.opacity = "1";
}

//to shuffle the array and select only 4 questions
shuffleQuestions = (inputQuestions) => {
    inputQuestions.sort(()=> Math.random() - 0.5);
    questions.length = 4;
  }


// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
    question_sound.play();
    question_sound.volume = 0.5;
    shuffleQuestions(questions);
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

//if SeeCorrectAnswers button clicked
const feedback_quiz = result_box.querySelector(".feedback_btn");

feedback_quiz.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    result_box.classList.remove("activeResult"); //hide result box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    feedback_box.classList.add("activeFeedback") //show feedback page

    const feedbackText = document.querySelector(".feedback_text"); 
    // to remove duplicates
    const uniqueQuestions = [...new Set(questions)];
    
    // loop to go through the array
    for(let i=0; i < questions.length; i++) { 
    feedbackText.innerHTML += uniqueQuestions[i].question+"<p>"+uniqueQuestions[i].answer+"</p><br>";
    }

}

// if restartQuiz button clicked 

document.querySelectorAll('.restart').forEach(item => {
    item.addEventListener('click', event => {
        quiz_box.classList.add("activeQuiz"); //show quiz box
        result_box.classList.remove("activeResult"); //hide result box
        feedback_box.classList.remove("activeFeedback") //hide feedback page
        timeValue = 15;
        que_count = 0;
        que_numb = 1;
        userScore = 0;
        widthValue = 0;
        showQuestions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        document. querySelector(".feedback_text").innerHTML = ""; //Tristan -> to prevent duplicates in feedback page
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Remaining Time:"; //change the text of timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
        winner_sound.currentTime = 0;
        winner_sound.pause();
        question_sound.play();
        question_sound.volume = 0.5;
        
        // calling the shuffle function
        shuffleQuestions(questions);
    })
  })

// if quitQuiz button clicked
document.querySelectorAll('.quit').forEach(item => {
    item.addEventListener('click', event => {
        window.location = "./index.html";
        //window.location.reload();
        winner_sound.currentTime = 0;
        winner_sound.pause();
    })
  })


const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuestions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Remaining Time:"; //change the timeText to remaining Time
        next_btn.classList.remove("show"); //hide the next button
        question_sound.play();
        answer_sound.currentTime = 0;
        answer_sound.pause();

    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}






// getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag


    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    question_sound.currentTime = 0;
    question_sound.pause();
    answer_sound.play();
    answer_sound.volume = 0.5;

    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}


function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    winner_sound.play();
    winner_sound.volume = 0.5;
    answer_sound.currentTime = 0;
    answer_sound.pause();

    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Your score: <p>'+ userScore +'/'+ questions.length +'</p> </span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
      let scoreTag = '<span>Your score: <p>'+ userScore +'/'+ questions.length +'</p> </span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Your score: <p>'+ userScore +'/'+ questions.length +'</p> </span>';
        scoreText.innerHTML = scoreTag;
    }
}



function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0

            clearInterval(counter); //clear counter
            timeText.textContent = "Time Out"; //change the time text to time out
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    console.log("Time Out: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option

            question_sound.currentTime = 0;
            question_sound.pause();
            answer_sound.play();
            answer_sound.volume = 0.5;
        }
    }
}



function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    // questions.length = 4; // to display the correct number of questions
    let totalQueCounTag = '<span>QUESTION '+ index +'/'+ questions.length +'</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}