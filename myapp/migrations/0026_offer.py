# Generated by Django 4.1.5 on 2023-05-24 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0025_gallery'),
    ]

    operations = [
        migrations.CreateModel(
            name='offer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Haircut', models.CharField(max_length=10)),
                ('Massage', models.CharField(max_length=10)),
                ('Makeup', models.CharField(max_length=10)),
            ],
        ),
    ]
