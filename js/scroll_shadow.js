function get_id(id) {
         return document.getElementById(id);
      }

      
   var header_height = 0;
            window.addEventListener("scroll", function(){ 
               var scroll_pos = window.pageYOffset ; 

             

               if (scroll_pos != header_height){
               	get_id("bar_menu").style.boxShadow = " 0 2px 4px rgba(69, 90, 100, 0.2)";
               	get_id("bar_menu").style.background = "white";
                  
               } else {
               	get_id("bar_menu").style.boxShadow = " 0 2px 4px rgba(246, 249, 252, 0)";
               	get_id("bar_menu").style.background = "none";
                    
               }
                
            }, false);