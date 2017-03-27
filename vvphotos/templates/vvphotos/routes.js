{% load i18n %}
page('/photos/', function(ctx, next) { app.loadAlbums('{% url "vvphotos-index" %}') } );
{% include "vvphotos/auto/routes.js" %}