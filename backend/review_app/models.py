from django.db import models
from django.contrib.auth.models import User
from major_app.models import Major  # adjust import if necessary

class Review(models.Model):
    major = models.ForeignKey(Major, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])  # 1 to 5 stars
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('major', 'user')  # One review per user per major

    def __str__(self):
        return f"{self.user.username} - {self.major.name} ({self.rating})"
