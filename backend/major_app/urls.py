from django.urls import path
from . import views

urlpatterns = [
    path('', views.majors_list, name='majors_list'),
    path('<int:major_id>/', views.major_detail, name='major_detail'),
]
