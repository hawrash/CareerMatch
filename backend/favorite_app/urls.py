from django.urls import path
from . import views

urlpatterns = [
    path('favorites/', views.favorites_list, name='favorites_list'),
    path('favorites/add/<int:major_id>/', views.add_favorite, name='add_favorite'),
    path('favorites/remove/<int:major_id>/', views.remove_favorite, name='remove_favorite'),
]
