from django.db import models

class Major(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    career_prospects = models.TextField()
    universities = models.TextField()

    def __str__(self):
        return self.name
