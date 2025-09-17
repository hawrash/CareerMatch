from django.db import models

class Major(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    category = models.CharField(max_length=100)  # e.g. "Engineering", "Arts"
    career_prospects = models.TextField()
    universities = models.TextField(help_text="Comma-separated list")

    def __str__(self):
        return self.name
