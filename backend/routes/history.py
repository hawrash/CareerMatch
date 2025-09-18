# import json
# import os
# from flask import Flask, redirect, url_for, render_template, request, make_response

# app = Flask(__name__)

# # Load majors.json safely
# BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# majors_path = os.path.join(BASE_DIR, 'majors.json')
# with open(majors_path, encoding='utf-8') as f:
#     majors_data = json.load(f)

# @app.route('/history', methods=['GET', 'POST'])
# def history():
#     if request.method == 'POST':  # user clicked "Clear history"
#         return clear_history()

#     stored_history = get_stored_history()
#     return render_template('history.html', history=stored_history)

# def get_stored_history():
#     """Load search history from cookies (JSON array)."""
#     return json.loads(request.cookies.get('searchHistory', '[]'))

# def clear_history():
#     """Clear search history by expiring cookie."""
#     response = make_response(redirect(url_for('history')))
#     response.set_cookie('searchHistory', '', expires=0)
#     return response

# @app.route('/majorsview/<int:id>')
# def majors_view(id):
#     major = next((m for m in majors_data if m['pk'] == id), None)
#     return render_template('majors_view.html', major=major)

# @app.route('/search/<term>')
# def handle_click(term):
#     """Simulate searching and redirecting to major details."""
#     major = next((m for m in majors_data if m['fields']['name'].lower() == term.lower()), None)
#     if major:
#         return redirect(url_for('majors_view', id=major['pk']))
#     return redirect(url_for('history'))

# if __name__ == '__main__':
#     app.run(debug=True)
