from django.db import models
from django.db.models.fields import CharField
from django.conf import settings

# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length = 255)

    def __str__(self):
        return self.name

class Message(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    body = models.CharField(max_length=140)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        ordering = ['created_at']
    
    def __str__(self):
        return self.body[:200]