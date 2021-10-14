from django.urls import path
from .views import ChatRoomListAPIView, ChatRoomDetailAPIView

urlpatterns = [
    path("chatrooms/", ChatRoomListAPIView.as_view()),
    path("chatrooms/<int:pk>", ChatRoomDetailAPIView.as_view()),
    ]