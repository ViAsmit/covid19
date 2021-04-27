from django.db.models.query import QuerySet
from django.shortcuts import get_object_or_404
from covid.models import Shop
from .serializers import ShopSerializer
from rest_framework import viewsets, filters, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView


class ShopList(generics.ListCreateAPIView):
    serializer_class = ShopSerializer
    queryset = Shop.objects.all()


class ShopDetail(generics.RetrieveAPIView):

    serializer_class = ShopSerializer

    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Shop, id=item)


class ShopSearch(generics.ListAPIView):
    serializer_class = ShopSerializer

    def get_queryset(self):
        queryset = Shop.objects.all()
        item = self.request.query_params.get('city')
        if item is not None:
            queryset = queryset.filter(city=item)
            return queryset

        item = self.request.query_params.get('state')
        if item is not None:
            queryset = queryset.filter(state=item)
            return queryset

        return queryset
