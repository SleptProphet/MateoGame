var myGamePiece;
var a = 0;
var b = 0;
var c = 0;
var k = 0;
var myBackground;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1100;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e){
            console.log(e);
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        })
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function updateGameArea() {
    // && myGamePiece.y == rockbottom
    myGameArea.clear();

    if (myGameArea.keys && myGameArea.keys[32]) {
        a=4;

    } else{ a = 0}
    if (myGameArea.keys && myGameArea.keys[37]) {
        b+=1;

    }else {
        b=0;
    }
    if (myGameArea.keys && myGameArea.keys[39]) {
        c+=1;

    }else {
        c = 0;
    }
    // if (myGameArea.keys && myGameArea.keys[38]) {
    //     d+=1;
    //
    // }else d=0;
    // if (myGameArea.keys && myGameArea.keys[40]) {
    //     f+=1;
    //
    // }else f=0;

    myGamePiece.speedY = -a;
    myBackground.speedX += .3*(1/(1+Math.pow(100,-b)));
    myBackground.speedX += -.3*(1/(1+Math.pow(100,-c)));
    // myGamePiece.speedY += -2*(1/(1+Math.pow(12,-d)));
    // myGamePiece.speedY += 2*(1/(1+Math.pow(12,-f)));
    myBackground.newPos();
    myBackground.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function startGame() {
    myGameArea.start();
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myBackground = new component(1100,600,"images/trees.jpg", 0 , 0,"background");
    myGamePiece = new character(100, 60, "images/sprite.gif", 10, 120);
}

