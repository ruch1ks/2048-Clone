import Game from "./game.js";

export const gameObj = new Game(4); 

export const color = function(node, value) {
    switch(value) {
        case 0:
            node.setAttribute("style", "background-color:gray");
            break;
        case 2:
            node.setAttribute("style", "background-color:#e6e4cf");
            break;
        case 4: 
            node.setAttribute("style", "background-color:#e0ddb6");
            break;
        case 8:
            node.setAttribute("style", "background-color:#ffb914");
            break;
        case 16:
            node.setAttribute("style", "background-color:#ff9114");
            break;
        case 32:
            node.setAttribute("style", "background-color:#ff5e14");
            break;
        case 64:
            node.setAttribute("style", "background-color:#f52900");
            break;
        case 128:
            node.setAttribute("style", "background-color:#ede374");
            break;
        case 256: 
            node.setAttribute("style", "background-color:#fad44b");
            break;
        case 512: 
            node.setAttribute("style", "background-color:#fac84b");
            break;
        case 1024: 
            node.setAttribute("style", "background-color:#faba4b");
            break;
        case 2048: 
            node.setAttribute("style", "background-color:#fab44b");
            break;
        case 4096: 
            node.setAttribute("style", "background-color:#fa4b7a");
            break;
        case 8192: 
            node.setAttribute("style", "background-color:#fa4b4b");
            break;
        default:

    }
}

