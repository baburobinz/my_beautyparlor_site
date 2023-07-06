
from datetime import datetime,time
from django.db import models
from django.utils.timezone import now

# Create your models here.
class user_details(models.Model):
    Username = models.CharField(max_length=20)
    Mobile = models.CharField(max_length=10)
    Email = models.EmailField()
    Password = models.CharField(max_length=15)
    def __str__(self):
        return self.Username

class admin_details(models.Model):
    Username = models.CharField(max_length=20)
    Password = models.CharField(max_length=10)
    def __str__(self):
        return self.Username



class booking_details(models.Model):
    # id = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=50)
    Name = models.CharField(max_length=50)
    Mobile = models.CharField(max_length=10)
    Category = models.CharField(max_length=20)
    Service = models.CharField(max_length=20)
    Date = models.DateField()

    
    Slot = models.CharField(max_length=50)
    Token = models.IntegerField(default=1)
    
    def __str__(self):
        return self.Name
   
   


class success_notification(models.Model):

    id = models.AutoField(primary_key=True)

    booking_success = models.CharField(max_length=50)

    time_created = models.DateTimeField(default=now)


    
class cancel_notification(models.Model):
    id = models.AutoField(primary_key=True)
    booking_cancelled = models.CharField(max_length=50)
    time_created = models.DateTimeField(default=now)


class booking_details_for_user(models.Model):
    # id = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=50)
    Name = models.CharField(max_length=50)
    Mobile = models.CharField(max_length=10)
    Category = models.CharField(max_length=20)
    Service = models.CharField(max_length=20)
    Date = models.DateField()

   

    Slot = models.CharField(max_length=50)
    Token = models.IntegerField(default=1)
    
    def __str__(self):
        return self.Name
    

class gallery(models.Model):

    image = models.FileField()



class offer(models.Model):

    Haircut = models.CharField(max_length=10)
    Massage = models.CharField(max_length=10)
    Makeup = models.CharField(max_length=10)


class haircut_price_change(models.Model):

    Kids = models.CharField(max_length=10)

    Male = models.CharField(max_length=10)

    Female = models.CharField(max_length=10)


class makeup_price_change(models.Model):

    Kids = models.CharField(max_length=10)

    Male = models.CharField(max_length=10)

    Female = models.CharField(max_length=10)


class massage_price_change(models.Model):

    Kids = models.CharField(max_length=10)

    Male = models.CharField(max_length=10)

    Female = models.CharField(max_length=10)


   

    
   
