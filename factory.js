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
  
  /* next update: remove handlers, attach one-time handler*/

})(window, document);
