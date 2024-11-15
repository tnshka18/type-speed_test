let randomText=document.getElementById("randomText");
let textInput=document.getElementById("textInput");
let result=document.getElementById("result");
let btn=document.getElementById("btn");

const myFun=()=>{
    let wordLength=textInput.value.split(" ").length;
    let time=new Date();
    endTime=time.getTime();
    let completeTime=Math.floor((endTime-startTime)/1000);
    let speed=Math.floor((wordLength/completeTime)*60);
    console.log(completeTime);
    result.innerHTML=" You write "+wordLength+" word in "+completeTime + " seconds: Your Typing speed is "+speed+" word per minute";
}

let data=["The old man sat on the porch, watching the sunset as memories of his youth filled his mind","The children played in the park, their laughter echoing as they ran between the swings and slides","He carefully painted the canvas, his brush strokes slow and deliberate as he brought the scene to life","The city buzzed with activity, people hurrying through the crowded streets, each lost in their own thoughts","She woke up early, the soft sound of birds chirping through the window greeting her as she stretched"]

let randomNum =Math.random()*data.length;
let randomData =Math.floor(randomNum)
//console.log(data[randomData]);
   
let startTime;
let endTime;

btn.addEventListener("click",function(){
    if(btn.innerText=="Start"){
        let time=new Date();
        startTime=time.getTime();
        console.log(startTime);
        btn.innerText="Done";
        textInput.disabled=false;
        textInput.style.backgroundColor="#e2d9d9";
        randomText.innerHTML=data[randomData]
    }
    else if(btn.innerText=="Done"){
        btn.innerText="Start";
        textInput.disabled=true;
        textInput.style.backgroundColor="#c5bce5";
        myFun()
    }
})