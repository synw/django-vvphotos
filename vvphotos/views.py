# -*- coding: utf-8 -*-

from rest_framework.views import APIView
from rest_framework.response import Response
from vvphotos.models import Album
from vvphotos.serializers import AlbumSerializer, AlbumsSerializer


class AlbumRestView(APIView):
    
    def get_object(self, id):
        try:
            q = Album.objects.filter(slug=self.kwargs['slug'], status="published").prefetch_related("photos", 'children')[0]
        except Album.DoesNotExist:
            pass
        return q
    
    def get(self, request, *args, **kwargs):
        album = self.get_object(id)
        serializer = AlbumSerializer(album)
        return Response(serializer.data)

class AlbumsRestView(APIView):
    
    def get_object(self, id):
        return Album.objects.filter(status="published", level__lt=1)
    
    def get(self, request, *args, **kwargs):
        album = self.get_object(id)
        serializer = AlbumsSerializer(album, many=True)
        return Response(serializer.data)

