//인트로 화면 사라지기 (고정))
$(document).ready(function () {
  $('#count').siblings().hide();
});




//카운트다운화면__아래랑 같이 묶여있음
$(function(){
    $('#click').click(function(){
            $('#count').fadeOut();
            $('#count').siblings().show();
        });



//카운트다운셋업
 // Set the date we're counting down to
 var countDownDate = new Date("Jan 5, 2199 15:37:25").getTime();
                
 // Update the count down every 1 second
 var x = setInterval(function() {
 
   // Get today's date and time
   var now = new Date().getTime();
 
   // Find the distance between now and the count down date
   var distance = countDownDate - now;
 
   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
   // Display the result in the element with id="demo"
   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

 
   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("demo").innerHTML = "EXPIRED";
   }
 }, 1000);

    });
  //코믹북설명

  $(document).ready(function () {
    console.log('wad')

    $('#comic-box-wrap #comic-box1').siblings('div').hide();
    $('#comic2').click(function(){
    $('#comic-box2').show();
		$('#comic-box2').siblings('div').hide();
        });

        $('#comic3').click(function(){
          $('#comic-box3').show();
          $('#comic-box3').siblings('div').hide();
              });

              $('#comic4').click(function(){
                $('#comic-box4').show();
                $('#comic-box4').siblings('div').hide();
                    });


                    $('#comic5').click(function(){
                      $('#comic-box5').show();
                      $('#comic-box5').siblings('div').hide();
                          });

                          $('#comic6').click(function(){
                            $('#comic-box6').show();
                            $('#comic-box6').siblings('div').hide();
                                });

                                $('#comic1').click(function(){
                                  $('#comic-box1').show();
                                  $('#comic-box1').siblings('div').hide();
                                      });

    });


