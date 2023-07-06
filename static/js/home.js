var nav_iem = document.getElementsByClassName('navitem');
var profile_item = document.getElementsByClassName('profile_item');
var submenu=document.getElementsByClassName('profile_sub_menu');
var prof_item = document.getElementsByClassName('item');
var booking_message = document.getElementsByClassName('booking_message');

var prof_item_all = document.querySelectorAll('.item');

var item_table = document.getElementsByClassName('item_table');

var profile_down_arrow = document.getElementById('profile_icon');


// function nav_item_bg_change(n){


//   if (n!==1){

//     profile_item[0].style.display="none";
//     submenu[0].style.display="none";  
//   }
//   else{
//     profile_item[0].style.display="flex";

//   }
  
// for (let i=0;i<nav_iem.length;i++){
//   if(i!==n){
//     nav_iem[i].style.background="";

//     if(i<3){

//       prof_item[i].style.background="";
//     }
       
//   }
//   else{
//     nav_iem[i].style.background="red";

    
//   }
// }
 
// }




function nav_item_bg_change(n){


  if (n!==1){

    profile_item[0].style.display="none";
    submenu[0].style.display="none";  
  }

  else{

    if(nav_iem[n].style.background===""){

      nav_iem[n].style.background="red";
      profile_item[0].style.display="flex";
      profile_down_arrow.classList.remove('fa-caret-down');
      profile_down_arrow.classList.add('fa-caret-up');

      
    }
    else if(nav_iem[n].style.background==="red"){

      nav_iem[n].style.background="";
      profile_item[0].style.display="none";
      submenu[0].style.display="none"; 
      
      profile_down_arrow.classList.add('fa-caret-down');
      profile_down_arrow.classList.remove('fa-caret-up');

     
    }
  }
  
  
for (let i=0;i<nav_iem.length;i++){
  if(i!==n){
    nav_iem[i].style.background="";

    if(i<3){

      prof_item[i].style.background="";
    }
       
  }
 
}
 
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
 
}

var bg = document.getElementsByClassName('gallery_image_bg');
var gal_img =document.getElementsByClassName('gallery_images'); 

function img_bg_rotate(){

 
  bg[0].setAttribute('style','animation:img_bg_rotate 1s ease both;background:rgba(0,0,0,1)');
  gal_img[0].setAttribute('style','animation:img_rotate 1s ease both');
  
}

function img_bg_normal(){
  bg[0].setAttribute('style','animation:img_bg_back 1s ease both');
  gal_img[0].setAttribute('style','animation:img_rotate_back 1s ease both');

}

var booking_show = document.getElementsByClassName('book_now_window');
var booking_button = document.getElementsByClassName('booknow');


function show_booknow_window(){

  booking_button[0].style.display="none";

  booking_show[0].style.display="grid";

  // if (booking_message){
  // booking_message[0].style.display="";}
}

function close_booking_window(){

  booking_button[0].style.display="block";

  booking_show[0].style.display="none";

}




var prof_item = document.getElementsByClassName('item');

var submenuitem = document.getElementsByClassName('submenu_item');

var booking_main_nav = document.getElementsByClassName('booking_details_navbar');

var booking_sort_submenu =  document.getElementsByClassName('booking_sort_submenu');
var booking_sort_submenu2 = document.getElementsByClassName('booking_sort_submenu2');
var booking_navitem = document.getElementsByClassName('booking_navitem');


function show_prof_submenu(n){


  item_table[0].style.display="none";
  booking_navitem[0].setAttribute('style','background:;border:');
  booking_navitem[1].setAttribute('style','background:;border:');

if (n!==2){
booking_main_nav[0].style.display="none";
booking_sort_submenu[0].style.display="none";
booking_sort_submenu2[0].style.display="none";
}

else{
booking_main_nav[0].style.display="flex";
item_table[0].style.display="flex";
}

  submenu[0].style.display='grid';

  for (let i=0; i<prof_item.length;i++){

    if (i!==n){

      prof_item[i].style.background="";

      if(i<2){

        submenuitem[i].style.display="none";
      }
      
    }
    else{
      prof_item[i].style.background="red";

      if(i<2){

        submenuitem[i].style.display="grid";
      }
      
    }
  }
  }




