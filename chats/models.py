from django.db import models
from django.db.models.fields import CharField

# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length = 255)

    def __str__(self):
        return self.name

class Message(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.CharField(max_length=25)
    body = models.CharField(max_length=140)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    class Meta:
        ordering = ['created_at']
    
    def __str__(self):
        return self.author