export const renderNewBoard = function(){
    //create new game
    gameObj.setupNewGame();

    let div = document.createElement("DIV");
        div.setAttribute("class", "container");

    //create title score container
    let scoreDiv = document.createElement("DIV");
        scoreDiv.setAttribute("class", "heading");
        let title = document.createElement("H1");
        let titleTxt = document.createTextNode("2048");
        title.appendChild(titleTxt);
        let instructions = document.createElement("P");
        let instructionTxt = document.createTextNode("Use the arrow keys to add tiles of the same value together. Try to get to 2048!");
        instructions.appendChild(instructionTxt);
        let score = document.createElement("DIV");
            score.setAttribute("class", "score-value");
        let scoreTxt = document.createTextNode(gameObj.score);
        score.appendChild(scoreTxt);

        scoreDiv.appendChild(title);
        scoreDiv.append(instructions);
        scoreDiv.appendChild(score);
   
    //create message box and button to restart
    let winStatus = document.createElement("DIV");
        winStatus.setAttribute("class", "win-status");
        let winMsg = document.createElement("DIV");
        winMsg.setAttribute("class", "message");
        let winTxt = document.createElement("P");
        winMsg.appendChild(winTxt);
        let restartDiv = document.createElement("DIV");
        restartDiv.setAttribute("class", "lower");
        let restartBtn = document.createElement("BUTTON");
        restartBtn.setAttribute("class", "restart");
        let restartTxt = document.createTextNode("Restart");
        restartBtn.appendChild(restartTxt);
        restartBtn.addEventListener("click", handleRestart);
        restartDiv.appendChild(restartBtn);

        winStatus.appendChild(winMsg);
        winStatus.appendChild(restartDiv);


    //rows 1 through 4 ... not anymore
    //... these became columns somehow with the CSS
    let col1Div = document.createElement("DIV");
    col1Div.setAttribute("class", "row");
        // create cells and set classes
        let cell11 = document.createElement("DIV");
            cell11.setAttribute("class", "cell");
            cell11.setAttribute("id", "c11");
            let t11 = document.createTextNode(gameObj.board[0]);
            cell11.appendChild(t11);
        let cell21 = document.createElement("DIV");
            let t21 = document.createTextNode(gameObj.board[4]);
            cell21.appendChild(t21);
            cell21.setAttribute("class", "cell");
            cell21.setAttribute("id", "c21");
        let cell31 = document.createElement("DIV");
            let t31 = document.createTextNode(gameObj.board[8]);
            cell31.appendChild(t31); 
            cell31.setAttribute("class", "cell");
            cell31.setAttribute("id", "c31");
        let cell41 = document.createElement("DIV");
            cell41.setAttribute("class", "cell");
            cell41.setAttribute("id", "c41");
            let t41 = document.createTextNode(gameObj.board[12]);
            cell41.appendChild(t41); 
        
        col1Div.appendChild(cell11);
        col1Div.appendChild(cell21);
        col1Div.appendChild(cell31);
        col1Div.appendChild(cell41);

    let col2Div = document.createElement("DIV");
    col2Div.setAttribute("class", "row");
        // create cells and set classes
        let cell12 = document.createElement("DIV");
            let t12 = document.createTextNode(gameObj.board[1]);
            cell12.appendChild(t12);
            cell12.setAttribute("class", "cell");
            cell12.setAttribute("id", "c12");
        let cell22 = document.createElement("DIV");
            let t22 = document.createTextNode(gameObj.board[5]);
            cell22.appendChild(t22);
            cell22.setAttribute("class", "cell");
            cell22.setAttribute("id", "c22");
        let cell32 = document.createElement("DIV");
            let t32 = document.createTextNode(gameObj.board[9]);
            cell32.appendChild(t32);
            cell32.setAttribute("class", "cell");
            cell32.setAttribute("id", "c32");
        let cell42 = document.createElement("DIV");
            let t42 = document.createTextNode(gameObj.board[13]);
            cell42.appendChild(t42);
            cell42.setAttribute("class", "cell");
            cell42.setAttribute("id", "c42");

        col2Div.appendChild(cell12);
        col2Div.appendChild(cell22);
        col2Div.appendChild(cell32);
        col2Div.appendChild(cell42);

    let col3Div = document.createElement("DIV");
    col3Div.setAttribute("class", "row");
        // create cells and set classes
        let cell13 = document.createElement("DIV");
            let t13 = document.createTextNode(gameObj.board[2]);
            cell13.appendChild(t13);
            cell13.setAttribute("class", "cell");
            cell13.setAttribute("id", "c13");
        let cell23 = document.createElement("DIV");
            let t23 = document.createTextNode(gameObj.board[6]);
            cell23.appendChild(t23);
            cell23.setAttribute("class", "cell");
            cell23.setAttribute("id", "c23");
        let cell33 = document.createElement("DIV");
            let t33 = document.createTextNode(gameObj.board[10]);
            cell33.appendChild(t33);
            cell33.setAttribute("class", "cell");
            cell33.setAttribute("id", "c33");
        let cell43 = document.createElement("DIV");
            let t43 = document.createTextNode(gameObj.board[14]);
            cell43.appendChild(t43);
            cell43.setAttribute("class", "cell");
            cell43.setAttribute("id", "c43");

        col3Div.appendChild(cell13);
        col3Div.appendChild(cell23);
        col3Div.appendChild(cell33);
        col3Div.appendChild(cell43);

    let col4Div = document.createElement("DIV");
    col4Div.setAttribute("class", "row");
        // create cells and set classes
        let cell14 = document.createElement("DIV");
            let t14 = document.createTextNode(gameObj.board[3]);
            cell14.appendChild(t14);
            cell14.setAttribute("class", "cell");
            cell14.setAttribute("id", "c14");
        let cell24 = document.createElement("DIV");
            let t24 = document.createTextNode(gameObj.board[7]);
            cell24.appendChild(t24);
            cell24.setAttribute("class", "cell");
            cell24.setAttribute("id", "c24");
        let cell34 = document.createElement("DIV");
            let t34 = document.createTextNode(gameObj.board[11]);
            cell34.appendChild(t34);
            cell34.setAttribute("class", "cell");
            cell34.setAttribute("id", "c34");
        let cell44 = document.createElement("DIV");
            let t44 = document.createTextNode(gameObj.board[15]);
            cell44.appendChild(t44);
            cell44.setAttribute("class", "cell");
            cell44.setAttribute("id", "c44");

        col4Div.appendChild(cell14);
        col4Div.appendChild(cell24);
        col4Div.appendChild(cell34);
        col4Div.appendChild(cell44);

     //color cells
     color(cell11, gameObj.board[0]);
     color(cell12, gameObj.board[1]);
     color(cell13, gameObj.board[2]);
     color(cell14, gameObj.board[3]);
     color(cell21, gameObj.board[4]);
     color(cell22, gameObj.board[5]);
     color(cell23, gameObj.board[6]);
     color(cell24, gameObj.board[7]);
     color(cell31, gameObj.board[8]);
     color(cell32, gameObj.board[9]);
     color(cell33, gameObj.board[10]);
     color(cell34, gameObj.board[11]);
     color(cell41, gameObj.board[12]);
     color(cell42, gameObj.board[13]);
     color(cell43, gameObj.board[14]);
     color(cell44, gameObj.board[15]);

     //entire grid
     let gridDiv = document.createElement("DIV");
     gridDiv.setAttribute("class", "grid");
     gridDiv.appendChild(col1Div);
     gridDiv.appendChild(col2Div);
     gridDiv.appendChild(col3Div);
     gridDiv.appendChild(col4Div);

     let lnBreak = document.createElement("BR");
     //box for grid, status, score
     div.appendChild(scoreDiv);
     div.appendChild(winStatus);
     div.appendChild(lnBreak);
     div.appendChild(gridDiv);
     div.setAttribute("class", "container");
     
     const $root = $('#root');
     $root.append(div);
     
     return div;
}

export const handleRestart = function() {
    let head = document.getElementsByClassName("container")[0];
    head.replaceWith(renderNewBoard());
}

