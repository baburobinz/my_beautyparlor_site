var nav_item = document.getElementsByClassName("nav-item");

var profile_sub = document.getElementsByClassName("profile-submenu");

var uploads = document.getElementsByClassName("uploads");

var content = document.getElementsByClassName("content");

var profile_submenu = document.getElementsByClassName("submenu-item");

var sort_submenu = document.getElementsByClassName("sort-submenu");


var home_nav_item_item1 = document.getElementsByClassName("book-nav-item-item1");



var clear_submenu = document.getElementsByClassName("clear-submenu");


var booking_content = document.getElementsByClassName("booking-content");

var home_content2 = document.getElementsByClassName('home-content');

var upload_item = document.getElementsByClassName('upload-item');

nav_item[0].setAttribute('style','background:rgb(0, 204, 204);color:black;');

var clear_all = document.getElementsByClassName('clear_all');


var confirm_clear_all = document.getElementsByClassName('confirm_clear_all');

var sort_item = document.getElementsByClassName('sort-item')



function select(n){


    profile_submenu[0].setAttribute('style','background:;color:;');
    profile_submenu[1].setAttribute('style','background:;color:;');

    if(content){
        for(i=0;i<content.length;i++){

            content[i].style.display="none"
        }
        
    }
    
    
    booking_content[0].style.display="none";
    home_content2[0].style.display="none";

    uploads[0].style.display="none";
    profile_sub[0].style.display="none";
   
    upload_item[0].setAttribute('style','background:;color:;');
    upload_item[1].setAttribute('style','background:;color:;');
    upload_item[2].setAttribute('style','background:;color:;');

    


    if (nav_item[n].style.background==="rgb(0, 204, 204)"){

        nav_item[n].setAttribute('style','background:;color:;')
    }


    else{

        for(let i=0;i<nav_item.length;i++){

            if (i!=n){
    
                nav_item[i].setAttribute('style','background:;color:;')
            }
    
            else{
    
                nav_item[i].setAttribute('style','background:rgb(0, 204, 204);color:black;');
               
            }
        }
    }



    if (n==0){

        home_content2[0].style.display="flex";
        booking_content[0].style.display="none";
    }

    if (n===1){


        booking_content[0].style.display="none";
       if (nav_item[n].style.background==="rgb(0, 204, 204)"){

        profile_sub[0].style.display="flex"; 
        
       
      
            
        }

        else{

          
            profile_sub[0].style.display="none";

           
            
            
            

        }
        
    }


    else if (n===2){



        booking_content[0].style.display="flex";

        // if (nav_item[n].style.background==="white"){

           
        //     booking_content[0].style.display="flex";
            
            
        // }

        // else{

        //     booking_content[0].style.display="none";
        // }


    }

    else if (n===3){


        booking_content[0].style.display="none";

        if (nav_item[n].style.background==="rgb(0, 204, 204)"){

            
            uploads[0].style.display="flex";
            
            
        }

        else{

            uploads[0].style.display="none";

        }
    }
    
}






// function show(n){


//         for(let i=0;i<content.length;i++){

//             if (n!=i){

                

//                 profile_submenu[i].setAttribute('style','background:;color:;');
                
//                 content[i].style.display="none";

               

//                 if(n===0 || n===1){

//                     profile_submenu[n].setAttribute('style','background:white;color:black;border-radius:10px;');
//                 }

//                 else{

//                     for(i=0;i<upload_item.length;i++){

//                         if(n-2===i){
//                             upload_item[n-2].setAttribute('style','background:white;color:black;border-radius:10px;');

//                         }
//                         else{

//                             upload_item[i].setAttribute('style','background:;color:;');
//                         }
//                     }

                    
//                 }
//             }

//             else{
                
//                 content[i].style.display="grid";
//                 home_content2[0].style.display="none";
                
//             }
//         }
        
    
// }

