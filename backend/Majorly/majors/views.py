# majors/views.py
from django.shortcuts import render
from .models import Major

def major_chart(request):
    majors = Major.objects.all()

    # Prepare data for chart
    names = [m.name for m in majors]
    counts = [m.students_count for m in majors]  # or any numeric field

    return render(request, "majors/chart.html", {
        "names": names,
        "counts": counts
    })
