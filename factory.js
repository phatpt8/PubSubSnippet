(function(w, d, undefined){
  var PubSub = function(){
    handlers: {}
  }
  
   PubSub.prototype.on = function(evt, handler){
    if (!(evt in this.handlers)){
      this.handlers[evt] = [];
    }
    this.handlers[evt].push(handler);
    return this;
  }
  
  PubSub.prototype.emit = function(evt) {
  	var handlerArgs = Array.prototype.slice.call(arguments, 1);
  	for (var i = 0; i < this.handlers[evt].length; i++) {
  		this.handlers[evt][i].apply(this, handlerArgs);
  	}
  	return this;
  }
  
  PubSub.prototype.once = function(evt, handler) {
    var _self = this;
    _self.on(evt, function t(){
      _self.removeHandler(evt, t);
      handler.apply(this, arguments);
    })
  }
  
  PubSub.prototype.removeHandler = function(evt, handler) {
    var target = this.handlers[evt];
    if (!target) return this;
    if (target === handler) delete this.handlers[evt];
    return this;
  }
  
  /* next update: remove handlers, attach one-time handler*/

})(window, document);
