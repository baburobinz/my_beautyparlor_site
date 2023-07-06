from django.contrib import admin
from .models import*

# Register your models here.

@admin.register(user_details)
class user_details_admin(admin.ModelAdmin):
    readonly_fields = ['Username','Mobile','Email','Password']
admin.site.register(booking_details)

admin.site.register(admin_details)

admin.site.register(success_notification)

admin.site.register(cancel_notification)
admin.site.register(booking_details_for_user)

admin.site.register(gallery)

admin.site.register(offer)

admin.site.register(haircut_price_change)

admin.site.register(massage_price_change)

admin.site.register(makeup_price_change)