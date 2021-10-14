from django.db.models import query
from rest_framework import generics
from .serializers import RoomSerializer, MessageSerializer
from .models import Room, Message


# Create your views here.
 
class ChatRoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
