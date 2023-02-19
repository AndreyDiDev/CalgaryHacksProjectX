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

const db = getDatabase(app);
const auth = getAuth();

// various user info
var course_ID = "CPSC 233"

// buttons that we will use to call functions
var signUpBtn = document.getElementById("make-account");
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

    set(ref(db, 'users/'+user.uid+'/'+course_ID), course_data)

}

// set up our register function
function register () {
    // Get all our input fields
     var first_name = document.getElementById("firstname").value
     var last_name = document.getElementById("lastname").value
     var email = document.getElementById("email").value
     var password = document.getElementById("password").value
     var year_of_study = document.getElementById("year").value
     var major = document.getElementById("major").value
     var interests = document.getElementById("interests").value

    if (validate_email(email) == false || validate_password(password) == false) {
        console.log("error 1")
        return
    }
    
    if ((validate_field(email) == false) || (validate_field(password) == false)) {
        console.log("error 2")
        return
    }
   
    createUserWithEmailAndPassword(auth, email, password).then(function(){
        var user = auth.currentUser

        var user_data = {
            "first name": first_name,
            "last name": last_name,
            email: email,
            password: password,
            "year of study": year_of_study,
            major: major,
            interests: interests,
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

// signUpBtn.addEventListener('click', register);
// logInBtn.addEventListener('click', login);
coursebutton.addEventListener('click', course_setup)