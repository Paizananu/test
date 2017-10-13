'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR!');
    divBase.append(divButton);

    // ---------------------------
    // EVENT
    // ---------------------------
     var click = 0;
    divButton.on('click', function(){
          divButton.text('久米先生');
         
         click = click + 1 ;
         divButton.text(click)
         
        
        divButton.css({"background-color": "#ffff00"});
        if(click == 1){
            divButton.css({"background-color":"#0000ff"});
        }
        else if (click == 2){
            divButton.css({"background-color":"#00ff00"});
        }
        else {
            divButton.css({"background-color":"#ff0000"});
            click = 0;
        }
    });
    
});
