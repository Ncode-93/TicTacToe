let boxes=document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn")
let newg = document.querySelector("#new-btn")
let masg = document.querySelector(".msg-1")
let para = document.querySelector("#p")
let turn0 = true;
let count =0;
const resetGame=()=>{
    turn0=true;
    count =0;
    en();
    masg.classList.add("hide");
}
const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const gameDraw=()=>{
    para.innerText=`No one won.`;
    masg.classList.remove("hide");
    dis();
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(!box.textContent){
            box.textContent=turn0?"O":"X"
            turn0= !turn0;
            count++;
            if (count === 9) {
                let isWin = checkWin();
                if (!isWin) {
                    gameDraw();
                }
            } else {
                checkWin();
            }
        }
        checkWin();
    })
})



const showWinner =(winner)=>{
    para.innerText=`Congratulations, Winner ${winner}`;
    masg.classList.remove("hide");
    dis();
}
const dis =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const en =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const checkWin = ()=>{
    for(let pattern of winpat){
        // console.log(pattern[0],pattern[1],pattern[2])
        let val0 = boxes[pattern[0]].innerText;
        let val1 = boxes[pattern[1]].innerText;
        let val2 = boxes[pattern[2]].innerText;
        if(val0 != "" && val1!="" && val2!=""){
            if(val0===val1 && val1 === val2){
                // console.log("winner", val0);
                showWinner(val0);
                return true;
            }
        }
    }
}
newg.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
