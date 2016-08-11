from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from bearwalk.models import User,Group
from bearwalk.serializers import UserSerializer, GroupSerializer

# Create your views here.
@api_view(['POST'])
def login(request):
    serializer = UserSerializer(username=request.data.username, password=request.data.password)
