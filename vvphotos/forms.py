# -*- coding: utf-8 -*-

from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from codemirror2.widgets import CodeMirrorEditor
from mptt.forms import TreeNodeChoiceField
from vvphotos.models import Album


class AlbumForm(forms.ModelForm):
    class Meta:
        model = Album
        fields = ['title', 'slug', 'parent', 'image', 'status', 'editor']
        widgets = {'status': forms.RadioSelect, 'description': CKEditorUploadingWidget(config_name='default')}
