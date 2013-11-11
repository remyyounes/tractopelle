var g;
if (Meteor.isClient) {

  $(document).on("ready", function(){
    g = $(".gauge").gauge({value: "20"})
    .bind( "gaugesetoption", function( event, data ) {
      console.log(data.option === "value");
        if(data.option === "value"){
          var speed = parseInt(data.current * 255 / 100);
          Meteor.call("setSpeed", speed, function(error, result){
            console.log('result',result); 
          });
        }
    });
    g.gauge( "option", "value", 100 );

  });

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
  };

}

if (Meteor.isServer) {

  // code to run on server at startup
  Meteor.startup(function () {
    // var robot = new Robot();
  });
}



