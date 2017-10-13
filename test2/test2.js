'use strict';

$(function(){
     var calc_area = $('#calc_area');
    var sign = $('#sign');
    var param = $('#param');
    //var ope = $('#ope');
    var calc = $('#calc');
    var result = $('#result');
    var clear = $('#clear');
    
    
     //var num = 0;
     
    sign.on('click',function(){
         switch ($(this).text()) {
        case '+':
          $(this).text('-');
             break;
        case '-':
            $(this).text('+');
            
            default:
                $(this).text('+');
                break;
        }
    });
    param.on('click', function(){
        var p1 = Number(param.text());
        $(this).text(p1 + 1);
    });
    calc.on('click', function(){
        if(sign.text()== '+'){
            result.text((Number(param.text()) * 3))
        } else{
          result.text((Number('-' + param.text()) * 3))
        }
    });
    clear.on('click' , function() {
        sign.text('+');
        param.text('0');
        result.text('0');
        
            
        
    });
    
});
