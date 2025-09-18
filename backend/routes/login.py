# # login.py
# from flask import Blueprint, render_template, request, redirect, url_for, session
# import json
# import os

# login_bp = Blueprint('login', __name__)
# USER_FILE = "user.json"

# @login_bp.route('/login', methods=['GET', 'POST'])
# def login():
#     error = None
#     if request.method == 'POST':
#         username = request.form.get('username')
#         email = request.form.get('email')
#         password = request.form.get('password')

#         if os.path.exists(USER_FILE):
#             with open(USER_FILE, "r") as f:
#                 stored_user = json.load(f)
#         else:
#             stored_user = None

#         if not stored_user:
#             error = "No account found"
#         else:
#             username_match = stored_user['username'] == username
#             email_match = stored_user['email'] == email
#             password_match = stored_user['password'] == password
#             if username_match and email_match and password_match:
#                 session['user'] = stored_user
#                 return redirect(url_for('home'))
#             else:
#                 error = "Invalid credentials"

#     return render_template('login.html', error=error)
