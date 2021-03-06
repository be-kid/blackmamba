import { opening2, opening3, opening4, opening5 } from "./opening.js";

export function ending(state, timeLimit){
    const gameTitle = document.getElementById("game-title");
    
    const crystal = document.getElementById("crystal");
    crystal.style.visibility = "hidden";

    
    if (state === 0){ //실패
        const endingStr = ["든 걸", " 삼", "켜버릴"];
        let idx = 0;
        let str = "모";
        gameTitle.innerText = str;
        let makeTitle = setInterval(function(){
            if (idx === 3){
                clearInterval(makeTitle);
            }
            else
            {
                str += endingStr[idx];
                gameTitle.innerText = str;
                idx+=1;
            }
        }, 200)

        setTimeout(opening4, 500);
        setTimeout(opening3, 1000);
        setTimeout(opening2, 1500);
        setTimeout(opening5, 2000);
    }
    else if (state === 1){ //성공
        const winEnding = ["chrome", " to", " colors"];
        const winner = document.getElementById("winner");
        const clearTime = document.getElementById("clearTime");

        clearTime.innerText = `score : ${parseInt(timeLimit * 100)}`;
        let winIdx = 0;
        let str = "Mono";
        gameTitle.innerText = str;
        let makeTitle = setInterval(function(){
            if (winIdx === 3){
                clearInterval(makeTitle);
            }
            else
            {
                str += winEnding[winIdx];
                gameTitle.innerText = str;
                winIdx+=1;
            }
        }, 200)
        const colors = [];
   
        for (let i=0; i<25; i++){
            for (let j=0; j<25; j++){
                colors.push([i,j]);      
            }
        }
        
        let idx = 0;

        let fill = setInterval(function(){
            if (idx === 625){
                clearInterval(fill);
                winner.style.display = "block";
            }
            else{
                const i = colors[idx][0];
                const j = colors[idx][1];

                const r = Math.floor(Math.random() * 1000) % 256;
                const g = Math.floor(Math.random() * 1000) % 256;
                const b = Math.floor(Math.random() * 1000) % 256;
                document.getElementById(`${i},${j}`).style.backgroundColor = `rgb(${r},${g},${b})`;
                idx+=1;
            }
        },1);
    }
}