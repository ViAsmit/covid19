from covid_api.views import ShopList, ShopDetail, ShopSearch
from django.urls import path
from django.views.generic import TemplateView

app_name = 'covid_api'

urlpatterns = [
    path('', ShopList.as_view(), name='listshop'),
    path('shop/<int:pk>', ShopDetail.as_view(), name='detailshop'),
    path('search/', ShopSearch.as_view(), name='searchshop')
]
