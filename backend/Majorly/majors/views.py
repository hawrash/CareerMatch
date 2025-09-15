from django.shortcuts import render
from .models import Major

def search_major(request):
    query = request.GET.get('q', '').strip()
    major = None
    not_found = False

    if query:
        try:
            # Exact case-insensitive match
            major = Major.objects.get(name__iexact=query)
        except Major.DoesNotExist:
            not_found = True

    context = {
        'query': query,
        'major': major,
        'not_found': not_found
    }
    return render(request, 'majors/search_results.html', context)
