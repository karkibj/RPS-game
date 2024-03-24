let userScore=0;
let compScore=0;
let Showuser_score=document.querySelector("#yourscore")
let Showcomp_score=document.querySelector("#compscore")

let choice=document.querySelectorAll(".box");
console.log(choice)


function generatechoice(){
    let list=['rock','paper','scissor'];
    let Compchoice=Math.floor(Math.random()*3);

    return list[Compchoice];
}


let displaymsg=document.querySelector("#result")


showdraw=()=>{
    console.log("it's a draw");
    displaymsg.innerText=`It's a draw! Play Again`
    displaymsg.style.backgroundColor="yellow";
    displaymsg.style.color="Black"
    

    
}


showWinner=(userWin)=>{
    if(userWin){
    
        console.log("you win")
        displaymsg.innerText=("you win");
        displaymsg.style.backgroundColor="green"
        userScore=userScore+1;
        Showuser_score.innerText=userScore;
        displaymsg.style.color="white"

    }
    else{
        console.log("you loose");
        compScore=compScore+1;
        displaymsg.innerText="You loose"
        displaymsg.style.backgroundColor="red"
        displaymsg.style.color="white"
        Showcomp_score.innerText=compScore;

    }
    
}

const playgame=(Userchoice)=>{
    console.log(`your choice ${Userchoice}`)
    const Compchoice=generatechoice();
    console.log(`computer choice ${Compchoice}`)

    
    if(Userchoice===Compchoice){
       showdraw()

    }
    else{
        let userWin=true
        if(Userchoice=='rock'){
            // paper scissor
           userWin= Compchoice==='paper'? false : true;
        }
        else if(Userchoice=='paper'){
            //scissor rock
            userWin=Compchoice=='scissor'?false:true;
        }
        else{
            //paper rock
            userWin=Compchoice==='rock'?false:true;
        }
        showWinner(userWin)
}
    }
    



choice.forEach((ch)=>{
    
        ch.addEventListener('click',()=>{
        Userchoice=ch.getAttribute('id');
        playgame(Userchoice)
        })
        
    
})



// choice.forEach(el => {
//     let Userchoice=el.getAttribute('id');
//     console.log(Userchoice);
    // choiceAcess(el)
  
    
// });



