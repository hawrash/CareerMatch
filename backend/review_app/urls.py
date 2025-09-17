from django.urls import path
from . import views

urlpatterns = [
    path('<int:major_id>/', views.reviews_list, name='reviews_list'),
    path('<int:major_id>/add/', views.add_review, name='add_review'),
]