function show_hide_home_menu(n){


   

    if(n===0){


        clear_submenu[0].style.display ="none";
        sort_submenu[0].style.display ="flex";
        home_nav_item_item1[1].setAttribute('style','background:;color:;');
    }

    else{
        sort_submenu[0].style.display ="none";
        clear_submenu[0].style.display ="flex";
        home_nav_item_item1[0].setAttribute('style','background:;color:;');
        sort_item[0].setAttribute('style','background:;color:;');
        sort_item[1].setAttribute('style','background:;color:;');
    }


    if (home_nav_item_item1[n].style.background===""){

        home_nav_item_item1[n].setAttribute('style','background:white;color:black;');

        
       
       
    }

        

    else{

        home_nav_item_item1[n].setAttribute('style','background:;color:;');
        clear_submenu[0].style.display ="none";
        sort_submenu[0].style.display ="none";
        
    
    }


}


function show(n){


    for(i=0;i<content.length;i++){

        if(n===i && n!=3){
            content[i].style.display="grid";

            if(n===0||n===1){

                profile_submenu[i].setAttribute('style','background:white;color:black;border-radius:10px;'); 

                if(i===0){

                    profile_submenu[1].setAttribute('style','background:;color:;'); 
                }
                else{
                    profile_submenu[0].setAttribute('style','background:;color:;');

                }
            }

            }

        else if(n===i && n===3){

            content[i].style.display="flex";

        }

        else{

            content[i].style.display="none";
        }
    }


    if(n!=0||n!=1){

        for(x=0;x<upload_item.length;x++){

            if(x===n-2){

                upload_item[x].setAttribute('style','background:white;color:black;border-radius:10px;'); 
            }
            else{

                upload_item[x].setAttribute('style','background:;color:;');
            }
        }
    }
}


// notification clear all

function clear_all_submenu(){

    if(clear_all[0].style.background===""){

        clear_all[0].setAttribute('style','background:white;color:black')

        confirm_clear_all[0].style.display="flex";
    }

    else{

        clear_all[0].setAttribute('style','background:;color:')

        confirm_clear_all[0].style.display="none";
    }

}


// $(document).ready(function(){

//     $.ajax({

//         url:'show_booking_notification',

//         type:'GET',

//         dataType:'json',
//         success:function(data){

//             var success = data.success
//             var cancel = data.cancel

//             var notification =""

//             var notification_div=""

//             if (success.length>0){

//                 success.forEach(function(item){

//                    notification_div = $('<div>',{
//                     class:'notification'
//                    }).prop('outerHTML');

//                    var tick_mark = $('<img>',{

//                     src:'static/icons/tick_mark.png',
//                     class:'icon-size'
                    
//                    }).prop('outerHTML');


//                    var notification_text = $('<p>',{

//                     text:item.booking_success
//                    }).prop('outerHTML');

//                    var close_mark = $('<img>',{

//                     src:'static/icons/close_notification_green.png',
//                     class:'close',
//                     'data-value':item.id
//                    }).prop('outerHTML');

                   
                   

                    
//                 });

//                 $('.notification').append(tick_mark)
//                    $('.notification').append(notification_text)
//                    $('.notification').append(close_mark)

//                    $('.notification-window').append(notification_div)

                   

                


                

                

                

               
                

              
//             }

           
//         }

        
//     })
// })


// getting notifications


