from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Favorite
from major_app.models import Major

@login_required
def favorites_list(request):
    favorites = Favorite.objects.filter(user=request.user)
    return render(request, 'favorite_app/favorites_list.html', {'favorites': favorites})

@login_required
def add_favorite(request, major_id):
    major = get_object_or_404(Major, id=major_id)
    Favorite.objects.get_or_create(user=request.user, major=major)
    return redirect('favorites_list')

@login_required
def remove_favorite(request, major_id):
    favorite = Favorite.objects.filter(user=request.user, major_id=major_id)
    if favorite.exists():
        favorite.delete()
    return redirect('favorites_list')
