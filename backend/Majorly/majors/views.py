from django.shortcuts import render, get_object_or_404
from .models import Major

# -----------------------------
# Search for a major
# -----------------------------
def search_major(request):
    query = request.GET.get('q', '').strip()
    major = None
    not_found = False

    if query:
        try:
            major = Major.objects.get(name__iexact=query)
        except Major.DoesNotExist:
            not_found = True

    context = {
        'query': query,
        'major': major,
        'not_found': not_found
    }
    return render(request, 'majors/search_results.html', context)

# -----------------------------
# View details of a single major
# -----------------------------
def major_detail(request, pk):
    major = get_object_or_404(Major, pk=pk)
    context = {'major': major}
    return render(request, 'majors/major_detail.html', context)

# -----------------------------
# Chart of majors (example)
# -----------------------------
def major_chart(request):
    majors = Major.objects.all()
    names = [m.name for m in majors]
    counts = [getattr(m, 'students_count', 0) for m in majors]  # adjust field if needed

    context = {
        'names': names,
        'counts': counts
    }
    return render(request, 'majors/chart.html', context)