$(document).ready(function() {

    function updateNotification(){
      
    
    $.ajax({
        url: 'show_booking_notification',
        type: 'GET',
        dataType: 'json',
        
        success: function(data) {

          
            $('.notification-window').empty()

            var success = data.notifications;
            var cancel = data.notification2;

            var ago='ago';

           

            if (success.length >0) {

                $('.no_notification').hide()

                
                success.forEach(function(item) {
                    
                    var notification_div = $('<div>', {
                        class: 'notification'
                    });


                    var time = $('<p>',{

                        text:item.time_since+' '+ago
                    })

                    

                    var tick_mark = $('<img>', {
                        src: 'static/icons/tick_mark.png',
                        class: 'icon-size'
                    });

                   

                    var notification_text = $('<p>', {
                        text: item.message
                    });

                    

                    var close_mark = $('<img>', {
                        src: 'static/icons/close_notification_green.png',
                        class: 'close',
                        'data-value': item.id
                    });


                   

                    notification_div.append(tick_mark);
                    notification_div.append(notification_text);
                    notification_div.append(close_mark);
                    notification_div.append(time);

                    $('.notification-window').append(notification_div);

                   
                });
            }



            if (cancel.length>0){


                
                

                cancel.forEach(function(item){

                    var notification_div2 = $('<div>',{

                        class:'notification2'
                    });

                    var time = $('<p>',{

                        text:item.time_since+' '+ago
                    })

                    var tick_mark2 = $('<img>', {
                        src: 'static/icons/close_mark.png',
                        class: 'icon-size'
                    });

                    var notification_text2 = $('<p>', {
                        text: item.message
                    });

                    var close_mark2= $('<img>', {
                        src: 'static/icons/close_notification_red.png',
                        class: 'close_red',
                        'data-value': item.id
                    });

                    notification_div2.append(tick_mark2);
                    notification_div2.append(notification_text2);
                    notification_div2.append(close_mark2);
                    notification_div2.append(time);

                    $('.notification-window').append(notification_div2);

                });
            }


            if (success.length===0 && cancel.length===0){

                $('.no_notification').show()
            }

            else{
                $('.no_notification').hide()

            }


           
        }
    });

    }

    // for the intial call

    // updateNotification(); 

    // // call updateNotification funtion at every 5 seconds

    // setInterval(updateNotification,1000);



});


// notification count shows in home button


$(document).ready(function(){

  


    


    var latest_entry_count = 0;

   
    function check_notification_count(){

       $.ajax({

        url:'notification_count_checker',
        type:'GET',
        data:{

            'latest_entry_count':latest_entry_count
        },
        success:function(response){

            var newEntryCount = response.difference;

            latest_entry_count+=newEntryCount;

            if (newEntryCount>0 && newEntryCount!==latest_entry_count){

                console.log(latest_entry_count)

                
                $('.notification_count').show()

                $('.notification_count').text(newEntryCount)

               
            }

           

            


            
            
        }

        
       })


       

    }

    
    // check_notification_count();
    // setInterval(check_notification_count,1000);
  

});



// delete single notification

// $(document).ready(function(){

//     $('div.notification-window').on('click','.close',function(){

//         var id = $(this).data('value');
//         deleteNotification(id,'success_notification');
//     });

//     $('div.notification-window').on('click','.close_red',function(){

//         var id = $(this).data('value');
//         deleteNotification(id,'cancel_notification');
//     });

//     function deleteNotification(id,notificationType){

//         $.ajax({

//             url:'notification_single_delete/'+id,
//             type:'GET',
//             data:{

//                 'success_notification':notificationType
//             },

//             success: function(response){

//                 console.log(response.message);
//             },

//             error: function(xhr, textStatus, errorThrown){

//                 console.log('Deletion failed: ' + textStatus);
//             }
//         });
//     }

// });


// delete single success notifications

$(document).ready(function(){

    $('div.notification-window').on('click','.close',function(){

        id = $(this).data('value');

        $.ajax({

            url:'success_notificatin_single_delete/'+id,

            type:'GET',

            success:function(response){

                console.log(response.message)
            }

        })
    })
})



// delete single cancel notification



$(document).ready(function(){

    $('div.notification-window').on('click','.close_red',function(){

        id = $(this).data('value');

        

        $.ajax({

            url:'cancel_notificatin_single_delete/'+id,

            type:'GET',

            success:function(response){

                console.log(response.message)
            }

        })
    })
})


// hide notification count icon and hide it when reload

$(document).ready(function(){


    $('.notification_count').hide()

    $('.nav-item').click(function(){

        $('.notification_count').hide()
    })
})


// clear all notification when click yes


