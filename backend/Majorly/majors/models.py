# majors/models.py
from django.db import models

class Major(models.Model):
    name = models.CharField(max_length=200, unique=True)
    description = models.TextField()
    career_prospects = models.TextField()
    universities = models.TextField()
    
    # New fields
    entry_level_salary = models.IntegerField(default=0)   # in BHD
    mid_level_salary = models.IntegerField(default=0)     # in BHD
    senior_level_salary = models.IntegerField(default=0)  # in BHD
    employability_rate = models.IntegerField(default=70)  # 0-100%, probability of getting a job quickly

    def __str__(self):
        return self.name

    # Optional helper methods to show salary with BHD
    def entry_salary_bhd(self):
        return f"{self.entry_level_salary} BHD"

    def mid_salary_bhd(self):
        return f"{self.mid_level_salary} BHD"

    def senior_salary_bhd(self):
        return f"{self.senior_level_salary} BHD"
