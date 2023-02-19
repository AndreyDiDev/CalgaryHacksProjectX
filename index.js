// $(function(){
//     $("input[name='options']").click(a);
// });

// function a(){
//     alert("test");
    

//     $("input[name='options']").parent().addClass("active");
// }

let btn1 = document.getElementById("option1")
let btn2 = document.getElementById("option2")
let btn3 = document.getElementById("option3")
let btn1Flag = true;
let btn2Flag = false;
let btn3Flag = false;
btn1.style.color = "yellow";

btn1.addEventListener('click', function(){
    btn1.style.color = "yellow";
    btn2.style.color = "black";
    btn3.style.color = "black";
    btn1Flag = true;
    btn2Flag = false;
    btn3Flag = false;
})
btn2.addEventListener('click', function(){
    btn2.style.color = "yellow";
    btn1.style.color = "black";
    btn3.style.color = "black";
    btn2Flag = true;
    btn1Flag = false;
    btn3Flag = false;
})
btn3.addEventListener('click', function(){
    btn3.style.color = "yellow";
    btn2.style.color = "black";
    btn1.style.color = "black";
    btn3Flag = true;
    btn1Flag = false;
    btn2Flag = false;
})
