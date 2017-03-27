# -*- coding: utf-8 -*-

from django.conf.urls import url
from vvphotos.views import AlbumRestView, AlbumsRestView


urlpatterns = [
    url(r'^x/album/(?P<slug>[-_\w]+)/$', AlbumRestView.as_view(), name="vvphotos-album"),
    url(r'^x/$', AlbumsRestView.as_view(), name="vvphotos-index"),
    ]
