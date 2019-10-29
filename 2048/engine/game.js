//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/*
Add your code for Game here
 */
export default class Game {
    
    constructor(size) {
        this.width = size;
        this.height = size;
        this.board = [];
        this.score = 0;
        this.won = false;
        this.over = false;
        this.moveObservers = [];
        this.winObservers = [];
        this.loseObservers = [];
        this.gameState = {
            board: this.board,
            score: this.score, 
            won: this.won,
            over: this.over
        }

        //determine random indices for first two
        let index1 = Math.floor((Math.random()*size*size));
        let index2 = Math.floor((Math.random()*size*size));

        //make sure they aren't equal 
        while(index1 == index2) {
            index2 = Math.floor((Math.random()*size*size));
        }
        for(let i = 0; i < size*size; i++) {
            if(i == index1) {
                if(Math.random() <= 0.9) this.board.push(2);
                else this.board.push(4);
            } else if(i == index2){
                if(Math.random() <= 0.9) this.board.push(2);
                else this.board.push(4);
            } else {
                this.board.push(0);
            }
            
        }
    }

    setupNewGame() {
        this.board = [];

        //determine random indices for first two
        let index1 = Math.floor((Math.random()*this.width*this.height));
        let index2 = Math.floor((Math.random()*this.width*this.height));

        //make sure they aren't equal 
        while(index1 == index2) {
            index2 = Math.floor((Math.random()*this.width*this.height));
        }
        for(let i = 0; i < this.width*this.height; i++) {
            if(i == index1) {
                if(Math.random() <= 0.9) this.board.push(2);
                else this.board.push(4);
            } else if(i == index2){
                if(Math.random() <= 0.9) this.board.push(2);
                else this.board.push(4);
            } else {
                this.board.push(0);
            }
        }
        this.score = 0;
        this.won = false;
        this.over = false;

        let obj = {
            board: this.board,
            score: this.score,
            won: this.won,
            over: this.over
        };
        return obj;
    }

