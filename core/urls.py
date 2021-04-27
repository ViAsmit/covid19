from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('covid.urls', namespace='covid')),
    # path('api/', include('covid_api.urls', namespace='covid_api'))
]
