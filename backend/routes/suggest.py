# # suggest.py
# from flask import Blueprint, request, jsonify
# import json
# import os

# suggest_bp = Blueprint('suggest', __name__)

# MAJOR_FILE = os.path.join("backend", "majors.json")

# # Load majors once
# if os.path.exists(MAJOR_FILE):
#     with open(MAJOR_FILE, "r", encoding="utf-8") as f:
#         majors_data = json.load(f)
# else:
#     majors_data = []

# # /suggest route to return JSON suggestions
# @suggest_bp.route('/suggest')
# def suggest():
#     query = request.args.get('q', '').strip().lower()
#     if not query:
#         return jsonify([])

#     matched = []
#     for m in majors_data:
#         name = m['fields']['name']
#         if query in name.lower():
#             matched.append({
#                 'pk': m['pk'],
#                 'name': name
#             })

#     return jsonify(matched)
