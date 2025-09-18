# # signup.py
# from flask import Blueprint, render_template, request, redirect, url_for, session
# import json

# signup_bp = Blueprint('signup', __name__)

# USER_FILE = "user.json"

# @signup_bp.route('/signup', methods=['GET', 'POST'])
# def signup():
#     error = None
#     if request.method == 'POST':
#         username = request.form.get('username')
#         email = request.form.get('email')
#         password = request.form.get('password')

#         if not username or not email or not password:
#             error = "All fields required"
#         else:
#             user_data = {"username": username, "email": email, "password": password}
#             with open(USER_FILE, "w") as f:
#                 json.dump(user_data, f)
#             return redirect(url_for('login.login'))
#     return render_template('signup.html', error=error)
