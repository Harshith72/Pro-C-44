

//Declare variables for game objects and behaviour indicators(FLAGS)
var canvas, backgroundImage;
var database;

var form;
var game, gameState;
var player, playerCount, allPlayers;

var car1, car2, car3, car4, cars;
var carImg1, carImg2, carImg3, carImg4;
var track, ground;

var carsAtFinishLine;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
    carImg1 = loadImage("images/car3.png");
    carImg2 = loadImage("images/car4.png");
    carImg3 = loadImage("images/car2.png");
    carImg4 = loadImage("images/car1.png");
    track = loadImage("images/track.jpg");
    ground = loadImage("images/ground.png");
}

function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);

    //initializing database object
    database = firebase.database();

}

//All modifications, changes, conditions, manipulations, actionscommands to be executed and checked, continuously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
    background("white");


}