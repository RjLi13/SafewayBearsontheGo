# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-08-12 05:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bearwalk', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='group',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='users', to='bearwalk.Group'),
        ),
    ]
