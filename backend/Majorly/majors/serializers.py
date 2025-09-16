# majors/serializers.py
from rest_framework import serializers
from majors.models import Major  # use absolute import to be safe

class MajorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Major
        fields = "__all__"
