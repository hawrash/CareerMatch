from django.db import models
from django.contrib.auth.models import User
from major_app.models import Major  # assuming your Major model is here

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    major = models.ForeignKey(Major, on_delete=models.CASCADE)
    added_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.major.name}"
