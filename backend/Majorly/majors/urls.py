# majors/urls.py
from django.urls import path
from .views import major_chart

urlpatterns = [
    path('chart/', major_chart, name='major_chart'),
]
