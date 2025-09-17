import os
import json
from django.shortcuts import render
from django.http import Http404

def majors_list(request):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_dir, 'data', 'majors.json')

    with open(json_path, 'r', encoding='utf-8') as f:
        majors = json.load(f)

    return render(request, 'major_app/majors_list.html', {'majors': majors})

def major_detail(request, major_id):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_dir, 'data', 'majors.json')

    with open(json_path, 'r', encoding='utf-8') as f:
        majors = json.load(f)

    major = next((m for m in majors if m['pk'] == major_id), None)

    if not major:
        raise Http404("Major not found")

    return render(request, 'major_app/major_detail.html', {'major': major['fields']})