function show_submenu(){

if(booking_sort_submenu[0].style.display==="flex"){
booking_sort_submenu[0].style.display="none";
booking_navitem[0].style.background="";
booking_navitem[0].style.border="";


}
else{
booking_sort_submenu[0].style.display="flex";
booking_navitem[0].setAttribute('style','background:rgb(4, 94, 102);border-radius:5px;border:1px solid white;');
booking_navitem[1].style.background="";
booking_navitem[1].style.border="";
booking_sort_submenu2[0].style.display="none";
}
}


function show_submenu2(){

if(booking_sort_submenu2[0].style.display==="grid"){
booking_sort_submenu2[0].style.display="none";
booking_navitem[1].style.background="";
booking_navitem[1].style.border="";



}
else{
booking_sort_submenu2[0].style.display="grid";
booking_navitem[1].setAttribute('style','background:rgb(4, 94, 102);border-radius:5px;border:1px solid white;');
booking_navitem[0].style.background="";
booking_navitem[0].style.border="";
booking_sort_submenu[0].style.display="none";
}
}






/*function when reload*/

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}



// $(document).ready(function(){

// $('.cancel_button').click(function(){






// $.ajax({

// url:'cancel_booking',
// type:'GET',
// data:{'id':$(this).val()},


// success:function(response){

// if (response.success){

//   var received_data = JSON.parse(response);

//   $('.submenu_item item_table').html('{{user_booking|safe}}')
// $('.cancel-message').show();

// }}




// });
// });
// });

$(document).ready(function() {


  $('#show_booking_details').click(function(){

    $.ajax({
      url: 'show_booking',
      type: 'GET',
      
      success: function(data) {
  
        var data_received = data.bookingDetails;

        
        console.log(data.error);
  
        
        if (data_received.length > 0) {


          $('.booking_show_table tbody').empty();
  
          
  
          var tableRows = '';
          data_received.forEach(function(item) {
            var btn = $('<button>', {
              text: 'Cancel',
              class: 'cancel_button',
              value:item.id
            }).prop('outerHTML');
            tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Token+'</td><td>'+btn+'</td></tr>';
          });
          $('.booking_show_table tbody').append(tableRows);
        } else {
          $('.booking_show_table').hide();
          $('.no_booking_message').show();
        }
      }
    });

  });
 
});


// booking Details sort by latest


$(document).ready(function(){

  $('#latest').click(function(){

    $(this).css({'background-color':'rgb(3, 75, 90)',
  'border':'1px solid white'
  });

  $('#oldest').css({'background':'',
  'border':''
  });



    $.ajax({

      url:'booking_latest',
      type:'GET',
      dataType:'json',
      success:function(data){

       var received_data = data.bookingDetails


        if(received_data.length>0){
          $('.booking_show_table tbody').empty();
          var tableRows = '';

          received_data.forEach(function(item){
            var btn = $('<button>', {
              text: 'Cancel',
              class: 'cancel_button',
              value:item.id
            }).prop('outerHTML');
            tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Token+'</td><td>'+btn+'</td></tr>';

            $('.booking_show_table tbody').html(tableRows);
           
          })

        }
  
       

        
      }
    })


  })

 
})


// booking details sort by oldest



$(document).ready(function(){

  $('#oldest').click(function(){

    $(this).css({'background-color':'rgb(3, 75, 90)',
    'border':'1px solid white'
    });
    $('#latest').css({'background':'',
  'border':''
  });

    $.ajax({

      url:'booking_oldest',
      type:'GET',
      dataType:'json',
      success:function(data){

        var received_data = data.bookingDetails

        if(received_data.length>0){

          var tableRows = '';

          $('.booking_show_table tbody').empty();
          
          received_data.forEach(function(item){

            var btn = $('<button>', {
              text: 'Cancel',
              class: 'cancel_button',
              value: item.id
            }).prop('outerHTML');

            tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Token+'</td><td>'+btn+'</td></tr>';

          })

          $('.booking_show_table tbody').html(tableRows);

        } 
        
      }
    })

  })

})




