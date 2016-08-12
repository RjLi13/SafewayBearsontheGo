from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from bearwalk.models import User,Group
from bearwalk.serializers import UserSerializer, GroupSerializer

# Create your views here.
@api_view(['POST'])
def register(request, format=None):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request, format=None):
    users = User.objects.all()
    for user in users:
        if user.username == request.data['username'] and user.password == request.data['password']:
            return Response("Logged in", status=status.HTTP_200_OK)

    return Response("Failed to login", status=status.HTTP_400_BAD_REQUEST)

