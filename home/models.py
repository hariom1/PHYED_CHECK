# Create your models here.
from django.db import models
from datetime import datetime

class Contact_us(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateTimeField(default=datetime.now, blank=True)
    email = models.EmailField(max_length=254)
    subject = models.CharField(max_length=100)
    message = models.CharField(max_length=1000000)