$(document).ready(function(){

    $('.no').click(function(){

        $('.confirm_clear_all').hide()
        $('.clear_all').css({

            'background':'',
            'color':''
        })
    })

    $('.yes').click(function(){

        

        $.ajax({

            url:'clear_all_notification',

            type:'GET',

            success:function(response){

                console.log(response.message)

                
                $('.confirm_clear_all').hide()
                
                $('.clear_all').css({
        
                    'background':'',
                    'color':''
                })
               
            }
        })
    })
})



// change username


$(document).ready(function(){

    $('.ok').click(function(){

        $('.message_Success_or_fail').hide()

    })

    $('#change_username').submit(function(event){

        event.preventDefault();

        var form = $(this);

        var url = form.attr('action');

        var formData = form.serialize();

        $.ajax({

            url:url,
            type:'POST',
            data:formData,
            success: function(response){

               if(response.message_success){

                $("#change_username input[type='text']").val("");

               
                $('.message_Success_or_fail').css({'display':'flex','background':'rgba(184, 237, 187,1)'})
                $('.message_Success_or_fail p').text(response.message_success)
                $('.message_Success_or_fail p').css('color','green')
               }

              else if (response.message_failed){


                
                $('.message_Success_or_fail').css({'display':'flex','background':'rgb(234, 169, 169)'})

                $('.message_Success_or_fail p').text(response.message_failed)
                $('.message_Success_or_fail p').css('color','red')


              }
            }
        })

        
    })



    $('#change_password').submit(function(event){

        event.preventDefault();

        var form2 = $(this);
        var url2 = form2.attr('action');

        var formData2 = form2.serialize();

        $.ajax({

            url:url2,
            type:'POST',
            data:formData2,

            success:function(response){

                if(response.message_success2){

                        $("#change_password input[type='text']").val("");
        
                       
                        $('.message_Success_or_fail').css({'display':'flex','background':'rgba(184, 237, 187,1)'})
                        $('.message_Success_or_fail p').text(response.message_success2)
                        $('.message_Success_or_fail p').css('color','green')
                       }


                else if(response.message_failed2){

                $('.message_Success_or_fail').css({'display':'flex','background':'rgb(234, 169, 169)'})

                $('.message_Success_or_fail p').text(response.message_failed2)
                $('.message_Success_or_fail p').css('color','red')
                }

            }
        })
    })
})


// show custom message if password and confirm password doesn't match


function onChange() {
    const pword = document.querySelector('input[name=newpassword]');
    const cnfpword = document.querySelector('input[name=cofirmpassword]');
    if (cnfpword.value === pword.value) {
      cnfpword.setCustomValidity('');
    } else {
      cnfpword.setCustomValidity('Password did not match');
    }
  }


