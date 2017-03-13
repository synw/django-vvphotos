# -*- coding: utf-8 -*-

from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User


USER_MODEL = getattr(settings, 'AUTH_USER_MODEL', User)

default_statuses =  [
                     ("pending", _(u'Pending')),
                     ("published", _(u'Published')),
                     ("unpublished", _(u'Unpublished')),
                     ]

STATUSES = getattr(settings, 'MBASE_STATUSES', default_statuses)
