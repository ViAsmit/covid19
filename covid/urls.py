from django.urls import path
from django.views.generic import TemplateView
from .views import index

app_name = 'covid'

urlpatterns = [
    path('', index, name='index'),
]
