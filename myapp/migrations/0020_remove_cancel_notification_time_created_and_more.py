# Generated by Django 4.1.5 on 2023-05-16 14:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0019_alter_cancel_notification_time_created_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cancel_notification',
            name='time_created',
        ),
        migrations.RemoveField(
            model_name='success_notification',
            name='time_created',
        ),
    ]
