{% load i18n %}
page('/photos/', function(ctx, next) { app.loadAlbums('{% url "vvphotos" %}') } );
{% include "vvphotos/auto/routes.js" %}