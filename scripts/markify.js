//Implementing te library logic inside an IIFE to prevent variable conflicts and ensure 
//data privacy
;(function(global,$){
    if(!global.document){
        throw "Markify needs a window document to work with...";
    }
    //Function that shall be ultimately exposed to the outer world and would return an object
    var markify = function(selector,color){
        return new markify.init(selector,color);
    };

    //Permitted colors
    var colors = ["Blue","Red","Green","Orange","Brown"];

    //utilty functions that can be called by the outer world on the library's returned object
    markify.prototype = {
       validate : function(){
           if(colors.indexOf(this.color) === -1){
               throw "Invalid Color...";
           }       
       },
       markIt : function(){
         if(!$){
             throw "jQuery not loaded...";
         }      
        this.checkSelector();
         $(this.selector).css("backgroundColor",this.color);
         return this;
      },
      setText : function(text){
        var textVal = text || "Hello World";
        this.checkSelector();        
        $(this.selector).html(textVal);
        return this;
      },
      setColor : function(color){
          this.color = color;
          this.validate();
          return this;
      },
      checkSelector : function(){
        if(!this.selector){
            throw "DOM element not provided";
        }
      }
    };
   
    //function constructor that actually creates the object
    markify.init = function(selector,color){
        this.selector = selector;
        this.color = color || "Orange";
        this.checkSelector();
        this.validate();
    };

    markify.init.prototype = markify.prototype;

    //exposing the markify function to the global environment
    global.markify = global.m$ = markify;

}(this,jQuery));