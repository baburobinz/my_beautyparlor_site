from django.shortcuts import render,redirect,HttpResponse
from .models import*
from django.contrib.auth.hashers import make_password,check_password
from datetime import datetime
from django.views.generic import View
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.utils.timesince import timesince

from django.utils.timezone import now

from django.shortcuts import get_object_or_404

from django.conf import settings


# Create your views here.
def show_login_page(request):
    return render(request,'log.html')

def show_sign_up(request):
    return render(request,'signup.html')

def user_registration(request):
    if request.method=='POST':
        user_name=request.POST['username']
        mobile = request.POST['mobile']
        email = request.POST['email']
        password = request.POST['password']
        conf_password = request.POST['confirm']

        encrypted_password = make_password(password)


        # checking user name is already existed


        try:

            collect_username = user_details.objects.get(Username=user_name)

            if collect_username:
                return render(request,'signup.html',{'message':'Username Already in Use..!','a':user_name,'b':mobile,'c':email,'d':password,'e':conf_password})



        # creating and saving user details if username is not alraedy existed
        except:

            user_data = user_details.objects.create(Username=user_name,Mobile=mobile,Email=email,Password=encrypted_password)
            user_data.save()

            return render(request,'signup.html',{'message':'Registration Successful Please Login'})


def login(request):
    if request.method == 'POST':
        user_name = request.POST['username']
        password = request.POST['password']
        invalid_msg = 'Invalid Username or Password...!'

        try:
            data = user_details.objects.get(Username=user_name)
            checkpassword = check_password(password,data.Password)

            if data:


                if user_name==data.Username and checkpassword == True:
                    print('ok its ok')

                    request.session['id'] = user_name
                    return redirect(profile)
                else:
                    print('not ok')
                    return render(request,'log.html',{'invalid': invalid_msg})
        except:

            try:

                data2 = admin_details.objects.get(Username=user_name)

                if data2:

                    if user_name == data2.Username and password == data2.Password:
                        request.session['admin_id']=user_name
                        return redirect(profile)
                    else:
                        return render(request,'log.html', {'invalid': invalid_msg})

            except:

                return render(request,'log.html', {'invalid': invalid_msg})




def profile(request):


    todays_offer = offer.objects.all()
    haircut_price = haircut_price_change.objects.all()
    massage_price = massage_price_change.objects.all()
    makeup_price = makeup_price_change.objects.all()
    gallery_images_display = gallery.objects.all()

    if 'id' in request.session:
        return render(request, 'home.html',{'todays_offer':todays_offer,'haircut_price':haircut_price,'massage_price':massage_price,'makeup_price':makeup_price,'gallery_images_display':gallery_images_display})


    elif 'admin_id' in request.session:

        return render(request, 'admin_home.html')


    else:
        return render(request, 'log.html')









def logout(request):
    if 'id' in request.session:
        request.session.flush()
        return render(request,'log.html')
    elif 'admin_id' in request.session:
        request.session.flush()
        return render(request, 'log.html')
    else:
        return render(request, 'log.html')



def change_username(request):
    if request.method == 'POST':
        a = request.POST.get('current_username')
        b = request.POST.get('current_password')
        c = request.POST.get('new_username')

        try:
            data = user_details.objects.get(Username=a)
            if data:
                checkpassword = check_password(b,data.Password)

                if a == data.Username and checkpassword == True:

                    user_details.objects.filter(Username=a).update(Username=c)
                    request.session['id']=c
                    
                    return JsonResponse({'success_message':'Username Successfully Updated'},safe=False)

                else:
                     return JsonResponse({'invalid_message':'Invalid Username or Password..!'},safe=False)
        except:

             return JsonResponse({'invalid_message':'Invalid Username or Password..!'},safe=False)


    else:

        return JsonResponse({'error':'not a post request'})


