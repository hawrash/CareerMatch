# # majors/views.py
# from django.shortcuts import render, get_object_or_404, redirect
# from .models import Major

# def major_detail(request, pk):
#     major = get_object_or_404(Major, pk=pk)

#     # --- Track search history (last 10) ---
#     search_history = request.session.get('search_history', [])
#     if major.name in search_history:
#         search_history.remove(major.name)
#     search_history.insert(0, major.name)
#     search_history = search_history[:10]
#     request.session['search_history'] = search_history

#     # --- Handle favorites ---
#     favorites = request.session.get('favorites', [])
#     is_favorite = major.pk in favorites

#     if request.method == 'POST' and 'toggle_favorite' in request.POST:
#         if is_favorite:
#             favorites.remove(major.pk)
#             is_favorite = False
#         else:
#             favorites.append(major.pk)
#             is_favorite = True
#         request.session['favorites'] = favorites
#         return redirect('major_detail', pk=major.pk)

#     # --- Employment rate with safe default ---
#     employment_rate = major.employment_rate if major.employment_rate is not None else 0

#     if employment_rate >= 80:
#         circle_color = 'green'
#     elif employment_rate >= 50:
#         circle_color = 'orange'
#     else:
#         circle_color = 'red'

#     context = {
#         'major': major,
#         'is_favorite': is_favorite,
#         'employment_rate': employment_rate,
#         'circle_color': circle_color,
#     }

#     return render(request, 'majors/majorsview.html', context)
