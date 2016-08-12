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

    def create(self, validated_data):
        """
        Create and return a new `Group` instance, given the validated data.
        """
        return Group.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.current_location = validated_data.get('current_location', instance.current_location)
        instance.destination = validated_data.get('destination', instance.destination)
        instance.save()
        return instance


class UserSerializer(serializers.Serializer):
    pk = serializers.IntegerField(read_only=True)
    username = serializers.CharField(required=False, allow_blank=True, max_length=20)
    password = serializers.CharField(required=False, allow_blank=True, max_length=20)
    current_location = serializers.CharField(required=False, allow_blank=True, max_length=200)
    destination = serializers.CharField(required=False, allow_blank=True, max_length=200)

    def create(self, validated_data):
        """
        Create and return a new `User` instance, given the validated data.
        """
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.password = validated_data.get('password', instance.password)
        instance.current_location = validated_data.get('current_location', instance.current_location)
        instance.destination = validated_data.get('destination', instance.destination)
        instance.group = validated_data.get('group', instance.group)
        instance.save()
        return instance