def change_password(request):

    if request.method == 'POST':
        a = request.POST.get('current_username')
        b = request.POST.get('current_password')
        c = request.POST.get('new_password')

        try:
            data = user_details.objects.get(Username=a)
            if data:
                checkpassword = check_password(b,data.Password)

                if a == data.Username and checkpassword == True:
                    print('ok this')

                    encrypted_password = make_password(c)

                    user_details.objects.filter(Username=a).update(Password=encrypted_password)

                    return JsonResponse({'success_message':'Password Successfully Updated'},safe=False)

                else:
                    return JsonResponse({'invalid_message':'Invalid Username or Password..!'},safe=False)

        except:

             return JsonResponse({'invalid_message':'Invalid Username or Password..!'},safe=False)

    else:
        return JsonResponse({'error':'not a post request'})




# booking function



def booking(request):

    if request.method == 'POST':
        a = request.POST.get('name')
        b = request.POST.get('mobile')
        c = request.POST.get('category')
        d = request.POST.get('service')
        e = request.POST.get('date')
        f = request.POST.get('slots')
        username = request.session['id']


#         check model is empty

        data = booking_details.objects.all()
        count_data=data.count()

        get_input_date = datetime.strptime(e,"%Y-%m-%d").date()

        input_date = datetime.strftime(get_input_date,'%d-%m-%Y')

        notification_alert = f'{a} Booked an appointment for {d} on {input_date}'
       


        get_current_date = datetime.now().date()
        # current_date =datetime.strftime(get_current_date,'%d-%m-%Y')
       



        success_message = {'booking_message': 'Booking Successful'}
        
        
        slot_full ={'slot_full':'Slot is full try other slot..!'}

        slot_closed={'slot_closed':'This slot is closed please choose next slot...!'}
        



        if get_input_date == get_current_date:

            if f == "8:00AM to 12:00PM":

                input_time = "11:30:00"

            elif f == "1:00PM to 5:00PM":

                input_time = "16:30:00"

            else:
                input_time = "20:30:00"

            input_time = datetime.strptime(input_time,"%H:%M:%S").time()

            current_time = datetime.now().time()

            if input_time <= current_time:

                return JsonResponse(slot_closed,safe=False)

            else:

                if count_data == 0:

                    token = count_data + 1

                    book = booking_details.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                          Date= get_input_date , Slot=f, Token=token)
                    book.save()

                    # this is for when user clear the booking it wont affect the original model

                    book2 = booking_details_for_user.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                          Date= get_input_date , Slot=f, Token=token)
                    book2.save()




                    add_nottifiaction = success_notification.objects.create(booking_success=notification_alert)
                    add_nottifiaction.save()





                    return JsonResponse(success_message,safe=False)
                else:

                    # checking if there any slots matches input slot

                    data = booking_details.objects.filter(Slot=f, Date=get_input_date)

                    if data:
                        count_same_slot = data.count()

                        if count_same_slot < 4:
                            token = count_same_slot + 1
                                
                            book = booking_details.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                                Date= get_input_date , Slot=f, Token=token)
                            book.save()

                            # this is for when user clear the booking it wont affect the original model
                                    
                            book2 = booking_details_for_user.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                                Date=get_input_date, Slot=f, Token=token)
                            book2.save()

                            add_nottifiaction = success_notification.objects.create(booking_success=notification_alert)
                            add_nottifiaction.save()



                            return JsonResponse(success_message,safe=False)

                        else:

                            return JsonResponse(slot_full,safe=False)

                    else:
                        token = 1

                        book = booking_details.objects.create(Username=username, Name=a, Mobile=b, Category=c,
                                                              Service=d,
                                                              Date=get_input_date, Slot=f, Token=token)
                        book.save()

                         # this is for when user clear the booking it wont affect the original model

                        book2 = booking_details_for_user.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                            Date=get_input_date, Slot=f, Token=token)
                        book2.save()

                        add_nottifiaction =success_notification.objects.create(booking_success=notification_alert)
                        add_nottifiaction.save()

                        return JsonResponse(success_message,safe=False)


        else:

            if count_data == 0:

                token = count_data + 1

                book = booking_details.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                      Date=get_input_date, Slot=f, Token=token)
                book.save()

                 # this is for when user clear the booking it wont affect the original model

                book2 = booking_details_for_user.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                        Date=get_input_date, Slot=f, Token=token)
                book2.save()

                add_nottifiaction = success_notification.objects.create(booking_success=notification_alert)
                add_nottifiaction.save()


                return JsonResponse(success_message,safe=False)

            else:

                # checking if there any slots matches input slot

                data = booking_details.objects.filter(Slot=f, Date=get_input_date)

                if data:
                    count_same_slot = data.count()

                    if count_same_slot < 4:
                        token = count_same_slot + 1
                        book = booking_details.objects.create(Username=username, Name=a, Mobile=b, Category=c,
                                                              Service=d, Date=get_input_date, Slot=f, Token=token)
                        book.save()


                         # this is for when user clear the booking it wont affect the original model

                        book2 = booking_details_for_user.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                                Date=get_input_date, Slot=f, Token=token)
                        book2.save()

                        add_nottifiaction = success_notification.objects.create(booking_success=notification_alert)
                        add_nottifiaction.save()

                        return JsonResponse(success_message,safe=False)

                    else:

                        return JsonResponse(slot_full,safe=False)

                else:
                    token = 1

                    book = booking_details.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                          Date=get_input_date, Slot=f, Token=token)
                    book.save()
                    
                     # this is for when user clear the booking it wont affect the original model

                    book2 = booking_details_for_user.objects.create(Username=username, Name=a, Mobile=b, Category=c, Service=d,
                                                          Date=get_input_date, Slot=f, Token=token)
                    book2.save()

                    add_nottifiaction =success_notification.objects.create(booking_success=notification_alert)
                    add_nottifiaction.save()


                    return JsonResponse(success_message,safe=False)
    else:

        return JsonResponse({'error':'Not a Post method'})















        # creating values in booking_details model





