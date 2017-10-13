
'use strict';

$(function(){
    var $obj =[];
    var $divCalcPos = $("#calc");
    $number = $("<div>" , {"id": "number", "class": "number" });
    $divCalcPos.append($number);
    for (var i = 0; i <10; i++) {
        $num[i] = $("<div>" , {"id": "num" + ( i), "class": "num" + (i )});
        $num[i].text = (String(i));
        $number.append($num[i]);
    }
    //  $divbtn.text = ('1,2,3,4,5,6,7,8,9,0');
    

    // 
    // var $divCalcPos = $("#calc");
    // var s1=0;
    // var s2=0;
    // var check;
    
    // var $divBtn1 = $("<div>", { "id": "Btn1", "class": "Btn1"});
    // $divBtn1.text('7');

    // var $divBtn2 = $("<div>", { "id": "Btn2", "class": "Btn2"});
    // $divBtn2.text('8');
    
    // var $divBtn3 = $("<div>", { "id": "Btn3", "class": "Btn3"});
    // $divBtn3.text('9');
    
    // var $divBtn4 = $("<div>", { "id": "Btn4", "class": "Btn4"});
    // $divBtn4.text('.');
    
    // var $divBtn5 = $("<div>", { "id": "Btn5", "class": "Btn5"});
    // $divBtn5.text('+/-');
    
    // var $divBtn6 = $("<div>", { "id": "Btn6", "class": "Btn6"});
    // $divBtn6.text('BS');
    
    // var $divBtn7 = $("<div>", { "id": "Btn7", "class": "Btn7"});
    // $divBtn7.text('CE');
    
    // var $divBtn8 = $("<div>", { "id": "Btn8", "class": "Btn8"});
    // $divBtn8.text('AC');
    
    // var $divBtn9 = $("<div>", { "id": "Btn9", "class": "Btn9"});
    // $divBtn9.text('4');
    
    // var $divBtn10 = $("<div>", { "id": "Btn10", "class": "Btn10"});
    // $divBtn10.text('5');
    
    // var $divBtn11 = $("<div>", { "id": "Btn11", "class": "Btn11"});
    // $divBtn11.text('6');
    
    // var $divBtn12 = $("<div>", { "id": "Btn12", "class": "Btn12"});
    // $divBtn12.text('0');
    
    // var $divBtn13 = $("<div>", { "id": "Btn13", "class": "Btn13"});
    // $divBtn13.text('+');
    
    // var $divBtn14 = $("<div>", { "id": "Btn14", "class": "Btn14"});
    // $divBtn14.text('-');
    
    // var $divBtn15 = $("<div>", { "id": "Btn15", "class": "Btn15"});
    // $divBtn15.text('*');
    
    // var $divBtn16 = $("<div>", { "id": "Btn16", "class": "Btn16"});
    // $divBtn16.text('/');
    
    // var $divBtn17 = $("<div>", { "id": "Btn17", "class": "Btn17"});
    // $divBtn17.text('1');
    
    // var $divBtn18 = $("<div>", { "id": "Btn18", "class": "Btn18"});
    // $divBtn18.text('2');
    
    // var $divBtn19 = $("<div>", { "id": "Btn19", "class": "Btn19"});
    // $divBtn19.text('3');
    
    // var $divBtn20 = $("<div>", { "id": "Btn20", "class": "Btn20"});
    // $divBtn20.text('000');
    
    // var $divBtn21 = $("<div>", { "id": "Btn21", "class": "Btn21"});
    // $divBtn21.text('=');

    // var $divDisplay1 = $("<div>", { "id": "display1", "class": "display1"});
    // $divDisplay1.text('');
    
    // $divCalcPos.append($divBtn1);
    // $divCalcPos.append($divBtn2);
    // $divCalcPos.append($divBtn3);
    // $divCalcPos.append($divBtn4);
    // $divCalcPos.append($divBtn5);
    // $divCalcPos.append($divBtn6);
    // $divCalcPos.append($divBtn7);
    // $divCalcPos.append($divBtn8);
    // $divCalcPos.append($divBtn9);
    // $divCalcPos.append($divBtn10);
    // $divCalcPos.append($divBtn11);
    // $divCalcPos.append($divBtn12);
    // $divCalcPos.append($divBtn13);
    // $divCalcPos.append($divBtn14);
    // $divCalcPos.append($divBtn15);
    // $divCalcPos.append($divBtn16);
    // $divCalcPos.append($divBtn17);
    // $divCalcPos.append($divBtn18);
    // $divCalcPos.append($divBtn19);
    // $divCalcPos.append($divBtn20);
    // $divCalcPos.append($divBtn21);
    // $divCalcPos.append($divDisplay1);
 
      
    //EVENT
    var msg = '';
    var currentNumber = '';
    $divBtn1.on('click', function(){
         msg += $divBtn1.text();
          currentNumber += $divBtn1.text();
         $divDisplay1.text(msg);
        //  s1 = Number($divBtn1.text());
    });
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
    $divBtn2.on('click', function(){
        msg += $divBtn2.text();
        currentNumber += $divBtn2.text();
      $divDisplay1.text(msg);
        // s1 = Number($divBtn2.text());

    });
    $divBtn3.on('click', function(){
        currentNumber += $divBtn3.text();
        msg += $divBtn3.text();
      $divDisplay1.text(msg);

    });
    $divBtn4.on('click', function(){
         
        currentNumber += $divBtn3.text();
        msg += $divBtn4.text();
      $divDisplay1.text(msg);
    });
    $divBtn5.on('click', function(){
        msg += $divBtn5.text();
        currentNumber = '';
        if (check == '+/-'){
            msg = largest;
        } else if (check == '+'){
            msg = ans;sss
        } else if (check == '-'){
            msg = ans;
        }
        
      $divDisplay1.text(msg);
    });
    $divBtn6.on('click', function(){
    conslole.log($divBtn6.text());
    //conslole.log(msg);
        msg += $divBtn6.text();
    //conslole.log(msg);
        currentNumber = '';
        msg = s1;
    conslole.log(msg);
      //$divDisplay1.text(msg);
    //conslole.log($divDisplay1.text());
    });
    $divBtn7.on('click', function(){
        msg += $divBtn7.text();
　　　　currentNumber='';
　　　　msg = s1+check;
      $divDisplay1.text(msg);
    });
    $divBtn8.on('click', function(){
        msg += $divBtn8.text();
        msg = "";
        s1=0;
        s2=0;
        currentNumber = '';
    $divDisplay1.text(msg);
    }); 
    $divBtn9.on('click', function(){
        currentNumber += $divBtn9.text();
        msg += $divBtn9.text();
     $divDisplay1.text(msg);
    //   s1 = Number($divBtn9.text());

    });
    $divBtn10.on('click', function(){
        currentNumber += $divBtn10.text();
        msg += $divBtn10.text();
      $divDisplay1.text(msg);
    //   s1 = Number($divBtn10.text());

    });
    $divBtn11.on('click', function(){
        currentNumber += $divBtn11.text();
        msg += $divBtn11.text();
      $divDisplay1.text(msg);
        //  s1 = Number($divBtn11.text());

    });
    $divBtn12.on('click', function(){
        currentNumber += $divBtn12.text();
        msg += $divBtn12.text();
      $divDisplay1.text(msg);
    });
    $divBtn13.on('click', function(){
        s1 = Number(currentNumber);
        currentNumber = '';
        check = $divBtn13.text();
        msg += $divBtn13.text();
      $divDisplay1.text(msg);
      
      
    });
    $divBtn14.on('click', function(){
        s1 = Number(currentNumber);
        currentNumber = '';
        check = $divBtn14.text();
        msg += $divBtn14.text();
      $divDisplay1.text(msg);
    });
    $divBtn15.on('click', function(){
        s1 = Number(currentNumber);
        currentNumber = '';
        check = $divBtn15.text();
        msg += $divBtn15.text();
      $divDisplay1.text(msg);
    });
    $divBtn16.on('click', function(){
       s1 = Number(currentNumber);
        currentNumber = '';
        check = $divBtn16.text();
        msg += $divBtn16.text();
      $divDisplay1.text(msg);
    });
    $divBtn17.on('click', function(){
        currentNumber += $divBtn17.text();
        msg += $divBtn17.text();
      $divDisplay1.text(msg);
    //   s1 = Number($divBtn17.text());

    });
    $divBtn18.on('click', function(){
        currentNumber += $divBtn18.text();
        msg += $divBtn18.text();
      $divDisplay1.text(msg);
    //   s1 = Number($divBtn18.text());

    });
    $divBtn19.on('click', function(){
        currentNumber += $divBtn19.text();
        msg += $divBtn19.text();
      $divDisplay1.text(msg);
    //   s1 = Number($divBtn19.text());

    });
    $divBtn20.on('click', function(){
        currentNumber += $divBtn20.text();
        msg += $divBtn20.text();
      $divDisplay1.text(msg);
    });
    $divBtn21.on('click', function(){
        // var ans = s1 + s2;
        var ans = 0;
        s2 = Number(currentNumber);
        if (check == '+') {
            
            ans = s1 + s2
            
        } else if (check == '-'){
            ans = s1 - s2;
        }else if (check == '*'){
            ans = s2 * s1;
        }else if (check == '/'){
            ans = s1 / s2;
        }
        
        // s1 = ans;
        msg = ans;
        currentNumber = ans.toString();
        $divDisplay1.text(msg);
        //  msg += $divBtn21.text();
    });


   });
　　　　　　　　　　　　　　　　　　　　　　　  　　　　　　　　　　　　　　　



  







