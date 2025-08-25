let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#New-btn");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =() =>{
    turnO= true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText ="O";
            turnO=false;
     
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
});
});



const disableboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText= "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner=() =>{
    for( let pattern of winPatterns){
        let pos1Val =boxes[pattern[0]].innerText;
        let pos2Val =boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};
 
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);