export const moveTiles = function(gameState){
    //manually reset all 16 tiles
    let c11 = document.getElementById("c11");
        let node11 = document.createTextNode(gameState.board[0]);
        c11.replaceChild(node11, c11.childNodes[0]);
    let c12 = document.getElementById("c12");
        let node12 = document.createTextNode(gameState.board[1]);
        c12.replaceChild(node12, c12.childNodes[0]);
    let c13 = document.getElementById("c13");
        let node13 = document.createTextNode(gameState.board[2]);
        c13.replaceChild(node13, c13.childNodes[0]);
    let c14 = document.getElementById("c14");
        let node14 = document.createTextNode(gameState.board[3]);
        c14.replaceChild(node14, c14.childNodes[0]);
    let c21 = document.getElementById("c21");
        let node21 = document.createTextNode(gameState.board[4]);
        c21.replaceChild(node21, c21.childNodes[0]);
    let c22 = document.getElementById("c22");
        let node22 = document.createTextNode(gameState.board[5]);
        c22.replaceChild(node22, c22.childNodes[0]);
    let c23 = document.getElementById("c23");
        let node23 = document.createTextNode(gameState.board[6]);
        c23.replaceChild(node23, c23.childNodes[0]);
    let c24 = document.getElementById("c24");
        let node24 = document.createTextNode(gameState.board[7]);
        c24.replaceChild(node24, c24.childNodes[0]);
    let c31 = document.getElementById("c31");
        let node31 = document.createTextNode(gameState.board[8]);
        c31.replaceChild(node31, c31.childNodes[0]);
    let c32 = document.getElementById("c32");
        let node32 = document.createTextNode(gameState.board[9]);
        c32.replaceChild(node32, c32.childNodes[0]);   
    let c33 = document.getElementById("c33");
        let node33 = document.createTextNode(gameState.board[10]);
        c33.replaceChild(node33, c33.childNodes[0]);
    let c34 = document.getElementById("c34");
        let node34 = document.createTextNode(gameState.board[11]);
        c34.replaceChild(node34, c34.childNodes[0]);
    let c41 = document.getElementById("c41");
        let node41 = document.createTextNode(gameState.board[12]);
        c41.replaceChild(node41, c41.childNodes[0]);
    let c42 = document.getElementById("c42");
        let node42 = document.createTextNode(gameState.board[13]);
        c42.replaceChild(node42, c42.childNodes[0]);
    let c43 = document.getElementById("c43");
        let node43 = document.createTextNode(gameState.board[14]);
        c43.replaceChild(node43, c43.childNodes[0]);
    let c44 = document.getElementById("c44");
        let node44 = document.createTextNode(gameState.board[15]);
        c44.replaceChild(node44, c44.childNodes[0]);

    //recolor all of them
    color(c11, gameState.board[0]);
    color(c12, gameState.board[1]);
    color(c13, gameState.board[2]);
    color(c14, gameState.board[3]);
    color(c21, gameState.board[4]);
    color(c22, gameState.board[5]);
    color(c23, gameState.board[6]);
    color(c24, gameState.board[7]);
    color(c31, gameState.board[8]);
    color(c32, gameState.board[9]);
    color(c33, gameState.board[10]);
    color(c34, gameState.board[11]);
    color(c41, gameState.board[12]);
    color(c42, gameState.board[13]);
    color(c43, gameState.board[14]);
    color(c44, gameState.board[15]);

}

export const updateScore = function(gameState) {
    let scoreContainer = document.getElementsByClassName("score-value")[0];
    let newScore = document.createTextNode(gameState.score);
    scoreContainer.replaceChild(newScore, scoreContainer.childNodes[0]);
}

export const updateWinLose = function(gameState) {
    let messageContainer = document.getElementsByClassName("message")[0];
    let wonMessage = document.createTextNode("Congratulations, you won!");
    let lostMessage = document.createTextNode("No valid moves left. Try again?"); 
    if(gameState.won == true && gameState.over == true) {
        let doubleMsg = document.createElement("DIV");
        doubleMsg.appendChild(wonMessage);
        doubleMsg.appendChild(lostMessage);
        messageContainer.replaceChild(doubleMsg, messageContainer.childNodes[0]);
        
    } else if(gameState.over == true) {
        messageContainer.replaceChild(lostMessage, messageContainer.childNodes[0]);
        
    } else if(gameState.won == true) {
        messageContainer.replaceChild(wonMessage, messageContainer.childNodes[0]);
    }
}

//event handling for keypress
$(document).keydown(function(e) {
    let gameState = null;
    if(e.key == "ArrowLeft") {
        gameState = gameObj.move("left");
    } else if(e.key == "ArrowRight") {
        gameState = gameObj.move("right");
    } else if(e.key == "ArrowUp") {
        gameState = gameObj.move("up");
    } else if(e.key == "ArrowDown") {
        gameState = gameObj.move("down");
    }

    if(gameState != null) {
        moveTiles(gameState);
        updateScore(gameState);
        updateWinLose(gameState);
    }
});

$(function() {
    renderNewBoard();
});
