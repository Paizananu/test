'use strict';

$(function(){
    var btn_area = $('#btn_area');
    var param1 = $('#param1');
    var ope = $('#ope');
    var param2 =$('#param2');
    //var display_area = $('#display_area');
    var result = $('#result');
    var clear = $('#clear');
  
    ope.on('click',function() {
   switch ($(this).text()) {
        case '+':
          $(this).text('-');
             break;
        case '-':
            $(this).text('*');
            
            break;
        case '*':
            $(this).text('/');
            break;
        case'/':
           $(this).text('+');
            break;
            default:
                $(this).text('+');
                break;
        }
    });

    result.on('click', function () {
        
        var p1 = Number(param1.val());
        var p2 = Number(param2.val());

        switch (ope.text()) {
            case '+':
                $(this).text(p1 + p2);
                break;
            case '-':
                $(this).text(p1 - p2);
                break;
            case '*':
                $(this).text(p1 * p2);
                break;
            case '/':
                $(this).text(p1 / p2);
                break;
            default:
                $(this).text('Error');
                break;
        }
    });

    clear.on('click', function() {
        init();
    });
    



    $(document).ready(init());

    function init() {
        (result.text('clear'));
        (param1.val('0'));
        (param2.val('0'));
        (ope.text('+'));
    }

});





      
   


