import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyByE-NRTPqD8SDtVERFQ2Q9K5mv347moHg",
    authDomain: "projectx-7d955.firebaseapp.com",
    databaseURL: "https://projectx-7d955-default-rtdb.firebaseio.com",
    projectId: "projectx-7d955",
    storageBucket: "projectx-7d955.appspot.com",
    messagingSenderId: "297214697530",
    appId: "1:297214697530:web:26be75ee9a6d33146b5503",
    measurementId: "G-HWJV8SGSYZ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const db = getDatabase();
const auth = getAuth();
var user = auth.currentUser

// user token variable
var user_token = user.uid
console.log(user_token)

// various user info
var username = document.getElementById("username");
var password_ID = document.getElementById("passwordID");
var course_ID = "CPSC 233"

// buttons that we will use to call functions
var signUpBtn = document.getElementById("register");
var logInBtn = document.getElementById("login");
var coursebutton = document.getElementById("coursebutton")


/*
function InsertData(){
    push(ref(db, "User information/"), {
        UserName: username.value,
        Password: password.value
    })
    .then(()=>{
        alert("data stored successfully");
    })
    .catch((error)=>{
        alert("unsuccessful, error"+error);
    });
}
*/

function course_setup () {
    // set new branch: name courseID upon input
    // inside branch is: prof, times, location
    var user = auth.currentUser

    var professor = "Manzara"
    var start_time = "10:00"
    var end_time = "10:50"
    var lecture_section = "L01"
    var location = "ST 140"

    var course_data = {
        professor: professor,
        start_time: start_time,
        end_time: end_time,
        lecture_section: lecture_section,
        location: location
    }

    set(ref(db, 'users/'+user_token/+course_ID), course_data)
    console.log("Made it to database")

}



// set up our register function
function register () {
    // Get all our input fields
    var email = username.value
    var password = password_ID.value

    if (validate_email(email) == false || validate_password(password) == false) {
        return
    }
    
    if ((validate_field(email) == false) || (validate_field(password) == false)) {
        return
    }
   
    createUserWithEmailAndPassword(auth, email, password).then(function(){
        var user = auth.currentUser

        var user_data = {
            email: email,
            password: password,
            last_login: Date.now()
        }
    
        set(ref(db, 'users/'+user.uid), user_data)

        })
        .catch(function(error){
            var error_code = error.error_code
            var error_message = error.message
            console.log("the error is in the register")
            alert(error_message)
        })

    console.log("we got thru to the database")
    
}


function login(){
    var email = username.value
    var password = password_ID.value

    if (validate_email(email) == false || validate_password(password) == false) {
        return
    }
    
    if ((validate_field(email) == false) || (validate_field(password) == false)) {
        return
    }

    signInWithEmailAndPassword(auth, email, password).then(function(){
        var user = auth.currentUser

        var user_data = {
            last_login: Date.now()
        }
    
        update(ref(db, 'users/'+user.uid), user_data)

    })
    .catch(function(error){
        var error_code = error.error_code
        var error_message = error.message
    
        alert(error_message)
    })
}

function validate_email(email) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    }else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    }else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

signUpBtn.addEventListener('click', register);
logInBtn.addEventListener('click', login);
coursebutton.addEventListener('click', course_setup)