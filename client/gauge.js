$.widget( "cockpit.gauge", {
  // Default options.
  options: {
    value: 0
  },
  _create: function() {
    this.element.addClass( "gauge" );
    this.$s = $("<div />").addClass("speed");
    this.element.append(this.$s);
    this.element.on('mousedown', $.proxy(this.setClickedValue, this));
    this.refresh();
  },
  refresh: function(){
    this.$s.height(this.options.value);
  },
  _setOption: function( key, value ) {
    if ( key === "value" ) {
      value = this._constrain( value );
    }
    this._super( key, value );
    this._trigger( "setOption", null, {
        option: key,
        current: value
    });
    this.refresh();
  },
  _setOptions: function( options ) {
    this._super( options );
    this.refresh();
  },
  _constrain: function( value ){
    value = Math.max(0, value);
    value = Math.min(100, value);
    return value;
  },
  setClickedValue: function(evt){
    var $t = $(evt.target);
    var gaugeValue = $t.height() - evt.offsetY;
    console.log('setClickedValue', gaugeValue);
    this._setOption( "value", gaugeValue);
  }
});

