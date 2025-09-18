# from flask import Flask, render_template, request, redirect, url_for, jsonify
# import json

# app = Flask(__name__)

# # Load majors data once
# with open('backend/majors.json', 'r', encoding='utf-8') as f:
#     majors_data = json.load(f)

# @app.route('/home', methods=['GET', 'POST'])
# def home():
#     hobby_suggestions = []
#     error_message = ''
#     search_result = None

#     if request.method == 'POST':
#         if 'hobby' in request.form:
#             hobby = request.form['hobby'].strip().lower()
#             # Filter majors based on hobby keywords
#             words = [w for w in hobby.split() if w]
#             matched_majors = []
#             for major in majors_data:
#                 fields = major['fields']
#                 if any(word in str(value).lower() for word in words for value in fields.values()):
#                     matched_majors.append(fields['name'])
#             hobby_suggestions = matched_majors or ['General Studies']

#         elif 'search' in request.form:
#             search_term = request.form['search'].strip().lower()
#             matched = next((m for m in majors_data if m['fields']['name'].lower() == search_term), None)
#             if matched:
#                 return redirect(url_for('majorsview', id=matched['pk']))
#             else:
#                 error_message = 'Major not found!'

#     return render_template(
#         'home.html',
#         hobby_suggestions=hobby_suggestions,
#         error_message=error_message
#     )

# @app.route('/majorsview/<int:id>')
# def majors_view(id):
#     return f"Majors View Page for ID: {id}"

# if __name__ == '__main__':
#     app.run(debug=True)
