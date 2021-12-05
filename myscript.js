     document.onreadystatechange = function() {
         if (document.readyState !== "complete") {
             document.querySelector("body").style.visibility = "hidden";
             document.querySelector("#loader").style.visibility = "visible";
         } else {
             document.querySelector(
               "#loader").style.display = "none";
             document.querySelector(
               "body").style.visibility = "visible";
         }
     };

     $(document).ready(function(){

       $('a.terms').click(function(){
         window.open(this.href);
         return false;
       });

     });
