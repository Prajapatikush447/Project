let boxes = document.querySelectorAll(".box")
//console.log(boxes);

let resetbtn = document.querySelector("#reset");
//console.log(resetbtn);

let newgamebtn = document.querySelector("#new")
//console.log(newgame);

let msgcont = document.querySelector(".msg-container");


let winmsg  = document.querySelector("#msg");


let turnO = true; // playerX playerO

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        //console.log("box was click");

        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        } 
        box.disabled = true;    // that is disable to button(means when we click the button second time value can be not change only onetime value can change when we click).
        
        checkWinner();
    });
});

const resetgame = () =>{
    turnO = true;
    anbleboxes();
    msgcont.classList.add("hide");
} 

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const anbleboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) =>{
    winmsg.innerText = `Congratulations! winner is ${winner}`;
    msgcont.classList.remove("hide"); 
    disableboxes();  
}

const checkWinner = () =>{
    for(let patterns of winpatterns){

        let post1val = boxes[patterns[0]].innerText;
        let post2val = boxes[patterns[1]].innerText;
        let post3val = boxes[patterns[2]].innerText;
       
        if(post1val != "" && post2val != "" && post3val != ""){
            if(post1val === post2val && post2val === post3val){
                //console.log("Winner");
                showwinner(post1val);
            }
        }
    }

};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);