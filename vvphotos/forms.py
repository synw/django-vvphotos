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
        widgets = {'status': forms.RadioSelect, 'description': CodeMirrorEditor(options={
                                     'mode':'htmlmixed',
                                     'width':'1170px',
                                     'indentWithTabs':'true', 
                                     #'indentUnit' : '4',
                                     'lineNumbers':'true',
                                     'autofocus':'true',
                                     #'highlightSelectionMatches': '{showToken: /\w/, annotateScrollbar: true}',
                                     'styleActiveLine': 'true',
                                     'autoCloseTags': 'true',
                                     'theme':'blackboard',
                                     #'fullScreen':'true',
                                     },
                                     script_template='codemirror2/codemirror_script_vvpages.html',
                                     modes=['css', 'xml', 'javascript', 'htmlmixed'],
                                     )
                    }
