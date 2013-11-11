// SERVER CODE FOR ROBOT
var Robot = function(leftMotor, rightMotor){
  this.lm = leftMotor;
  this.rm = rightMotor;
};

Robot.prototype = {
  left: function(){
    this.lm.reverse(255);
    this.rm.forward(255);
  },
  forward: function(){
    this.lm.forward(255);
    this.rm.forward(255);
  },
  right: function(){
    this.lm.forward(255);
    this.rm.reverse(255);
  },
  reverse: function(){
    this.lm.reverse(255);
    this.rm.reverse(255);
  },
  stop: function(){
    this.lm.stop();
    this.rm.stop();
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