def show_booking(request):

   
    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method == 'GET':

        get_data = booking_details_for_user.objects.filter(Username=request.session['id']).values()

        data = {

            'bookingDetails':[

                {
                    'id':i['id'],
                    'Date':datetime.strftime(i['Date'],'%d-%m-%Y'),
                    'Slot':i['Slot'],
                    'Token':i['Token'],
                    'Name':i['Name'],
                    'Service':i['Service'],
                    'Mobile':i['Mobile']

                }

                for i in get_data
            ]
        }

        return JsonResponse(data,safe=False)
     
    else:
        return JsonResponse({'error':'not a ajax get request'})



        

   


def clear_all_booking(request):
    if request.method=="POST":
        booking_details_for_user.objects.filter(Usernam=request['id']).delete()
        print()
        print('cleared')

def show_clear(request):
    return render(request,'clear_booking.html')



def back_to_home(request):
    return redirect(profile)


def booking_latest(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

        get_data = booking_details.objects.filter(Username=request.session['id']).values()
        
        latest = get_data.order_by('-Date')
        
        data = {
            'bookingDetails':[

                {

                    'Date':datetime.strftime(i['Date'],'%d-%m-%Y'),
                    'Slot':i['Slot'],
                    'Token':i['Token'],
                    'Name':i['Name'],
                    'Service':i['Service'],
                    'Mobile':i['Mobile']

                }

                for i in latest
            ]
        }

        return JsonResponse(data)



   

def booking_oldest(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

        get_data = booking_details.objects.filter(Username=request.session['id']).values()
        
        oldest = get_data.order_by('Date')
        
        data = {
            'bookingDetails':[

                {

                    'Date':datetime.strftime(i['Date'],'%d-%m-%Y'),
                    'Slot':i['Slot'],
                    'Token':i['Token'],
                    'Name':i['Name'],
                    'Service':i['Service'],
                    'Mobile':i['Mobile']

                }

                for i in oldest
            ]
        }

        return JsonResponse(data)




def user_clear_booking(request):
    data = booking_details_for_user.objects.filter(Username=request.session['id'])
    
    data.delete()
    return JsonResponse('deleted',safe=False)


def cancel_booking(request,id):


        cancel_id = id

       
        get_cancel_user_details =  booking_details.objects.get(id=cancel_id)
       
        user_name = get_cancel_user_details.Name
        service = get_cancel_user_details.Service
        date = get_cancel_user_details.Date

        notification = f'{user_name} cancelled an appointment for {service} on {date}'
        
        cancel_notification.objects.create(booking_cancelled=notification)
        booking_details.objects.get(id=cancel_id).delete()
        booking_details_for_user.objects.get(id=cancel_id).delete()


        current_data=booking_details_for_user.objects.filter(Username=request.session['id']).values()
        data = list(current_data)
        return JsonResponse(data,safe=False)




@csrf_exempt 
def show_booking_notification(request):

    if request.method == 'GET' and request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest':  

        get_success_notification=success_notification.objects.all().order_by('-id').values()
        get_cancel_notification = cancel_notification.objects.all().order_by('-id').values()
        current_datetime = now()

        data = {

            'notifications':[

                {   
                    'id':notification['id'],
                    'message':notification['booking_success'],
                    'time_since':timesince(notification['time_created'],current_datetime)
                }

                for notification in get_success_notification
            ],


            'notification2':[

                {
                    'id':notification2['id'],
                    'message':notification2['booking_cancelled'],
                    'time_since':timesince(notification2['time_created'],current_datetime)

                    
                }

                for notification2 in get_cancel_notification
            ]
        }
       

        

        

        return JsonResponse(data)
    


def notification_count_checker(request):


    if request.headers.get('X-Requested-With') == 'XMLHttpRequest' and request.method == 'GET':

        latest_entry_count = request.GET.get('latest_entry_count',0)

        latest_entry_count =int(latest_entry_count)
        
        
        new_entry_count_success = success_notification.objects.all().count()
        new_entry_count_cancel = cancel_notification.objects.all().count()
        success_plus_cancel = new_entry_count_success + new_entry_count_cancel
        difference = success_plus_cancel - latest_entry_count   
       
        return JsonResponse({'difference': difference}, safe=False)
    


    
# def notificatin_single_delete(request,id):

#     delete_id = id

#     if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

#         received_data = request.POST.get('success_notification')

#         try:


#             if received_data == "success_notification":

#                 data = success_notification.objects.get(id=id)
#                 print(data)

#                 data.delete()

                
            
#             elif received_data == "cancel_notification":

#                 data = get_object_or_404(cancel_notification,id=id)

#                 print(data)

#                 data.delete()


#             else:
#                 return JsonResponse({'error':'invalid notification type'},status=400)

#             return JsonResponse({'message':'Deleted successfully'})
        
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
        
#     else:
#         return JsonResponse({'error':'invalid request'}, status=400)


def success_notificatin_single_delete(request,id):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

        delete_id = id

        data = success_notification.objects.get(id = delete_id)

        data.delete()

        return JsonResponse({'message':'success'})
        


def cancel_notificatin_single_delete(request,id):
    
     if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

        delete_id = id

        data = cancel_notification.objects.get(id = delete_id)

        data.delete()

        return JsonResponse({'message':'success'})
     


def clear_all_notification(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':


        try:

            data = success_notification.objects.all()
            data2 = cancel_notification.objects.all()

            data.delete()
            data2.delete()

            return JsonResponse({'message':'deleted succssfully'})
        
        except:

            return JsonResponse({'error':'There is no notification to delete...!'})

        
        

def change_admin_username(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='POST':

        u = request.POST.get('username')

        p = request.POST.get('Password')

        n = request.POST.get('newusername')

        try:

            get_admin_detail = admin_details.objects.get(Username=u)

            current_username = get_admin_detail.Username

            current_password = get_admin_detail.Password

            if current_username == u and current_password == p:

                admin_details.objects.filter(Username=u).update(Username=n)

                return JsonResponse({'message_success':'Username Successfully Updated'})
            
            else:

                return JsonResponse({'message_failed':'Invalid Username or Password..!'})

        except:

            return JsonResponse({'message_failed':'Invalid Username or Password..!'})



        
def change_admin_password(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='POST':

        u = request.POST.get('username')

        p =request.POST.get('password')

        np = request.POST.get('newpassword')

        try:

            get_admin_detail = admin_details.objects.get(Username=u)

            current_username = get_admin_detail.Username

            current_password = get_admin_detail.Password

           

            if current_username == u and current_password == p:

                admin_details.objects.filter(Username=u).update(Password=np)

                return JsonResponse({'message_success2':'Password Successfully Updated'})
            
            else:

                return JsonResponse({'message_failed2':'Invalid Username or Password..!'})
            
        except:

            return JsonResponse({'message_failed2':'Invalid Username or Password..!'})
        

def show_booking_details(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method == 'GET':

        get_data = booking_details.objects.all().order_by('-Date').values()

        data = {

            'bookingDetails':[

                {

                    'Date':datetime.strftime(i['Date'],'%d-%m-%Y'),
                    'Slot':i['Slot'],
                    'Token':i['Token'],
                    'Name':i['Name'],
                    'Service':i['Service'],
                    'Mobile':i['Mobile']

                }

                for i in get_data
            ]
        }

        return JsonResponse(data,safe=False)
    

def booking_details_sortby_latest(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

        get_data = booking_details.objects.all().order_by('-Date').values()

        data = {

            'bookingDetails':[

                {

                    'Date':datetime.strftime(i['Date'],'%d-%m-%Y'),
                    'Slot':i['Slot'],
                    'Token':i['Token'],
                    'Name':i['Name'],
                    'Service':i['Service'],
                    'Mobile':i['Mobile']

                }

                for i in get_data
            ]
        }

        return JsonResponse(data,safe=False)
    
    else:
        return JsonResponse({'message':'not an ajax request'})
    

def booking_details_sortby_oldest(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

        get_data = booking_details.objects.all().order_by('Date').values()

        data = {

            'bookingDetails':[

                {

                    'Date':datetime.strftime(i['Date'],'%d-%m-%Y'),
                    'Slot':i['Slot'],
                    'Token':i['Token'],
                    'Name':i['Name'],
                    'Service':i['Service'],
                    'Mobile':i['Mobile']

                }

                for i in get_data
            ]
        }

        return JsonResponse(data,safe=False)
    
    else:
        return JsonResponse({'message':'not an ajax request'})
    




def booking_details_clear_All(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='GET':

        get_data = booking_details.objects.all()

        get_data.delete()

        return JsonResponse({'message':'cleared'})
    
    else:

        return JsonResponse({'error':'request is not ajax'})
        


def search_on_date(request):

    if request.headers.get('X-Requested-with')=='XMLHttpRequest' and request.method=='POST':

        get_date = request.POST.get('date')
       

        try:   

            filter_by_date=booking_details.objects.filter(Date=get_date).values()

            data = {

                'booking_details':[

                    {
                        'Date':datetime.strftime(i['Date'],'%d-%m-%Y'),
                        'Slot':i['Slot'],
                        'Token':i['Token'],
                        'Name':i['Name'],
                        'Service':i['Service'],
                        'Mobile':i['Mobile']
                    }

                    for i in filter_by_date
                ]
            
                
            }

        

            return JsonResponse(data,safe=False)
        
        except:

            return JsonResponse({'not_exist':'object not exist'},safe=False)
        

    else:

        return JsonResponse({'error':'not a ajax request'})
    


def upload_gallery(request):

    if request.method=='POST'and request.FILES.getlist('files'):

        print('ok')

        img = request.FILES.getlist('files')

        for image_file in img:

            data = gallery.objects.create(image=image_file)

            data.save()

        return JsonResponse({'message':'image successfully uploaded'})
    
    else:

        return JsonResponse({'error':'not an ajax request'})

        

        
def get_gallery_images(request):

    if request.method=='GET':

        get_data = gallery.objects.all().values()

        data_list = list(get_data)

        data = {

            'images':[

                {

                    'id':i['id'],
                    
                    'images':settings.MEDIA_URL+i['image']
                }

                for i in data_list

            ]
        }

        return JsonResponse(data,safe=False)
    


# delete all gallery images


def delete_all_gallery_images(request):

    if request.method=='GET':

        data = gallery.objects.all()
        data.delete()

        return JsonResponse({'message':'galley images deleted'})
    
    else:
        return JsonResponse({'error':'The request is not get'})



def delete_individual_gallery_images(request,id):

    if request.method=='GET':

        print(id)

        data = gallery.objects.get(id=id)

        data.delete()

        return JsonResponse({'message':'image deleted'})

    else:
        return JsonResponse({'error':'Not a get request'})



# get offer details from offer model


def get_offer_details(request):

    if request.method=='GET':

        get_data = offer.objects.all().values()

        data_list = list(get_data)

        data ={

            'offers':[

                {

                'id':i['id'],

                'Haircut':i['Haircut'],

                'Massage':i['Massage'],

                'Makeup':i['Makeup']
                
                
                }

                for i in data_list
            ]
        }

        return JsonResponse(data,safe=False)
    
    else:

        return JsonResponse({'error':'not a get request..!'});



def offer_change(request):

    if request.method=='POST':

        hair = request.POST.get('hair_cut_offer')

        massage = request.POST.get('massage_offer')

        makeup = request.POST.get('make_up_offer')

        print(hair,massage,makeup)


        get_current_offer = offer.objects.all()

        get_current_offer.delete()

        add_new_offer = offer.objects.create(Haircut=hair,Massage=massage,Makeup=makeup)

        add_new_offer.save()


        return JsonResponse({'message':'offer updated'},safe=False)
    

    else:

        return JsonResponse({'error':'request is not POST'},safe=False)
        


def get_price_details(request):

    if request.method=='GET':

        hair_cut_price = haircut_price_change.objects.all().values()
        massage_price = massage_price_change.objects.all().values()
        makeup_price = makeup_price_change.objects.all().values()

        hair_cut_price_list = list(hair_cut_price)

        massage_price_list = list(massage_price)

        makeup_price_list = list(makeup_price)

        data = {

            'haircut':[

                {

                    'kids':i['Kids'],
                    'male':i['Male'],
                    'female':i['Female']
                }

                for i in hair_cut_price_list
            ],

            'massage':[

                {
                    'kids':i['Kids'],
                    'male':i['Male'],
                    'female':i['Female']

                }

                for i in massage_price_list
            ],

            'makeup':[

                {

                    'kids':i['Kids'],
                    'male':i['Male'],
                    'female':i['Female']
                }

                for i in makeup_price_list
            ]
        }


        return JsonResponse(data,safe=False)
    


def change_haircut_price(request):

    if request.method=='POST':

        kids_price = request.POST.get('hair_kids')

        male_price = request.POST.get('hair_male')

        female_price = request.POST.get('hair_female')

        haircut_price_change.objects.all().delete()

        data = haircut_price_change.objects.create(Kids=kids_price,Male=male_price,Female=female_price)

        data.save()

        return JsonResponse({'message':'Price updated successfully'})
    
    else:

        return JsonResponse({'error':'not a post request'})
    

def change_massage_price(request):


    if request.method=='POST':

        kids_price = request.POST.get('massage_kids')

        male_price = request.POST.get('massage_male')

        female_price = request.POST.get('massage_female')

        massage_price_change.objects.all().delete()

        data = massage_price_change.objects.create(Kids=kids_price,Male=male_price,Female=female_price)

        data.save()

        return JsonResponse({'message':'Price updated successfully'})
     
    return JsonResponse({'error':'not a post request'})
     



def change_makeup_price(request):


    if request.method=='POST':

        kids_price = request.POST.get('makeup_kids')

        male_price = request.POST.get('makeup_male')

        female_price = request.POST.get('makeup_female')

        makeup_price_change.objects.all().delete()

        data = makeup_price_change.objects.create(Kids=kids_price,Male=male_price,Female=female_price)

        data.save()

        return JsonResponse({'message':'Price updated successfully'})
     
    return JsonResponse({'error':'not a post request'})