//   show booking details


  $(document).ready(function(){

    $('#bookings').click(function(){

        $.ajax({

            url:'show_booking_details',
            type:'GET',
            success:function(data){

                var data_received = data.bookingDetails

               

                if (data_received.length>0){

                    

                    var tableRows =''

                    data_received.forEach(function(item){

                        tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Token+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Mobile+'</td></tr>';
                        
                    });

                    $('.booking-table').show()

                    $('.booking-table tbody').html(tableRows)

                    $('.table-layout').css({

                        'display':'',
                        
                    })

                    $('.no_booking_message').hide()




                }

                else{

                    $('.booking-table').hide()

                    $('.table-layout').css({

                        'display':'grid',
                        'place-items':'center'
                    })

                    $('.no_booking_message').show()
                }


            }
        })
    })

    // sortby_latest

    $('#latest').click(function(){

        $(this).css({

            'background':'white',
            'color':'black',
            
        })


        $('#oldest').css({

            'background':'',
            'color':''
        })

        $.ajax({

            url:'booking_details_sortby_latest',
            type:'GET',
            success: function(data){

                var data_received = data.bookingDetails

                

                if (data_received.length>0){

                    

                    $('.booking-table tbody').empty()

                    $('.no_booking_message').hide();

                    $('.table-layout').css({

                    'display':'',
                    
                    })


                   

                    var tableRows ='';

                    data_received.forEach(function(item){

                        tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Token+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Mobile+'</td></tr>';
                    })

                    $('.booking-table').show()

                    $('.booking-table tbody').html(tableRows)



                }


            }
        })
    })



    $('#oldest').click(function(){


        $(this).css({

            'background':'white',
            'color':'black',
            
        })

        $('#latest').css({

            'background':'',
            'color':''
        })

        $.ajax({

            url:'booking_details_sortby_oldest',
            type:'GET',
            success: function(data){

                var data_received = data.bookingDetails

                

                if (data_received.length>0){

                    

                    $('.booking-table tbody').empty()

                    $('.no_booking_message').hide();

                    $('.table-layout').css({

                    'display':'',
                    
                    })


                   

                    var tableRows ='';

                    data_received.forEach(function(item){

                        tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Token+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Mobile+'</td></tr>';
                    })

                    $('.booking-table').show()

                    $('.booking-table tbody').append(tableRows)



                }


            }
        })
    })


    $('.clear-item1').click(function(){

        $.ajax({

            url:'booking_details_clear_All',
            type:'GET',
            success:function(response){

                var message_success = response.message;

                console.log(message_success)

                var error = response.error;

                if (message_success){

                    $('.booking-table').hide()

                    $('.table-layout').css({

                        'display':'grid',
                        'place-items':'center'
                    })

                    $('.no_booking_message').show()
                    $('.clear-submenu').hide()

                    $('#clear_all').css({

                        'background':'',
                        'color':''
                    })


                }


                console.log(error)

                
            }
        })
    })


    $('.clear-item2').click(function(){

        $('.clear-submenu').hide()
        $('#clear_all').css({

            'background':'',
            'color':''
        })
    })


    // search booking details on date 

    $('#search_by_date').submit(function(event){

        event.preventDefault();

        var form =$(this);
        var url = form.attr('action');
        var formData = form.serialize();

       

        $.ajax({

            url:url,
            type:'POST',
            data:formData,
            success:function(data){

               var data_received = data.booking_details;

               var not_exist = data.not_exist;

              
              


              if (data_received.length>0){

                $('.booking-table tbody').empty()

                $('.booking-table').show();

                $('.no_booking_message').hide();

                $('.table-layout').css({

                    'display':'',
                    
                })


                var tableRows='';

                data_received.forEach(function(item){

                    tableRows += '<tr><td>'+item.Date+'</td><td>'+item.Slot+'</td><td>'+item.Token+'</td><td>'+item.Name+'</td><td>'+item.Service+'</td><td>'+item.Mobile+'</td></tr>';
                })

                $('.booking-table tbody').html(tableRows)

              }

              else{

                


                $('.table-layout').css({

                    'display':'grid',
                    'place-items':'center'
                })

                $('.no_booking_message').show();
                $('.booking-table').hide();


              }


            }
        })
    })



  })


//    hide the upload menu's submenu when click anywhere on the document


$(document).ready(function(){

  $('.content-container').click(function(){

    $('.uploads').hide()

    $('.nav_upload').css({

        'background':'',
        'color':''
    })

  })
})


// // upload images to gallery


// $(document).ready(function(){

//     $('#image_upload_form').submit(function(event){

//         event.preventDefault();

//         form = $(this)

//         url = form.attr('action')

//         var formData = new FormData(form[0]);

//         // get csrf_token from cookies

//         var csrftoken = getCookie('csrftoken');

//         $.ajaxSetup({

//             headers:{

//                 'X-CSRFToken':csrftoken
//             }
//         });

//         $.ajax({

//             url:url,
//             type:'POST',
//             data:formData,
//             processData:false,
//             contentType:false,
//             success:function(response){

//                var message = response.message;

//                 var error = response.error;

//                 console.log(message)
//                 console.log(error)

//                 if (message){

//                     function show_upload_success_message(){


//                         $('.upload_success_message').css({
                    
//                             'display':'flex'
//                         });


                       


