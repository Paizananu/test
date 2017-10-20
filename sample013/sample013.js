'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    var display1 = $('#display1');
    var display2 = $('#display2');
    
    divBtn1.on('click', function () {
          divBtn1.text('10');
     });
    
    // divBtn2.on('click', function () {
    //     divBtn2.text('99');
    // });
     divBtn3.on('click',function() {
         alert(Number(divBtn1.text()) + Number(divBtn2.text()));
         alert((divBtn1.text()) + (divBtn2.text()));
         
    // divBtn3.on('click', function () {
        display1.text(Number(divBtn1.text()) + Number(divBtn2.text()));
        display2.text((divBtn1.text()) + (divBtn2.text()));
        
    });

});
