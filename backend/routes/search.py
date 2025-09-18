# @app.route('/search', methods=['GET', 'POST'])
# @login_required
# def search():
#     majors = load_majors()
#     results = []       # For suggestions
#     query = ""         # The current input
#     message = ""       # Error message if not found

#     if request.method == 'POST':
#         query = request.form.get('searchTerm', '').strip()
#         matched = next((m for m in majors if m['name'].lower() == query.lower()), None)
#         if matched:
#             # Save to session history
#             history = session.get('search_history', [])
#             if query not in [h.lower() for h in history]:
#                 history.append(query)
#             session['search_history'] = history

#             return redirect(url_for('majors_view', id=matched['id']))
#         else:
#             message = "Major not found!"

#     # For live suggestions while typing (optional: AJAX can call /search/suggest)
#     query_param = request.args.get('q', '').strip().lower()
#     if query_param:
#         results = [m for m in majors if query_param in m['name'].lower()]

#     return render_template(
#         'search.html',
#         results=results,
#         query=query,
#         message=message,
#         search_history=session.get('search_history', [])
#     )