$(document).ready(function(){
  // Attach click event listener to parent element
  $('table.booking_show_table').on('click', '.cancel_button', function(){

    var id = $(this).val()
    console.log(id)

    $('.no').click(function(){

      $('.cancel_alert').css('display','none')
    });

    $('.cancel_alert').css('display','flex')

    $('.yes').click(function(){

      $.ajax({
        url: 'cancel_booking/' + id,
        type: 'GET',
        success: function(data) {
  
          var tableRows = '';


         
          $('.booking_cancelled_message').css('display','flex');

          setTimeout(function(){

            $('.booking_cancelled_message').hide();

          },2000);
  
          if(data.length>0){
  
            $('.booking_show_table tbody').empty()
            data.forEach(function(item){
  
              var btn = $('<button>',{
  
                text:'Cancel',
                class:'cancel_button',
                value:item.id
              }).prop('outerHTML');
  
              tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Token+'</td><td>'+btn+'</td></tr>';
            })
            $('.booking_show_table tbody').html(tableRows);
            $('.cancel_alert').css('display','none');
           
          }
  
          else{
  
            $('.booking_show_table').hide();
            $('.no_booking_message').show();

            $('.cancel_alert').css('display','none');
          }
        
        },
        error: function(xhr, status, error) {
          // handle error
        }
      });


    });
  });
   
   
 
});


$(document).ready(function(){

  $('.clear_all_no').click(function(){
    $('.booking_sort_submenu2').hide()

  })

  $('.clear_all_yes').click(function(){

    $.ajax({

      url:'user_clear_booking',
      type:'GET',
      dataType:'json',
      success:function(data){

        console.log(data);
        $('.booking_sort_submenu2').hide()
        $('.booking_show_table').hide();
        $('.no_booking_message').show();
      }

    })

  })
})


$(document).ready(function(){



$('#close').click(function(){

  $('.profile_sub_menu').hide();

 $('.item').css('background','')
 
});
});


// Add smooth scrolling to all links
$(".header_nav_item").on("click", function(event) {

  $(this).css('background','red')
 
 
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top
    }, 200, function(){
      window.location.hash = hash;
    });
  }
});


// disable past date of input type date element



const today = new Date().toISOString().split('T')[0];
document.getElementById('choose_booking_date').setAttribute('min',today)






// gallery slider

let GalleryslideIndex = 1;
showSlidesGallery(GalleryslideIndex);

function plusSlidesGallery(n) {
  showSlidesGallery(GalleryslideIndex += n);
}

