from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from majors.views import MajorViewSet

router = routers.DefaultRouter()
router.register(r'majors', MajorViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('accounts/', include('accounts.urls')),
]
