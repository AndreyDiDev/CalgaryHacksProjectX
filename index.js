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

btn1.addEventListener('mouseover', function(){
    btn1.style.color = "yellow";
    btn2.style.color = "black";
    btn3.style.color = "black";

})
btn2.addEventListener('mouseover', function(){
    btn2.style.color = "yellow";
    btn1.style.color = "black";
    btn3.style.color = "black";
})
btn3.addEventListener('mouseover', function(){
    btn3.style.color = "yellow";
    btn2.style.color = "black";
    btn1.style.color = "black";
})
