



if (Meteor.isClient) {

  Template.touchMotors.events({
    'click .gauge' : function (e) {
      var $t = $(e.target);
      // gaugeVale: offset of click relative to .gauge height
      var gaugeValue = $t.height() - e.offsetY;
      $t.find(".speed").height(gaugeValue);
    }
  });

  Template.touchMotors.speed = function () {
    console.log('speed', this.speed);
    return this.speed;
  };


  Template.keypad.rendered = function(){
    $(window).on('keydown', function(e){
      switch(e.which){
        case 37:
          Meteor.call('left', function(error, result){
            console.log('result',result); 
          });
          break;
        case 38:
          Meteor.call('forward', function(error, result){
            console.log('result',result); 
          });
          break;
        case 39:
          Meteor.call('right', function(error, result){
            console.log('result',result); 
          });
          break;
        case 40:
          Meteor.call('reverse', function(error, result){
            console.log('result',result); 
          });
          break;
      }
      console.log("key", e.which);
    });
    $(window).on('keyup', function(e){
      Meteor.call('stop', function(error, result){
        console.log('result',result); 
      });
    });
  }

}

if (Meteor.isServer) {

  // code to run on server at startup
  Meteor.startup(function () {
    // var robot = new Robot();
  });
}

