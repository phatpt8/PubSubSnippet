(function(w, d, undefined){
  var PubSub = {
    handlers: {}
  }
  
  PubSub.prototype.on = function(event, handler){
    if (!(event in this.handlers)){
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);
    return this;
  }
  
  PubSub.prototype.emit = function(event) {
  	var handlerArgs = Array.prototype.slice.call(arguments, 1);
  	for (var i = 0; i < this.handlers[event].length; i++) {
  		this.handlers[eventType][i].apply(this, handlerArgs);
  	}
  	return this;
  }

})(window, document);