    move(direction) {
        if(this.over) {
            return this.gameState;
        }
        let won = false;
        
        //to make sure you cant get new tiles when move failed
        let movement = false;

        for(let i = 0; i < this.moveObservers.length; i++) {
            this.moveObservers[i](this.gameState);
        }

        //create double array representation 
        let double = [];
        for(let i = 0; i < this.width*this.height; i += this.width) {
            let row = [];
            for(let j = i; j < i+this.width; j++) {
                row.push(this.board[j]);
            }   
            double.push(row);
        }

        if(direction == 'left') {
            for(let i = 0; i < double.length; i++) {
                let modified = [];
                for(let m = 0; m < this.width; m++) {
                    modified.push(false);
                } 
                //merging
                for(let j = 0; j <= double[i].length - 1; j++) {
                    for(let k = j+1; k <= double[0].length - 1; k++) {
                        if(double[i][j] != 0 && double[i][j] == double[i][k] && modified[j] == false) {
                            let obstruction = false;
                            if(k-j > 1) {
                                
                                for(let m = j+1; m < k; m++) {
                                    if(double[i][m] != 0 && double[i][m] != double[i][j]) {
                                        obstruction = true;
                                    }
                                }
                            }
                        if(obstruction == false) {
                        double[i][j] += double[i][k];
                        double[i][k] = 0;
                        modified[j] = true;
                        movement = true;
                        this.score += double[i][j];
                        }
                    }
                }
                if(double[i][j] == 2048) {
                    won = true;
                    this.won = true;
                }
                }
            }
        } else if(direction == 'right') {
            for(let i = 0; i < double.length; i++) {
                let modified = [];
                for(let m = 0; m < this.width; m++) {
                    modified.push(false);
                } 
                for(let j = double[i].length - 1; j >=0; j--) {
                    for(let k = j-1; k >= 0; k--) {                   
                    if(double[i][j] != 0 && double[i][j] == double[i][k] && modified[j] == false) {
                        let obstruction = false;
                            if(j-k > 1) {
                                for(let m = j-1; m > k; m--) {
                                    if(double[i][m] != 0 && double[i][m] != double[i][j]) {
                                        obstruction = true;
                                    }
                                }
                            }
                        if(!obstruction) {
                        double[i][j] += double[i][k];
                        double[i][k] = 0;
                        modified[j] = true;
                        movement = true;
                        this.score += double[i][j];
                        }
                    }
                }
                if(double[i][j] == 2048) {
                    won = true;
                    this.won = true;
                }
                }
            }
            
        } else if(direction == 'up') {
            for(let i = 0; i < double.length; i++) {
                let modified = [];
                for(let m = 0; m < this.width; m++) {
                    modified.push(false);
                } 
                for(let j = 0; j <= double[0].length - 1; j++) {
                    for(let k = j+1; k <= double[0].length - 1; k++) {
                        
                        if(double[j][i] != 0 && double[j][i] == double[k][i] && modified[j] == false) {
                            let obstruction = false;
                            if(k-j > 1) {
                                for(let m = j+1; m < k; m++) {
                                    if(double[m][i] != 0 && double[m][i] != double[j][i]) {
                                        obstruction = true;
                                    }
                                }
                            }
                            
                            if(!obstruction) {
                            double[j][i] += double[k][i];
                            double[k][i] = 0;
                            modified[j] = true;
                            movement = true;
                            this.score += double[j][i];
                            }
                        }
                    }
                    if(double[j][i] == 2048) {
                        won = true;
                        this.won = true;
                    }
                }
            }
        } else if(direction == 'down') {
            for(let i = 0; i < double.length; i++) {
                let modified = [];
                for(let m = 0; m < this.width; m++) {
                    modified.push(false);
                } 
                for(let j = double[0].length - 1; j >= 0; j--) {
                    for(let k = j-1; k >= 0; k--) {
                        if(double[j][i] != 0 && double[j][i] == double[k][i] && modified[j] == false) {
                            let obstruction = false;
                            if(j-k > 1) {
                                for(let m = j-1; m > k; m--) {
                                    if(double[m][i] != 0 && double[m][i] != double[j][i]) {
                                        obstruction = true;
                                    }
                                }
                            }
                            if(!obstruction) {
                            double[j][i] += double[k][i];
                            double[k][i] = 0;
                            modified[j] = true;
                            movement = true;
                            this.score += double[j][i];
                            }
                        }
                    }
                    if(double[j][i] == 2048) {
                        won = true; 
                        this.won = true;
                    }
                }
            }
        }

        //moving
        if(direction == 'left') {
            for(let i = 0; i < double.length; i++) {
                let lastIndex = 0;
                for(let j = 0; j < double[i].length-1; j++) {
                    while(double[i][lastIndex] != 0 && lastIndex < double[0].length - 1) {
                        lastIndex++;
                    }
                    if(double[i][j] == 0 && double[i][j+1] != 0) {
                        double[i][lastIndex] = double[i][j+1];
                        double[i][j+1] = 0;
                        movement = true;
                        lastIndex++;
                    } 
                }
            }
        } else if(direction == 'right') {
            for(let i = 0; i < double.length; i++) {
                let lastIndex = double[0].length - 1;
                for(let j = double[i].length - 1; j > 0; j--) {
                    while(double[i][lastIndex] != 0 && lastIndex > 0) {
                        lastIndex--;
                    }
                    if(double[i][j] == 0 && double[i][j-1] != 0) {
                        double[i][lastIndex] = double[i][j-1];
                        double[i][j-1] = 0;
                        movement = true;
                        lastIndex--;
                    }
                }
            }
        } else if(direction == 'up') {
            for(let i = 0; i < double.length; i++) {
                let lastIndex = 0;
                for(let j = 0; j < double[0].length - 1; j++) {
                    while(double[lastIndex][i] != 0 && lastIndex < double[0].length - 1) {
                        lastIndex++;
                    }
                    if(double[j][i] == 0 && double[j+1][i] != 0) {
                        double[lastIndex][i] = double[j+1][i];
                        double[j+1][i] = 0;
                        movement = true;
                        lastIndex++;
                    }
                }
            }
        } else if(direction == 'down') {
            for(let i = 0; i < double.length; i++) {
                let lastIndex = double.length - 1;
                for(let j = double[0].length - 1; j > 0; j--) {
                    while(double[lastIndex][i] != 0 & lastIndex > 0) {
                        lastIndex--;
                    }
                    if(double[j][i] == 0 && double[j-1][i] != 0) {
                        double[lastIndex][i] = double[j-1][i];
                        double[j-1][i] = 0;
                        movement = true;
                        lastIndex--;
                    } 
                }
            }
        }

        //put new values into 1-D array
        this.board = [];
        for(let i = 0; i < double.length; i++) {
            for(let j = 0; j < double[i].length; j++) {
                this.board.push(double[i][j]);
            }
        }

        if(this.board.includes(0) && movement) {
            let emptySpots = [];
            for(let i = 0; i < this.board.length; i++) {
                if(this.board[i] == 0) {
                    emptySpots.push(i);
                }
            }
        //determine random indices for first two
        let index1 = Math.floor((Math.random()*emptySpots.length));
        
        if(Math.random() <= 0.9) this.board[emptySpots[index1]] = 2;
        else this.board[emptySpots[index1]] = 4;
        }

        if(won) {
            let obj = {
                board: this.board,
                score: this.score,
                over: this.over,
                won: this.won
            };
            this.gameState = obj;
            for(let i = 0; i < this.winObservers.length; i++) {
                let temp = this.winObservers[i];
                temp(this.gameState);
            }
        }
        if(!this.board.includes(0)) {
            let over = true;
            for(let i = 0; i < this.board.length; i++) {
                if(i+1 < this.board.length 
                    && (i+1) % this.width != 0
                    && this.board[i] == this.board[i+1]) {
                    over = false;
                    this.over = false;
                } else if(i+this.width < this.board.length && this.board[i] == this.board[i+this.width]) {
                    over = false;
                    this.over = false;
                }
            }
            if(over) {
                this.over = true;
                for(let i = 0; i < this.loseObservers.length; i++) {
                    this.loseObservers[i](this.gameState);
                }
            }
        }
        let obj = {
            board: this.board,
            score: this.score,
            over: this.over,
            won: this.won
        }
        
        this.gameState = obj;
        return obj;
    }

    loadGame(gameState) {
       this.board = gameState.board;
       this.width = Math.sqrt(gameState.board.length);
       this.height = Math.sqrt(gameState.board.length);
       this.score = gameState.score;
       this.won = gameState.won;
       this.over = gameState.over;
    }

    onMove(callback) {
        this.moveObservers.push(callback);
    }

    onWin(callback) {
        this.winObservers.push(callback);
    }

    onLose(callback) {
        this.loseObservers.push(callback);
    }

    getGameState() {
        let obj =  {
            board: this.board,
            score: this.score,
            won: this.won,
            over: this.over
        };

        return obj;
    }

    toString() {
        return this.board.toString() + "\n" 
        + this.score.toString() + "\n" 
        + this.won.toString() + "\n"
        + this.over.toString() + "\n";
    }
}