# -*- coding: utf-8 -*-

from django.core.management import call_command


def build_albums(sender, instance, created, **kwargs):
    call_command('build_photos_routes')
    return
