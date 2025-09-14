from django.shortcuts import render
from .models import Review

def reviews_list(request):
    reviews = Review.objects.all()
    return render(request, 'reviews/reviews_list.html', {'reviews': reviews})
