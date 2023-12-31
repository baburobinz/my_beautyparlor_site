# Generated by Django 4.1.5 on 2023-05-16 17:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0021_cancel_notification_time_created_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cancel_notification',
            name='time_created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='success_notification',
            name='time_created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
