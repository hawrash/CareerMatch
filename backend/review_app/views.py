from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Review
from .forms import ReviewForm
from major_app.models import Major

def reviews_list(request, major_id):
    major = get_object_or_404(Major, id=major_id)
    reviews = major.reviews.all()
    return render(request, 'review_app/reviews_list.html', {
        'major': major,
        'reviews': reviews
    })


@login_required
def add_review(request, major_id):
    major = get_object_or_404(Major, id=major_id)
    
    # Check if user already reviewed this major
    existing_review = Review.objects.filter(user=request.user, major=major).first()
    if existing_review:
        return redirect('reviews_list', major_id=major.id)

    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            review = form.save(commit=False)
            review.user = request.user
            review.major = major
            review.save()
            return redirect('reviews_list', major_id=major.id)
    else:
        form = ReviewForm()

    return render(request, 'review_app/add_review.html', {
        'form': form,
        'major': major
    })