//                     }
                    
                    
                   
                  
//                 }
//             }
//         })
        

        

        
//     })

   
// })


// function getCookie(name) {
//     var cookieArr = document.cookie.split(";");

//     for (var i = 0; i < cookieArr.length; i++) {
//         var cookiePair = cookieArr[i].split("=");

//         if (name === cookiePair[0].trim()) {
//             return decodeURIComponent(cookiePair[1]);
//         }
//     }

//     return null;
// }









// $(document).ready(function() {
//     $('#image_upload_form').submit(function(event) {
//         event.preventDefault();
//         var form = $(this);
//         var url = form.attr('action');
//         var formData = new FormData(form[0]);

//         // Get csrf_token from cookies
//         var csrftoken = getCookie('csrftoken');

//         $.ajaxSetup({
//             headers: {
//                 'X-CSRFToken': csrftoken
//             }
//         });

//         $.ajax({
//             url: url,
//             type: 'POST',
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function(response) {
//                 var message = response.message;
//                 var error = response.error;
//                 console.log(message);
//                 console.log(error);
//                 if (message) {


//                     form[0].reset();
//                     function show_upload_success_message() {
//                         $('.upload_success_message').css({
//                             'display': 'flex'
//                         });
//                     }
//                     show_upload_success_message();
//                     setTimeout(function() {
//                         $('.upload_success_message').css({
//                             'display': 'none'
//                         });
//                     }, 2000);


//                     // get gallery images


//                     $.ajax({

//                         url:'get_gallery_images',
//                         type:'GET',
//                         success:function(response){

                           

//                            if(response.length>0){

//                             response.forEach(function(item){

//                                 var images = $('<img>',{

//                                     class:'images',
//                                     value:item.id,
//                                     src:item.image
//                                 })

//                                 $('.item3').append(images)
//                             })


                            
//                            }
                            
//                         }

//                     })
//                 }
//             }
//         });
//     });

//     function getCookie(name) {
//         var cookieArr = document.cookie.split(";");
//         for (var i = 0; i < cookieArr.length; i++) {
//             var cookiePair = cookieArr[i].split("=");
//             if (name === cookiePair[0].trim()) {
//                 return decodeURIComponent(cookiePair[1]);
//             }
//         }
//         return null;
//     }
// });










// upload images to gallery


$(document).ready(function() {
    $('#image_upload_form').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        var formData = new FormData(form[0]);

        // Get csrf_token from cookies
        var csrftoken = getCookie('csrftoken');

        $.ajaxSetup({
            headers: {
                'X-CSRFToken': csrftoken
            }
        });

        $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                var message = response.message;
                var error = response.error;
                console.log(message);
                console.log(error);
                if (message) {
                    form[0].reset();
                    showUploadSuccessMessage();

                    // Retrieve gallery images
                    getGalleryImages();
                }
            },
            error: function(xhr, textStatus, error) {
                console.log(xhr.statusText);
            }
        });
    });

    function showUploadSuccessMessage() {
        $('.upload_success_message').css('display', 'flex');
        setTimeout(function() {
            $('.upload_success_message').hide();
        }, 2000);
    }

    function getGalleryImages() {
        $.ajax({
            url: 'get_gallery_images',
            type: 'GET',
            success: function(response) {

                var data_received = response.images;

                if (data_received.length>0) {


                   

                    $('.item3').empty();

                    $('.noimage').hide();

                    $('#display_images').removeClass('item3_change');

                    $('#display_images').addClass('item3');

                    data_received.forEach(function(item) {

                        var image_container = $('<div>').addClass('image_container');

                        var image = $('<img>').addClass('images').attr('src',item.images).attr('alt', 'Gallery Image')

                        var delete_div = $('<div>').addClass('single_Delete_image');

                        var close_icon = $('<img>').addClass('close_icon').attr('src','static/icons/white close icon.png').attr('value',item.id);

                        delete_div.append(close_icon)

                        image_container.append(image)

                        image_container.append(delete_div)

                        

                        
                        $('.item3').append(image_container);

                       
                       
                    });


                   
                }


                else{

                    $('#display_images').empty();
                    
                    $('#display_images').removeClass('item3');
                    $('#display_images').addClass('item3_change');
                    
                    var no_image= $('<img>').attr('src','static/icons/no_image.jpg').attr('class','noimage');

                    $('.item3_change').append(no_image)

                }
            },
            error: function(xhr, textStatus, error) {
                console.log(xhr.statusText);
            }
        });
    }

    function getCookie(name) {
        var cookieArr = document.cookie.split(";");
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }


    $('#gallery').click(function(){

        getGalleryImages();
    })


    // delete all gallery images

    $('.delete_all').click(function(){

        $(this).css({

            'background':'red',
            'color':''
        });
    
        $('.delete_confirm_window').css('display','flex');
        $('.item3').css({

            'filter':'blur(5px)'
        });

        $('.image_container').css('animation','none');

        $('.item3').off('dblclick');
    });

    // when click on yes delete window appear and all images will be deletes

    $('.gallery_delete_yes').click(function(){

        $('.delete_confirm_window').css('display','none');
        $('.delete_all').css('background','');
        $('.item3').css({

            'filter':''
        });
        $('.image_container').css('animation','');

        $('.item3').on('dblclick',function(){

            show_and_hide_close_icon();
        });



        $.ajax({

            url:'delete_all_gallery_images',
            type:'GET',
            success: function(response){

                var message = response.message;
                var error = response.error;

                console.log(message);
                console.log(error);

                if (message){

                    getGalleryImages();
                }


            }
        });
    });

    // when click on no delete window disappear

    $('.gallery_delete_no').click(function(){

        $('.delete_confirm_window').css('display','none');
        $('.delete_all').css('background','');
        $('.item3').css({

            'filter':''
        });
        $('.image_container').css('animation','');

        $('.item3').on('dblclick',function(){

            show_and_hide_close_icon();
        });

    });





    
    $('.item3').dblclick(function(){


       show_and_hide_close_icon();
        

       
    });


    $('.item3').on('click','.close_icon',function(){

        var id = $(this).attr('value');
        

     $.ajax({

        url:'delete_individual_gallery_images/'+id,
        type:'GET',
        success: function(request){

            var message = request.message;
            var error = request.error;

            if(message){

                
                $.ajax({
                    url: 'get_gallery_images',
                    type: 'GET',
                    success: function(response) {
        
                        var data_received = response.images;
        
                        if (data_received.length>0) {
        
        
                           
        
                            $('.item3').empty();
        
                            $('.noimage').hide();
        
                            $('#display_images').removeClass('item3_change');
        
                            $('#display_images').addClass('item3');
        
                            data_received.forEach(function(item) {
        
                                var image_container = $('<div>').addClass('image_container');
        
                                var image = $('<img>').addClass('images').attr('src',item.images).attr('alt', 'Gallery Image')
        
                                var delete_div = $('<div>').addClass('single_Delete_image');
        
                                var close_icon = $('<img>').addClass('close_icon').attr('src','static/icons/white close icon.png').attr('value',item.id);
        
                                delete_div.append(close_icon)
        
                                image_container.append(image)
        
                                image_container.append(delete_div)
        
                                
        
                                
                                $('.item3').append(image_container);
        
                               
                               
                            });

                            show_and_hide_close_icon();
        
        
                           
                        }
        
        
                        else{
        
                            $('#display_images').empty();
                            
                            $('#display_images').removeClass('item3');
                            $('#display_images').addClass('item3_change');
                            
                            var no_image= $('<img>').attr('src','static/icons/no_image.jpg').attr('class','noimage');
        
                            $('.item3_change').append(no_image)
        
                        }
                    },
                    error: function(xhr, textStatus, error) {
                        console.log(xhr.statusText);
                    }
                });
            }
               
                
            

            else if(error){

                console.log(error);
            }
        }


     });
    });





