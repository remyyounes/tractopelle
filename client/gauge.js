$.widget( "cockpit.gauge", {
  // Default options.
  options: {
    value: 0
  },
  _create: function() {
    this.element.addClass( "gauge" );
    this.$s = $("<div style='height: 100px;'/>").appendTo(this.element);
    this.$s.slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 255,
      value: 0,
      slide: $.proxy(this.handleSlide,this)
    });
    this.element.append(this.$s);
    this.refresh();
  },
  handleSlide: function( event, ui ) {
    console.log( 'slide', ui.value );
    this._setOption( "value", ui.value );
  },
  refresh: function(){
    // this.$s.height(this.options.value);
  },
  _setOption: function( key, value ) {
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
  setClickedValue: function(evt){
    var $t = $(evt.target);
    var gaugeValue = $t.height() - evt.offsetY;
    console.log('setClickedValue', gaugeValue);
    this._setOption( "value", gaugeValue);
  }
});

