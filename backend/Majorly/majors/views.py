from rest_framework import viewsets
from .models import Major
from .serializers import MajorSerializer

class MajorViewSet(viewsets.ModelViewSet):
    queryset = Major.objects.all()
    serializer_class = MajorSerializer
