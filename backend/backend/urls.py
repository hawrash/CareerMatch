from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect  # Add this

urlpatterns = [
    path('', lambda request: redirect('majors_list')),  # 👈 This redirects to majors list
    path('admin/', admin.site.urls),
    path('api/users/', include('user_app.urls')),
    path('api/majors/', include('major_app.urls')),
    path('api/favorites/', include('favorite_app.urls')),
    path('api/reviews/', include('review_app.urls')),
]
