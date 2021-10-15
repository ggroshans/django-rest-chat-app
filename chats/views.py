from django.shortcuts import get_object_or_404
from rest_framework import generics
from .serializers import RoomSerializer, MessageSerializer
from .models import Room, Message


# Create your views here.
 
class ChatRoomListAPIView(generics.ListCreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    
class ChatRoomDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class MessageListAPIView(generics.ListCreateAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        room_instance = self.kwargs['chatroom']
        return Message.objects.filter(room=room_instance)
    
    def perform_create(self,serializer):
        room_instance = get_object_or_404(Room, id=self.kwargs['chatroom'])
        serializer.save(room=room_instance)

# class MessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = MessageSerializer
    