# -*- coding: utf-8 -*-

from django.utils.translation import ugettext_lazy as _
from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from vvphotos.models import Album, Photo
from vvphotos.forms import AlbumForm


class PhotoInline(admin.TabularInline):
    model = Photo
    exclude = ("created", "edited", "editor")
    extra = 0


@admin.register(Album)    
class AlbumAdmin(MPTTModelAdmin):
    form = AlbumForm
    date_hierarchy = 'edited'
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ['editor']
    list_display = ['title', 'parent', 'edited', 'editor']
    list_filter = ['status', 'created','edited']
    search_fields = ['title', 'editor__username']
    mptt_level_indent = 30
    save_on_top = True
    list_select_related = ['editor']
    inlines = [PhotoInline]
    fieldsets = (
            (None, {
                'fields': (('title','slug',),)
            }),
            (None, {
                'fields': (('parent','status',), ('image',))
            }),
            (_(u"Description"), {
                'classes': ('collapse',),
                'fields': (('description',),)
            }),
            )
    
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'editor', None) is None:
            obj.editor = request.user
        obj.save()


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    date_hierarchy = 'created'
    list_per_page = 30
    readonly_fields = ['editor']
    list_display = ['title', 'image', 'album', 'order']
    list_select_related = ["album"]
    list_filter = ['created', 'edited']
    search_fields = ['title']
    
    def save_model(self, request, obj, form, change):
        if getattr(obj, 'editor', None) is None:
            obj.editor = request.user
        obj.save()
