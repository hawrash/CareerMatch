import os
import json
from flask import Flask, render_template, request, redirect, url_for, session, jsonify, make_response

app = Flask(__name__)
app.secret_key = "1234"

# ----------- Load majors data -----------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MAJOR_FILE = os.path.join(BASE_DIR, "backend", "majors.json")

if os.path.exists(MAJOR_FILE):
    with open(MAJOR_FILE, "r", encoding="utf-8") as f:
        majors_data = json.load(f)
else:
    majors_data = []

# ----------- Helper functions -----------
def get_user():
    return session.get('user')

def save_user(user):
    session['user'] = user

def load_favorites():
    return session.get('favorites', [])

def save_favorites(favs):
    session['favorites'] = favs

def load_history():
    return session.get('search_history', [])

def save_history(history):
    session['search_history'] = history

# ----------- Landing / Auth Routes -----------
@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    USER_FILE = os.path.join(BASE_DIR, "user.json")
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        stored_user = None
        if os.path.exists(USER_FILE):
            with open(USER_FILE, "r") as f:
                stored_user = json.load(f)
        if not stored_user:
            error = "No account found"
        elif stored_user['username'] == username and stored_user['email'] == email and stored_user['password'] == password:
            save_user(stored_user)
            return redirect(url_for('home'))
        else:
            error = "Invalid credentials"
    return render_template('login.html', error=error)

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    error = None
    USER_FILE = os.path.join(BASE_DIR, "user.json")
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        if not username or not email or not password:
            error = "All fields required"
        else:
            user_data = {"username": username, "email": email, "password": password}
            with open(USER_FILE, "w") as f:
                json.dump(user_data, f)
            return redirect(url_for('login'))
    return render_template('signup.html', error=error)

# ----------- Home / Hobby / Search -----------
@app.route('/home', methods=['GET', 'POST'])
def home():
    hobby_suggestions = []
    error_message = ''
    if request.method == 'POST':
        # Hobby suggestions (optional server-side)
        hobby = request.form.get('hobby', '').strip().lower()
        if hobby:
            words = [w for w in hobby.split() if w]
            matched_majors = []
            for major in majors_data:
                fields = major['fields']
                if any(word in str(value).lower() for word in words for value in fields.values()):
                    matched_majors.append(fields['name'])
            hobby_suggestions = matched_majors or ['General Studies']

    return render_template('home.html', hobby_suggestions=hobby_suggestions, error_message=error_message)

# ----------- Majors View / Favorites -----------
@app.route('/majorsview/<int:id>', methods=['GET', 'POST'])
def majors_view(id):
    major = next((m for m in majors_data if m['pk'] == id), None)
    if not major:
        return "Major not found", 404

    favorites = load_favorites()
    is_favorite = id in favorites
    if request.method == 'POST' and 'toggle_favorite' in request.form:
        if is_favorite:
            favorites.remove(id)
        else:
            favorites.append(id)
        save_favorites(favorites)
        return redirect(url_for('majors_view', id=id))

    employment_rate = major['fields'].get('employment_rate', 0)
    circle_color = 'green' if employment_rate >= 80 else 'orange' if employment_rate >= 50 else 'red'

    return render_template('majors_view.html', major=major, is_favorite=is_favorite, employment_rate=employment_rate, circle_color=circle_color)

@app.route('/favorites')
def favorites_view():
    favorites_ids = load_favorites()
    fav_majors = [m for m in majors_data if m['pk'] in favorites_ids]
    return render_template('favorites.html', favorites=fav_majors)

# ----------- Profile -----------
@app.route('/profile', methods=['GET', 'POST'])
def profile():
    error_message = ''
    user = get_user()
    if request.method == 'POST':
        name = request.form.get('name', '').strip()
        email = request.form.get('email', '').strip()
        role = request.form.get('role', '').strip()
        avatar = request.form.get('avatar', '').strip()
        if not name or not email:
            error_message = 'Name and Email are required!'
        else:
            user = {'name': name, 'email': email, 'role': role, 'avatar': avatar}
            save_user(user)
            return redirect(url_for('profile'))
    return render_template('profile.html', user=user, error_message=error_message)

# ----------- History -----------
@app.route('/history', methods=['GET', 'POST'])
def history():
    if request.method == 'POST':
        response = make_response(redirect(url_for('history')))
        response.set_cookie('searchHistory', '', expires=0)
        session['search_history'] = []
        return response
    return render_template('history.html', history=load_history())

# ----------- Suggestion API -----------
@app.route('/suggest')
def suggest():
    query = request.args.get('q', '').strip().lower()
    if not query:
        return jsonify([])

    matched = []
    for m in majors_data:
        fields = m.get('fields', {})
        name = fields.get('name', '')
        about = fields.get('about', '')
        career = fields.get('career_prospects', '')
        universities = fields.get('universities', '')
        if query in name.lower() or query in about.lower() or query in career.lower() or query in universities.lower():
            matched.append({
                'pk': m['pk'],
                'name': name,
                'about': about,
                'career_prospects': career
            })

    return jsonify(matched[:5])

# ----------- Run App -----------
if __name__ == '__main__':
    app.run(debug=True)
