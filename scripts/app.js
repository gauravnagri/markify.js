//sample code that uses the Markify.js library
$(document).ready(function(){
   $("#click").click(function(){
      var obj = m$("#demo");
      obj.setColor("Green").setText("Tested successfully...").markIt();
   });
});