const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width:w, height:h } = canvas;

    // board width in tiles
const tileSpan = 100;
const tileMargin = 5;

let gameBoard = new Array(tileSpan);
let computeBoard = new Array(tileSpan);

let running = true;
let cyclesBeforeUpdate = 6;
let currentCycles = 0;

let mousePressed = false;

for (let x = 0; x < tileSpan; x++) {
    gameBoard[x] = new Array(tileSpan);
    computeBoard[x] = new Array(tileSpan);
    for (let y = 0; y < tileSpan; y++) {
        gameBoard[x][y] = false;
        computeBoard[x][y] = false;
        if (Math.random() < .05) gameBoard[x][y] = true;
    }
}

function drawBoard() {
    ctx.strokeStyle = "black";
    for (let x = 0; x < tileSpan; x++) {
        for (let y = 0; y < tileSpan; y++) {
            if (gameBoard[x][y] == false) {
                ctx.fillStyle = "#444";
            } else {
                ctx.fillStyle = "#FD0";
            }
            let xStart = x*tileMargin;
            let yStart = y*tileMargin;
            ctx.fillRect(xStart,yStart,tileMargin,tileMargin);
        }
    }    
}

function updateBoard() {
    for (let x = 0; x < tileSpan; x++) {
        for (let y = 0; y < tileSpan; y++) {
            let touching = 0;

            if (x > 0) {
                if (y > 0) {
                    if (gameBoard[x-1][y-1] == true) touching++;
                }
                if (gameBoard[x-1][y] == true) touching++;
                if (y < tileSpan-1) {
                    if (gameBoard[x-1][y+1] == true) touching++;
                }
            }
            if (y > 0) {
                if (gameBoard[x][y-1] == true) touching++;
            }
            if (y < tileSpan-1) {
                if (gameBoard[x][y+1] == true) touching++;
            }

            if (x < tileSpan-1) {
                if (y > 0) {
                    if (gameBoard[x+1][y-1] == true) touching++;
                }
                if (gameBoard[x+1][y] == true) touching++;
                if (y < tileSpan-1) {
                    if (gameBoard[x+1][y+1] == true) touching++;
                }
            }

            computeBoard[x][y] = false;
            if (gameBoard[x][y] == true) {
                if (touching == 2 || touching ==3) {
                    computeBoard[x][y] = true;
                }
            }
            if (gameBoard[x][y] == false && touching == 3) {
                computeBoard[x][y] = true;
            }
        }
    }
    for (let x = 0; x < tileSpan; x++) {
        for (let y = 0; y < tileSpan; y++) {
            gameBoard[x][y] = computeBoard[x][y];
        }
    }
}

function loop(evt) {
    requestAnimationFrame(loop);
    drawBoard();
        
    if (running) {
        if (currentCycles >= cyclesBeforeUpdate) {
            updateBoard();
            currentCycles = 0;
        }
        currentCycles++;
    } else {
        if (mousePressed == true) {

        }
    }
}

loop();