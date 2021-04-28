from rest_framework import serializers
from covid.models import Shop
from django.conf import settings


class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shop
        fields = ('id', 'name', 'phone', 'city', 'state',
                  'resources', 'special_remarks', 'verified',)
