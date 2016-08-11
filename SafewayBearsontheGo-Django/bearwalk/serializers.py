from rest_framework import serializers
from bearwalk.models import User,Group

class GroupSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    current_location = serializers.CharField(required=False, allow_blank=True, max_length=200)
    destination = serializers.CharField(required=False, allow_blank=True, max_length=200)
    users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Group
        fields = ('current_location', 'destination', 'users')

class UserSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    username = serializers.CharField(required=False, allow_blank=True, max_length=20)
    password = serializers.CharField(required=False, allow_blank=True, max_length=20)
    current_location = serializers.CharField(required=False, allow_blank=True, max_length=200)
    destination = serializers.CharField(required=False, allow_blank=True, max_length=200)
