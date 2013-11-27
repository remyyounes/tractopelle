if (Meteor.isClient) {

  // SETUP GAUGES
  $(document).on("ready", function(){
    $(".motorGauges div").gauge({value: "50"}).bind( "gaugesetoption", gaugeChangeHandler );
  });

  // ON GAUGECHANGE SEND ACTION TO ROBOT
  var gaugeChangeHandler = function( event, data ) {
    if(data.option === "value"){
      var motor = $(event.target).hasClass("left") ? 'left':'right';
      var speed = (data.current - (255/2)) * 2;
      var dir = speed < 0 ? 0 : 1;
      speed = Math.abs(speed);
      Meteor.call("setMotor", motor, speed, dir, function(error, result){
        console.log('result',result); 
      });
    }
  }

  // ONKEYDOWN SEND ACTION TO ROBOT
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
    });

    // ONKEYUP STOP ROBOT
    $(window).on('keyup', function(e){
      Meteor.call('stop', function(error, result){
        console.log('result',result); 
      });
    });

  };

}

if (Meteor.isServer) {

  // code to run on server at startup
  Meteor.startup(function () {
    // var robot = new Robot();
  });
}



