from django.contrib import admin
from django.urls import path
from majors.views import search_major, major_detail, major_chart

urlpatterns = [
    path('admin/', admin.site.urls),

    # Search page
    path('search/', search_major, name='search_major'),

    # Major detail page
    path('major/<int:pk>/', major_detail, name='major_detail'),

    # Majors chart page
    path('majors/chart/', major_chart, name='major_chart'),
]
