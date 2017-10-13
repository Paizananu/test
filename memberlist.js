

(function () {

    'use strict';

    // =============================================
    // EVENT:create.submit
    // =============================================
    kintone.events.on('app.record.create.submit', function(event) {
        var record = event.record;
    if (record.check.value == 'on') {
        record.special_name.value ='*' + record.name.value;
    }else {
        record.special_name.value = record.name.value;
        
    }
    var hobby = '';
    for (var i = 0; i < record.hobby.value.length; i++){
        hobby += (record.hobby.value)[i];
        hobby += ',';
    
    }
    record.memo.value = '[hobby]' + '\n'
                        + hobby +'\n'
                        + '[job]' + '\n'
                        + record.job.value + '\n';
    
        return event;
        });

  
    // =============================================
    // EVENT:edit.submit
    // =============================================
    kintone.events.on('app.record.edit.submit', function(event) {
        var record = event.record;
    if (record.check.value == 'on') {
        record.special_name.value ='*' + record.name.value;
    }else {
        record.special_name.value = record.name.value;
        
    }
    var hobby = '';
    for (var i = 0; i < record.hobby.value.length; i++){
        hobby += (record.hobby.value)[i];
        hobby += ',';
    
    }
    record.memo.value = '[hobby]' + '\n'
                        + hobby +'\n'
                        + '[job]' + '\n'
                        + record.job.value + '\n';
        return event;
        });
        
         // =============================================
    // EVENT:detail.show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        var record = event.record;
        
        // ---------------------------
        // SET BMI
        // ---------------------------
        
        
        var $spBmi = $(kintone.app.record.getSpaceElement("sp_bmi"));
        
        var $spanBmi = $("<span>",{ id : "span_bmi"});
        
        var height = Number(record.height.value);
        var weight = Number(record.weight.value);
        
        var bmi = weight /　((height /100) * (height/100));
        
        $spanBmi.text(bmi);
        
        $spBmi.append($spanBmi)
        
        
 
        
        // ---------------------------
        // SET BMI COLOR
        // ---------------------------
        if ( bmi < 18.5) {
            $spanBmi.css('color', '#0033ff');
        } else if (18.5 <= bmi && bmi < 25 ) {
            $spanBmi.css('color', '#00ff44');
        } else if (25 <= bmi && bmi < 30 ) {
            $spanBmi.css('color', '#bbff00');
        } else if (30 <= bmi && bmi < 35 ) {
            $spanBmi.css('color', '#ffff00');
        } else if (35 <= bmi && bmi < 40 ) {
            $spanBmi.css('color', '#ff0088');
        } else if (40 <= bmi ) {
            $spanBmi.css('color', '#ff0000');
        } else {
            $spanBmi.css('color', '#00000');
        }

        $spanBmi.addClass('bmi_law');
      
        
        return event;
    });
        
    


    kintone.events.on('app.record.index.show', function(event) {
    var records = event.records;
   
    var elGender = kintone .app.getFieldElements('gender');
    
    for (var i = 0; i <elGender.length; i++) {
        var record = records[i];
        
        switch (record.gender.value) {
            case 'male':
                elGender[i].style.color = '#0000ff';
                break;
            case 'female':
                elGender[i].style.color = '#ff0000';
                break;
            default:
            elGender[i].style.color = '#00ff00';
                break;
            
        }
    }
    
         
    
    return event;
    
    });
  
        
})();
   