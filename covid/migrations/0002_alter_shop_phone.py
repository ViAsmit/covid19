# Generated by Django 3.2 on 2021-04-28 04:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='phone',
            field=models.CharField(max_length=10),
        ),
    ]
