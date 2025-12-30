let scoreOne=document.getElementById("score1")
let scoreTwo=document.getElementById("score2")
let count=0
function btn1(){
    count += 1
    scoreOne.textContent = count 
}
function btn2(){
    count += 2
    scoreOne.textContent = count 
}
function btn3(){
    count += 3
    scoreOne.textContent = count 
}
function btn4(){
    count += 1
    scoreTwo.textContent = count 
}
function btn5(){
    count += 2
    scoreTwo.textContent = count 
}
function btn6(){
    count += 3
    scoreTwo.textContent = count 
}