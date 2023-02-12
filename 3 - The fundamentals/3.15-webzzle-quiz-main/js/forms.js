//WELCOME PAGE

function sign_in_welcome() {
  document.getElementById("sign_in_welcome").onclick = function (){
  window.location = "./signin.html";
}
}

function sign_up_welcome() {
  document.getElementById("sign_up_welcome").onclick = function (){
  window.location = "./signup.html";
}
}


//SIGN UP
const signUp = e => {
    let fname = document.getElementById('username').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('username').focus();
        alert("Account Created.\n\nPlease Sign In.");
        location.href = "./signin.html";
    }
    else{
        alert("Duplicate found!\nYou have already signed up");
        document.getElementById("duplicate-msg").innerHTML = "Duplicate found, you have already signed up! <br> Please <a href='signin.html'>Sign In</a>.";
    }
    e.preventDefault();
}

//SIGN IN
const signIn = e => {
    let fname = document.getElementById('username').value, pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.fname.toLowerCase() == fname && data.pwd.toLowerCase() == pwd);
    if(!exist){
        // alert("Incorrect login credentials");
        document.getElementById("incorrectLogin-msg").innerHTML = "Incorrect login credentials! <br> Please <a href='signup.html'>Sign up</a>.";
    }
    else{
        location.href = "./quiz.html";
    }
    e.preventDefault();
}