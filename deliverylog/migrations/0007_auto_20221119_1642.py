# Generated by Django 3.2.16 on 2022-11-19 16:42

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('deliverylog', '0006_alter_accesslog_created_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='accesslog',
            name='parking_time_limit',
            field=models.TimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='accesslog',
            name='time_in',
            field=models.TimeField(blank=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
