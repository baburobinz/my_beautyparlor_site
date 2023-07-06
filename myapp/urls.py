"""visakh_beauty URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from .views import *

urlpatterns = [

    path('',views.profile),
    path('show_login',views.show_login_page),
    path('signup_page',views.show_sign_up),
    path('registration_completed',views.user_registration),
    path('login',views.login),
    path('logout',views.logout),
    path('change_username',views.change_username),
    path('change_password',views.change_password),
    path('booking',views.booking),
    path('clear_all_booking',views.clear_all_booking),
    path('show_clear',views.show_clear),
    path('show_booking',views.show_booking),
    path('home',views.back_to_home),
    path('booking_latest',views.booking_latest),
    path('booking_oldest',views.booking_oldest),
    path('user_clear_booking',views.user_clear_booking),
    path('cancel_booking/<int:id>',views.cancel_booking),

    path('show_booking_notification',views.show_booking_notification),
    path('notification_count_checker',views.notification_count_checker),
    
    path('success_notificatin_single_delete/<int:id>',views.success_notificatin_single_delete),

    path('cancel_notificatin_single_delete/<int:id>',views.cancel_notificatin_single_delete),
    
    path('clear_all_notification',views.clear_all_notification),

    path('change_admin_username',views.change_admin_username),

    path('change_admin_password',views.change_admin_password),

    path('show_booking_details',views.show_booking_details),

    path('booking_details_sortby_latest',views.booking_details_sortby_latest),

    path('booking_details_sortby_oldest',views.booking_details_sortby_oldest),

    path('booking_details_clear_All',views.booking_details_clear_All),

    path('search_on_date',views.search_on_date),

    path('upload_gallery',views.upload_gallery),

    path('get_gallery_images',views.get_gallery_images),

    path('delete_all_gallery_images',views.delete_all_gallery_images),

    path('delete_individual_gallery_images/<int:id>',views.delete_individual_gallery_images),

    path('get_offer_details',views.get_offer_details),

    path('offer_change',views.offer_change),

    path('get_price_details',views.get_price_details),

    path('change_haircut_price',views.change_haircut_price),

    path('change_massage_price',views.change_massage_price),

    path('change_makeup_price',views.change_makeup_price),

    # path('check_notification_id',views.check_notification_id),

]
