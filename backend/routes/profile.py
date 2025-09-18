# from flask import Flask, render_template, request, session, redirect, url_for

# app = Flask(__name__)
# app.secret_key = "your_secret_key"

# @app.route('/profile', methods=['GET', 'POST'])
# def profile():
#     error_message = ''
#     user = session.get('user')  # Load user from session

#     if request.method == 'POST':
#         # Get form data
#         name = request.form.get('name', '').strip()
#         email = request.form.get('email', '').strip()
#         role = request.form.get('role', '').strip()
#         avatar = request.form.get('avatar', '').strip()

#         if not name or not email:
#             error_message = 'Name and Email are required!'
#         else:
#             user = {
#                 'name': name,
#                 'email': email,
#                 'role': role,
#                 'avatar': avatar
#             }
#             session['user'] = user  # Save user in session
#             return redirect(url_for('profile'))  # Reload page to show updated profile

#     return render_template('profile.html', user=user, error_message=error_message)

# if __name__ == "__main__":
#     app.run(debug=True)
