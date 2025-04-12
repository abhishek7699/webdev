const textType=document.querySelector(".typing-text p");

const time=document.querySelector(".time span b");
const mistake=document.querySelector(".mistake span b");
const wpm=document.querySelector(".wpm span b");
const cpm=document.querySelector(".cpm span b");
const Button=document.querySelector("#bttn");
const input=document.querySelector(".input_field");


//set value

let timmer=0;
let maxTime=60;
let timeleft=maxTime;
let charIndex=0;
let mistakes=0;
let isTyping= false;


function loadparagraph(){

    const extendedSentenceBank = [
        "In today’s fast-paced world, attention is a valuable commodity, and harnessing the power of digital innovation has become crucial for success.",
        "The journey toward excellence is paved with perseverance, determination, and the constant pursuit of knowledge, even in the face of adversity.",
        "Technology has revolutionized our daily lives in countless ways, enabling us to connect, communicate, and collaborate across vast distances with unprecedented ease.",
        "Every challenge encountered serves as an opportunity to grow, learn, and evolve into a more resilient individual ready to tackle the next hurdle.",
        "Success in the modern era relies not only on hard work but also on the effective use of innovative strategies and forward-thinking solutions.",
        "Creative problem-solving and critical thinking are essential skills that empower us to turn obstacles into stepping stones toward our goals.",
        "The rapid advancement of technology has redefined how we approach everyday tasks, offering new perspectives and novel solutions at every turn.",
        "A balanced approach to life combines a focus on personal well-being with the drive to achieve and innovate in professional endeavors.",
        "Commitment to continuous improvement and a passion for excellence can transform challenges into meaningful accomplishments.",
        "Effective communication, strategic planning, and adaptability are the cornerstones of success in an ever-changing global landscape.",
        "Investing time in self-improvement and skill development is key to unlocking new opportunities and achieving long-term success.",
        "Innovation is the result of combining creative ideas with purposeful action and a willingness to take risks in pursuit of progress.",
        "The integration of technology into everyday processes has not only increased productivity but also opened up new avenues for artistic expression.",
        "Embracing change and learning from both successes and failures is a critical part of personal growth and career development.",
        "A comprehensive understanding of current trends and emerging technologies can provide a competitive edge in today’s market.",
        "Collaboration and teamwork are essential for the most groundbreaking ideas to come to fruition, as diverse perspectives often lead to better solutions.",
        "Every individual possesses unique strengths and talents that, when nurtured, can lead to innovative breakthroughs and lasting success.",
        "In a world full of rapid changes, the ability to adapt and respond with creativity and resilience is more valuable than ever.",
        "Technology, creativity, and a commitment to excellence together form the foundation for a brighter, more prosperous future.",
        "Striving for continuous improvement in all areas of life enables us to achieve our highest potential and make a positive impact on the world."
      ];


  let randomIndex=Math.floor(Math.random() * extendedSentenceBank.length)
  textType.innerHTML="";
  for( let char of extendedSentenceBank[randomIndex]){
    console.log(char)
    textType.innerHTML+=`<span>${char}</span>`;

    textType.querySelectorAll("span")[0].classList.add("active");

    document.addEventListener("keydown",()=>input.focus());
    textType.addEventListener("click",()=>input.focus());
  }

};

loadparagraph();

function initTyping(){

    const char=textType.querySelectorAll("span")

    const textTyped=input.value.charAt(charIndex);

    if(charIndex<char.length && timeleft>0){

        if(!isTyping){
            timmer=setInterval(inItTime,1000);
            isTyping=true;
        }



        if(char[charIndex].innerText===textTyped){
            char[charIndex].classList.add("correct");
            console.log("corrrct")

        }
        else{
            mistakes++
            char[charIndex].classList.add("Incorrect");
            console.log("Incorrrct")
        }
        charIndex++
        char[charIndex].classList.add("active");
           

        mistake.innerText=mistakes;
        cpm.innerText=charIndex-mistakes;
    }
    else{
        clearInterval(timmer);
        input.value="";
    }

}

function inItTime(){
    if(timeleft>0 ){
        timeleft--
        time.innerText=timeleft;
        const wpmVal=Math.round(((charIndex-mistakes)/5)/(maxTime-timeleft)*60)
        wpm.innerText=wpmVal;
    }
    else{
        clearInterval(timmer)
    }
   



}

function reset(){
    clearInterval(timmer);
    input.value="";
    loadparagraph();
    let maxTime=60;
let timeleft=maxTime;
let charIndex=0;
let mistakes=0;
let isTyping= false;
wpmVal=0
wpm.innerText=wpmVal;
cpm.innerText=0
mistake.innerText=0
time.innerText=60;



}

Button.addEventListener("click",reset);

input.addEventListener("input",initTyping);


  
