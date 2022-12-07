var hourTimer  = document.getElementById("hourTimer")
var MinuteTimer  = document.getElementById("minuteTimer")
var SecondTimer  = document.getElementById("secondTimer")
var milliSecondTimer  = document.getElementById("milliSecondTimer")

var hour = 0
var minute = 0
var second = 0
var mSec = 0

var interval;

function autoTimer(){
mSec++
if(mSec == 10){
    mSec = 0
    second++
}    
if(second == 60){
    second = 0
    minute++
}    
if(minute == 60){
    minute = 0
    hour++
}
    milliSecondTimer.innerHTML = mSec
    SecondTimer.innerHTML = second
    MinuteTimer.innerHTML = minute
    hourTimer.innerHTML = hour 
}

function startButton(){
 interval = setInterval(function(){
    autoTimer()    
 },100)   
}

function pauseButton(){
    clearInterval(interval)
}

function resetButton(){
    var hour = 0
var minute = 0
var second = 0
var mSec = 0

milliSecondTimer.innerHTML = mSec
SecondTimer.innerHTML = second
MinuteTimer.innerHTML = minute
hourTimer.innerHTML = hour

pauseButton()
}

