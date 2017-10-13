'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    var divBox = $('#box');
    
    divBtn1.on('click', function () {
        divBox.removeClass();
        divBox.addClass('box_red');
        divBox.text('red');
    });
    divBtn2.on('click', function () {
        divBox.removeClass();
        divBox.addClass('box_green');
        divBox.text('green');
    });
    divBtn3.on('click', function () {
        divBox.removeClass();
        divBox.addClass('box_blue');
        divBox.text('blue');
    });
    
});
