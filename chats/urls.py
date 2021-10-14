from django.urls import path
from .views import ChatRoomListAPIView

urlpatterns = [
    path("chatrooms/", ChatRoomListAPIView.as_view())
    ]