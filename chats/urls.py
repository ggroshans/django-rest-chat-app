from django.urls import path
from . import views

urlpatterns = [
    path("chatrooms/", views.ChatRoomListAPIView.as_view()),
    path("chatrooms/<int:chatroom>/", views.ChatRoomDetailAPIView.as_view()),
    path("chatrooms/<int:chatroom>/messages/", views.MessageListAPIView.as_view())
    ]