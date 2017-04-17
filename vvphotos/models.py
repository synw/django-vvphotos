# -*- coding: utf-8 -*-

from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save, post_delete
from mptt.models import TreeForeignKey, MPTTModel
from filebrowser.fields import FileBrowseField
from vvphotos.conf import USER_MODEL, STATUSES
from vvphotos.signals import build_albums


class BaseModel(models.Model):
    editor = models.ForeignKey(USER_MODEL, null=True, blank=True, related_name='+', on_delete=models.SET_NULL, verbose_name=_(u'Posted by'))
    created = models.DateTimeField(editable=False, null=True, blank=True, auto_now_add=True, verbose_name=_(u'Created'))
    edited = models.DateTimeField(editable=False, null=True, blank=True, auto_now=True, verbose_name=_(u'Edited'))
    
    class Meta:
        abstract = True


class Album(MPTTModel, BaseModel):
    slug = models.SlugField(max_length=25, unique=True)
    title = models.CharField(max_length=255, blank=True, verbose_name=_(u'Title'))
    parent = TreeForeignKey('self', null=True, blank=True, related_name=u'children', verbose_name=_(u'Parent category'))
    image = models.ImageField(null=True, blank=True, upload_to='categories', verbose_name=_(u"Navigation image"))
    description = models.TextField(blank=True, verbose_name=_(u'Description'))
    status = models.CharField(max_length=20, verbose_name=_(u'Status'), choices=STATUSES, default=STATUSES[1][0])
    url = models.URLField(verbose_name=_(u"Url"), editable=False)
    
    class Meta:
        verbose_name=_(u'Album')
        verbose_name_plural = _(u'Albums')

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return "/photos/"+self.slug+"/"
    
    def save(self, *args, **kwargs):
        if not self.pk:
            self.url = self.get_absolute_url()
        return super(Album, self).save(*args, **kwargs)


class Photo(BaseModel):
    title = models.CharField(max_length=250, blank=True, verbose_name=_(u'Title'))
    image = FileBrowseField("Image", max_length=200, directory="photos_thumbs/", extensions=[".jpg", "png"], null=True)
    album = models.ForeignKey(Album, related_name="photos", verbose_name=_(u'Album'))
    order = models.PositiveSmallIntegerField(null=True, verbose_name=_(u'Order'))
    
    class Meta:
        ordering = ('order', 'album', 'created')
        verbose_name = _(u'Photo')
        verbose_name_plural = _(u'Photos')

    def __str__(self):
        return self.image.url


post_save.connect(build_albums, sender=Album)
post_delete.connect(build_albums, sender=Album)
