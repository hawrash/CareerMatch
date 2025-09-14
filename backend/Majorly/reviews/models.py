from django.db import models
from django.contrib.auth.models import User
from majors.models import Major

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    major = models.ForeignKey(Major, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
