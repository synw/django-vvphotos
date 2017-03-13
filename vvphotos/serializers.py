# -*- coding: utf-8 -*-

from django.contrib.contenttypes.models import ContentType
from rest_framework import serializers
from vvphotos.models import Album


class AlbumSerializer(serializers.ModelSerializer):

    class Meta:
        model = Album
        fields = read_only_fields = ["slug", "title", "parent", "image", "description", "photos"]
        depth = 1
        
class AlbumsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Album
        fields = read_only_fields = ["slug", "title", "parent", "image", "description"]
