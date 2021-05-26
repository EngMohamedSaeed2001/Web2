$(function(){
    'use strict';
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'

        
    });
    
    $('#arrow').click(function () {
        $("html, body").animate({ scrollTop:$(".header").height() }, 1000);  
    });

    $('#b').click(function(){
    
    $('#l').toggle(0);
    $(this).hide();
    $("#a").show();
        
    });

    $('#a').click(function(){
    
        $('#l').toggle(0);
        $(this).hide();
        $("#b").show();
            
        });

    var counter= 0;    
    var content=["Lorem ipsum dolor sit amet,mbnsjkj sed do eiusmod tempor","jghfgg ut labore et dolore magna aliqua.","jghfgg ut labore et dolore magna aliqua. "];
    var name=["Abdo","Islam","Mohamed Samir"];
    var img=["WhatsApp Image 2020-06-28 at 12.38.07 PM.jpeg","WhatsApp Image 2020-06-28 at 12.34.51 PM.jpeg","WhatsApp Image 2020-06-28 at 12.34.11 PM.jpeg"];
     
    $("#r").click(function(){
    $("#f").fadeIn(500);
    
        if( counter == content.length -1)
        {
            console.log("yes");
        }
        else{
            counter ++;
            $("#p").text(content[counter]);
            $("#h").text(name[counter]);
            
            if( counter == content.length -1)
             {
                $("#r").fadeOut(500);
             }
        }

    });

    $("#f").click(function(){
        $("#r").fadeIn(500);
        
            if( counter == 0)
            {
                console.log("yes");
            }
            else{
                counter --;
                $("#p").text(content[counter]);
                $("#h").text(name[counter]);
    
                if( counter == 0)
                 {
                    $("#f").fadeOut(500);
                 }
            }
    
        });
        
});