// displaying close icon for delete images on gallery when right click and switching of scale animation of image container 

    function show_and_hide_close_icon(){


        if($('.single_Delete_image').css('display')==='none'){

            $('.single_Delete_image').css('display','grid');

            $('.image_container').css('animation','none');
     

            
        }

        else{

            $('.single_Delete_image').css('display','none');
            $('.image_container').css('animation','');
            
        }
    }

});




// offer and price updates


$(document).ready(function(){



    // get offer from offer model to form input


    $('#offer').click(function(){


        $.ajax({

            url:'get_offer_details',
    
            type:'GET',
    
            success: function(response){

                var data_received = response.offers;

                data_received.forEach(function(item){

                    $('#haircut').val(item.Haircut);
                    $('#massage').val(item.Massage);
                    $('#makeup').val(item.Makeup);
                })

                
    
                

                
            }
        });

    });


    // update offer


    $('.offer_change_form').submit(function(event){

        event.preventDefault();


        var form = $(this);

        var url = form.attr('action');

        var formData = form.serialize();



        $.ajax({

            url:url,
            type:'POST',
            data : formData,
            success: function(response){

                var message_success = response.message;
                var error = response.error;

                if (message_success){

                    console.log(message_success)

                    showUofferUpdatedSuccessMessage();
                }

                else if (error){

                    console.log(error)
                }

            }
        })




    });


    function showUofferUpdatedSuccessMessage() {
        $('.offer_updated_message').css('display', 'flex');
        setTimeout(function() {
            $('.offer_updated_message').hide();
        }, 2000);
    }




    // get prices from models


    $('#price').click(function(){

        $.ajax({

            url:'get_price_details',

            type:'GET',

            success: function(request){

                var Haircut_price = request.haircut;

                var massage_price = request.massage;

                var makeup_price = request.makeup;

                
                Haircut_price.forEach(function(item){

                    $('#hair_kids').val(item.kids)
                    $('#hair_male').val(item.male)
                    $('#hair_female').val(item.female)
                });


                massage_price.forEach(function(item){

                    $('#massage_kids').val(item.kids)
                    $('#massage_male').val(item.male)
                    $('#massage_female').val(item.female)
                });


                makeup_price.forEach(function(item){

                    $('#makeup_kids').val(item.kids)
                    $('#makeup_male').val(item.male)
                    $('#makeup_female').val(item.female)
                });


            }
        });
    });



    // update haircut prices


    $('#hair_cut_form').submit(function(event){

        event.preventDefault();

        var form = $(this);

        var url = form.attr('action');

        var formData = form.serialize();


        $.ajax({

            url:url,
            type:'POST',
            data:formData,

            success: function(request){


                var message = request.message;

                if (message){

                    showPriceUpdatedSuccessMessage();

                }


                else{

                    console.log(error);
                }

            }
        });
    });





    // update massage prices


    $('#massage_form').submit(function(event){

        event.preventDefault();

        var form = $(this);

        var url = form.attr('action');

        var formData = form.serialize();


        $.ajax({

            url:url,
            type:'POST',
            data:formData,

            success: function(request){


                var message = request.message;

                var error = request.error;

                if (message){

                    showPriceUpdatedSuccessMessage();

                }

                else{

                    console.log(error);
                }

            }
        });
    });




    // update makeup prices


    $('#makeup_form').submit(function(event){

        event.preventDefault();

        var form = $(this);

        var url = form.attr('action');

        var formData = form.serialize();


        $.ajax({

            url:url,
            type:'POST',
            data:formData,

            success: function(request){


                var message = request.message;

                var error = request.error;

                if (message){

                    showPriceUpdatedSuccessMessage();

                }

                else{

                    console.log(error);
                }

            }
        });
    });





    function showPriceUpdatedSuccessMessage() {
        $('.price_update_success_message').css('display', 'flex');
        setTimeout(function() {
            $('.price_update_success_message').hide();
        }, 2000);
    }

    
});








  





    

















