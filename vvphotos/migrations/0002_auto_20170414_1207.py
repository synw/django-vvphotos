# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-04-14 12:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vvphotos', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='categories', verbose_name='Navigation image'),
        ),
        migrations.AlterField(
            model_name='album',
            name='status',
            field=models.CharField(choices=[('pending', 'Pending'), ('published', 'Published'), ('unpublished', 'Unpublished')], default='published', max_length=20, verbose_name='Status'),
        ),
        migrations.AlterField(
            model_name='photo',
            name='image',
            field=models.ImageField(upload_to='photos_thumbs', verbose_name='Image'),
        ),
    ]
