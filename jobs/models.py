from django.db import models

# Create your models here.
class Job(models.Model):
    job_id = models.AutoField
    job_logo = models.ImageField(upload_to="jobs/images", default="")
    job_company = models.CharField(max_length=50)
    job_title = models.CharField(max_length=50)
    job_desc = models.CharField(max_length=200)
    job_listed = models.DateField(default="")
    job_last = models.DateField(default="")

def __str__(self):
    return self.job_company
 