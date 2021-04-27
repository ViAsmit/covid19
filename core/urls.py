from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('covid.urls', namespace='covid')),
    path('api/', include('covid_api.urls', namespace='covid_api')),
    path('', index, name='index'),
    re_path(r'^(?:.*)/?$', index),
]
