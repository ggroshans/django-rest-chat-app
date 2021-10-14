from django.shortcuts import get_object_or_404
from rest_framework import generics
from .serializers import RoomSerializer, MessageSerializer
from .models import Room, Message


# Create your views here.
 
class ChatRoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
class ChatRoomDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class MessageListAPIView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        room_instance = self.kwargs['chatroom']
        return Message.objects.filter(room=room_instance)

    