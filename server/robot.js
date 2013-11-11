// SERVER CODE FOR ROBOT
var Robot = function(leftMotor, rightMotor){
  this.lm = leftMotor;
  this.rm = rightMotor;
  this.speed = 255;
};

Robot.prototype = {
  left: function(){
    this.lm.reverse(this.speed);
    this.rm.forward(this.speed);
  },
  forward: function(){
    this.lm.forward(this.speed);
    this.rm.forward(this.speed);
  },
  right: function(){
    this.lm.forward(this.speed);
    this.rm.reverse(this.speed);
  },
  reverse: function(){
    this.lm.reverse(this.speed);
    this.rm.reverse(this.speed);
  },
  stop: function(){
    this.lm.stop();
    this.rm.stop();
  },
  setSpeed: function(speed){
    this.speed = speed;
  }
};


Meteor.methods({
  left: function () {
    robot.left();
    return "returning left";
  },
  forward: function () {
    robot.forward();
    return "returning forward";
  },
  right: function () {
    robot.right();
    return "returning right";
  },
  reverse: function () {
    robot.reverse();
    return "returning reverse";
  },
  stop: function () {
    robot.stop();
    return "returning stop";
  },
  setSpeed: function(speed) {
    robot.setSpeed(speed);
    return "returning setSpeed " + speed;
  }
});



var five = Npm.require("//Applications/MAMP/htdocs/johnny-five/lib/johnny-five.js");
var board = new five.Board();
var robot, leftMotor, rightMotor;
board.on("ready", function() {
  leftMotor = new five.Motor([3, 12]);
  rightMotor = new five.Motor([11, 13]);
  robot = new Robot(leftMotor, rightMotor);
});
