from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Group(models.Model):
    current_location = models.CharField(max_length=200, blank=True)
    destination = models.CharField(max_length=200, blank=True)


class User(models.Model):
    username =  models.CharField(max_length=20, blank=True)
    password = models.CharField(max_length=20, blank=True)
    destination = models.CharField(max_length=200, blank=True)
    current_location = models.CharField(max_length=200, blank=True)
    group =  models.ForeignKey(Group, on_delete=models.CASCADE, related_name='users', null=True)