function showSlidesGallery(n) {
  let i;
  let slide = document.getElementsByClassName("image1");
  if (n > slide.length) {GalleryslideIndex = 1}
  if (n < 1) {GalleryslideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[GalleryslideIndex-1].style.display = "block";


}


// change username and password



$(document).ready(function(){



  // change username

  $('#change_username_form').submit(function(event){

    event.preventDefault();

    var form = $(this);

    var url = form.attr('action');

    var formData = form.serialize();

    $.ajax({

      url:url,
      type:'POST',
      data : formData,
      success:function(response){

        var success_message = response.success_message;

        var invalid_message = response.invalid_message;

        var error = response.error;


        if (success_message){

          form[0].reset()

          var icon = $('<img>',{

            src:'static/icons/tick_mark.png',
            class:'tick_mark'
          });


          $('.UsernamePword_invalid_message').addClass('UsernamePword_update_message');

          $('.UsernamePword_invalid_message').removeClass('UsernamePword_invalid_message');



          $('.UsernamePword_update_message').text(success_message);

          $('.UsernamePword_update_message').append(icon);



          $('.UsernamePword_update_message').css('display','flex');

          setTimeout(function(){
            $('.UsernamePword_update_message').hide();

          },2000);


        }


        else if (invalid_message){

          console.log(invalid_message)


          var icon = $('<img>',{

            src:'static/icons/close_mark.png',
            class:'tick_mark'
          });


          $('.UsernamePword_update_message').addClass('UsernamePword_invalid_message');

          $('.UsernamePword_update_message').removeClass('UsernamePword_update_message');


          $('.UsernamePword_invalid_message').text(invalid_message);

          $('.UsernamePword_invalid_message').append(icon);

          $('.UsernamePword_invalid_message').css('display','flex');



          

          

          
          setTimeout(function(){
            $('.UsernamePword_invalid_message').hide();

          },2000);

        }



      
      }
    });

  });




  $('#change_password_form').submit(function(event){

    event.preventDefault();

    var form2 = $(this);

    var url = form2.attr('action');

    var formData2 = form2.serialize();

    $.ajax({

      url:url,
      type:'POST',
      data : formData2,
      success:function(response){

        var success_message = response.success_message;

        var invalid_message = response.invalid_message;

        var error = response.error;


        if (success_message){

          form2[0].reset()

          var icon = $('<img>',{

            src:'static/icons/tick_mark.png',
            class:'tick_mark'
          });


          $('.UsernamePword_invalid_message').addClass('UsernamePword_update_message');

          $('.UsernamePword_invalid_message').removeClass('UsernamePword_invalid_message');



          $('.UsernamePword_update_message').text(success_message);

          $('.UsernamePword_update_message').append(icon);



          $('.UsernamePword_update_message').css('display','flex');

          setTimeout(function(){
            $('.UsernamePword_update_message').hide();

          },2000);


        }


        else if (invalid_message){

          console.log(invalid_message)


          var icon = $('<img>',{

            src:'static/icons/close_mark.png',
            class:'tick_mark'
          });


          $('.UsernamePword_update_message').addClass('UsernamePword_invalid_message');

          $('.UsernamePword_update_message').removeClass('UsernamePword_update_message');


          $('.UsernamePword_invalid_message').text(invalid_message);

          $('.UsernamePword_invalid_message').append(icon);

          $('.UsernamePword_invalid_message').css('display','flex');    

          
          setTimeout(function(){
            $('.UsernamePword_invalid_message').hide();

          },2000);

        }
      
      }
    });


  });
 
  
});






// booking 


$(document).ready(function(){

  $('#booking_form').submit(function(event){

    event.preventDefault();

    var form = $(this);

    var url = form.attr('action');

    var formData = form.serialize();

    $.ajax({

      url:url,

      type:'POST',

      data:formData,

      success: function(response){


        var successMessage = response.booking_message;

        var slotFull = response.slot_full;

        var slotClosed = response.slot_closed;

       if (successMessage){

        // form[0].reset();

        var icon = $('<img>',{

          src:'static/icons/tick_mark.png',

          class:'tick_mark'
        });


        $('.booking_fail_message').addClass('booking_success_message');

        $('.booking_fail_message').removeClass('booking_fail_message');

        $('.booking_success_message').text(successMessage);
       

        $('.booking_success_message').append(icon);

        $('.booking_success_message').css('display','flex');


        setTimeout(function(){

          $('.booking_success_message').hide();
        },2000);


       }


       else if (slotFull){

        var icon = $('<img>',{

          src:'static/icons/close_mark.png',

          class:'tick_mark'
        });


        $('.booking_success_message').addClass('booking_fail_message');

        $('.booking_success_message').removeClass('booking_success_message');

        $('.booking_fail_message').text(slotFull);
       

        $('.booking_fail_message').append(icon);

        $('.booking_fail_message').css('display','flex')



        setTimeout(function(){

          $('.booking_fail_message').hide();
        },2000);

       }



       else if (slotClosed){

        var icon = $('<img>',{

          src:'static/icons/close_mark.png',

          class:'tick_mark'
        });


        $('.booking_success_message').addClass('booking_fail_message');

        $('.booking_success_message').removeClass('booking_success_message');

        $('.booking_fail_message').text(slotClosed);
       

        $('.booking_fail_message').append(icon);

        $('.booking_fail_message').css('display','flex')



        setTimeout(function(){

          $('.booking_fail_message').hide();
        },2000);

       }


       

      }



    


    });

  });

});