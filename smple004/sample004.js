'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR!');

    var displayBox= $("<div>", { "id": "small", "class": "small"});
    displayBox.text('SMALL BOX');
    
    var displayBox1= $("<div>", { "id": "small1", "class": "small1"});
    displayBox1.text('久米先生');
    
    var displayBox2= $("<div>", { "id": "small2", "class": "small2"});
    displayBox2.text('渡辺先生');
    
    var displayBox3= $("<div>", { "id": "small3", "class": "small3"});
    displayBox3.text('大久保先生');
    
    divBase.append(divButton);
    divBase.append(displayBox);
    divBase.append(displayBox1);
    divBase.append(displayBox2);
    divBase.append(displayBox3);

    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        
        divButton.css({"background-color": "#0000ff","color": "#00ffff"});
    });
    
    displayBox.on('click', function(){
        
        displayBox.css({"background-color": "#ff0000" , "color": "#00ff00"});
        
    });
    
});
