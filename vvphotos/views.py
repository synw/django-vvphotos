# -*- coding: utf-8 -*-

from rest_framework.views import APIView
from rest_framework.response import Response
from vvphotos.models import Album
from vvphotos.serializers import AlbumsSerializer, AlbumSerializer


class AlbumRestView(APIView):
    
    def get_object(self, id):
        album = Album.objects.get(slug=self.kwargs['slug'], status="published")
        q = album
        descendants = album.get_descendants().filter(status="published")
        is_leaf = True
        if len(descendants) > 0:
            is_leaf = False
            q = descendants
        return q, is_leaf
    
    def get(self, request, *args, **kwargs):
        album, is_leaf = self.get_object(id)
        if is_leaf == True:
            serializer = AlbumSerializer(album)
        else:
            serializer = AlbumsSerializer(album, many=True)
        return Response(serializer.data)
    

class AlbumsRestView(APIView):
    
    def get_object(self, id):
        return Album.objects.filter(status="published", level__lt=1)
    
    def get(self, request, *args, **kwargs):
        album = self.get_object(id)
        serializer = AlbumsSerializer(album, many=True)
        return Response(serializer.data)
