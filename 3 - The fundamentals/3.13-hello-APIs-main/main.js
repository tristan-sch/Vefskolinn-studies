//https://medium.com/swlh/how-to-create-your-first-login-page-with-html-css-and-javascript-602dd71144f1

// Declaring the variables for login page and error messages
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsgHolder = document.getElementById("login-error-msg-holder");
const loginErrorMsg = document.getElementById("login-error-msg");
const nav = document.getElementById("nav");
const h1 = document.querySelector("h1");

// Declaring the variables for the note forms 
const noteForm = document.getElementById("note-form");
const noteForm2 = document.getElementById("note-form2");
const noteForm3 = document.getElementById("note-form3");

const domTitle = document.getElementById("title");
const domFeedback = document.getElementById("text");

const domTitle2 = document.getElementById("title2");
const domFeedback2 = document.getElementById("text2");

const domTitle3 = document.getElementById("title3");
const domFeedback3 = document.getElementById("text3");


// Creating functions to make different note forms with local storage
const connectToLocalStorage = (element) =>{
    element.value = localStorage.getItem(element.name);
    element.addEventListener("change", ()=>{ 
        localStorage.setItem(element.name, element.value);
    })
}

// Creating the Welcome page afer login
const goWelcomePage = ()=>{ 
    h1.innerHTML = "Welcome to your note application";
    loginForm.innerHTML="";
    loginErrorMsgHolder.innerHTML="";
    loginErrorMsg.innerHTML="";
    noteForm.innerHTML ="";
    noteForm2.innerHTML ="";
    noteForm3.innerHTML ="";
    nav.innerHTML = `
    <li id="NavGoHome">Welcome</li>
    <li id="NavGoPage1">Page 1</li>
    <li id="NavGoPage2">Page 2</li>
    <li id="NavGoPage3">Page 3</li>
`
    document.getElementById("NavGoHome").onclick = ()=>{
        history.pushState("Welcome", null, "#welcome")
        goWelcomePage(); 
    }
    document.getElementById("NavGoPage1").onclick = ()=>{
        history.pushState("Page 1", null, "#page1")
        goPage1(); 
    }
    document.getElementById("NavGoPage2").onclick = ()=>{
        history.pushState("Page 2", null, "#page2")
        goPage2(); 
    }
    document.getElementById("NavGoPage3").onclick = ()=>{
        history.pushState("Page 3", null, "#page3")
        goPage3(); 
    }
}

// Creating the different pages to insert the note forms with inner html and calling the functions inside them
const goPage1 = () =>{ 
    h1.innerHTML = "Page 1";
    loginForm.innerHTML ="";
    loginErrorMsg.innerHTML ="";
    noteForm2.innerHTML ="";
    noteForm3.innerHTML ="";
    noteForm.innerHTML = `
    <label for="title">Title: </label>
    <input type="text" id="title" name="subject">
    <br/>
    <label for="text">Write your note: </label><br/>
    <textarea name="feedback" id="text" cols="50" rows="10"></textarea><br/>
    <input type="submit" id="submitButton" value="save note">
`

const submitButtonFunction1 = document.getElementById("submitButton");

submitButtonFunction1.onclick = () => {
    goPage1(); 
}

const newTitle = document.getElementById("title");
const newFeedback = document.getElementById("text");
connectToLocalStorage(newTitle);
connectToLocalStorage(newFeedback);

}

const goPage2 = ()=>{ 
    h1.innerHTML = "Page 2";
    loginForm.innerHTML="";
    loginErrorMsg.innerHTML="";
    noteForm.innerHTML ="";
    noteForm3.innerHTML ="";
    noteForm2.innerHTML = `
    <label for="title2">Title: </label>
    <input type="text2" id="title2" name="subject2">
    <br/>
    <label for="text2">Write your note: </label><br/>
    <textarea name="feedback2" id="text2" cols="50" rows="10"></textarea><br/>
    <input type="submit" id="submitButton2" value="save note">
`

const submitButtonFunction2 = document.getElementById("submitButton2");

submitButtonFunction2.onclick = () => {
    goPage2(); 
}

const newTitle2 = document.getElementById("title2");
const newFeedback2 = document.getElementById("text2");
connectToLocalStorage(newTitle2);
connectToLocalStorage(newFeedback2);

}

const goPage3 = ()=>{ 
    h1.innerHTML = "Page 3";
    loginForm.innerHTML="";
    loginErrorMsg.innerHTML="";
    noteForm.innerHTML ="";
    noteForm2.innerHTML ="";
    noteForm3.innerHTML = `
    <label for="title3">Title: </label>
    <input type="text3" id="title3" name="subject3">
    <br/>
    <label for="text3">Write your note: </label><br/>
    <textarea name="feedback3" id="text3" cols="50" rows="10"></textarea><br/>
    <input type="submit" id="submitButton3" value="save note">
`
const submitButtonFunction3 = document.getElementById("submitButton3");

submitButtonFunction3.onclick = () => {
    goPage3(); 
}

const newTitle3 = document.getElementById("title3");
const newFeedback3 = document.getElementById("text3");
connectToLocalStorage(newTitle3);
connectToLocalStorage(newFeedback3);

}

// Creating this addEventListener to navigate with the back and forward button of the browser
window.addEventListener("popstate", (e)=>{ //when ever the user pushes the back or forward button in the browser
    if(e.state === null) goWelcomePage(); //this event has a state that can be set with the history.pushState function
    if(e.state === "Page 1") goPage1();
    if(e.state === "Page 2") goPage2();
    if(e.state === "Page 3") goPage3();
})

//in case we rfresh one of the pages after login -> it goes back to the Welcome page 
if(location.hash === "#welcome") goWelcomePage();
if(location.hash === "#page1") goWelcomePage(); 
if(location.hash === "#page2") goWelcomePage(); 
if(location.hash === "#page3") goWelcomePage(); 

//calling the login function to enter the app
loginButton.addEventListener("click", (e) => {
    e.preventDefault(); //preventing a refresh to happen
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web") {
        alert("You have successfully logged in.");
        history.pushState("Welcome", null, "#welcome") //enabling us tu use the back button to get the #welcome away from the url
        goWelcomePage(); 
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})