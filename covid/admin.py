from django.contrib import admin
from . import models


@admin.register(models.Shop)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'city', 'state', 'verified')


# admin.site.register(models.Category)
