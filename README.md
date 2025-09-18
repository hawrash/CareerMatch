# Majorly

<img width="408" height="612" alt="WhatsApp_Image_2025-09-13_at_10 24 41_PM-removebg-preview" src="https://github.com/user-attachments/assets/a8f97ee7-fb3b-41ab-8520-904c81a0118d" />

**Majorly** is an engaging and interactive career discovery platform designed for students and job seekers to explore academic majors and career paths based on their interests, hobbies, and preferences.

---

## 🧭 Project Overview

Majorly helps bridge the gap between students' passions and real-world opportunities. Users can explore majors through visual dashboards, receive recommendations, and dive deep into details such as potential job roles, universities, and market demand.

---

## ✨ Features

🔍 **Search and Discover:**

- Search bar for quick access to any major.
- Explore detailed information about academic disciplines.

📊 **Dashboard View:**

- Pie chart representation of interest areas.
- Detailed cards showing:
  - Name of the major
  - About the major
  - Career prospects
  - University availability (local and international)

🌟 **Personalized Recommendations:**

- Input hobbies/interests to get matched with suitable majors.
- Save and track favorite majors.

👤 **User Profiles:**

- View and manage saved majors.
- Personalized career planning roadmap.

📌 **Ratings and Reviews:**

- Rate majors based on personal interest or satisfaction.
- Read reviews from other users.

🧠 **AI Matching (Coming Soon):**

- Smart algorithm that predicts best-fit majors using AI/NLP.

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript (basic static assets)
- **Backend:** Python (Flask)
- **Database:** SQLite (via local JSON and session for demo)
- **Future Tech:** AI/NLP for smart matching & recommendation

---

## 🚀 Installation (Backend Flask)

```bash
# 1) Clone the repo
git clone https://github.com/yourusername/CareerMatch.git
cd CareerMatch

# 2) Create and activate a virtual environment
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
# source venv/bin/activate

# 3) Install backend dependencies
cd backend
pip install -r requirements.txt

# 4) Run the Flask dev server
python app.py

# 5) Open the app
# Flask default
http://127.0.0.1:5000
```

---

## 🧪 Usage

1. Register or log in to your profile.
2. Enter your hobbies, favorite subjects, and interests.
3. Get personalized major suggestions.
4. Click on any major to see:
   - Program overview
   - Universities offering it
   - Career prospects
   - Job market insights
5. Save majors to your profile dashboard.
6. Rate and review majors to help others.

---

## 🔮 Future Enhancements

- 🎯 AI-driven interest matching engine
- 📱 Responsive mobile-first design
- 🌐 Multi-language support
- 🔗 Integration with LinkedIn and job boards
- 📚 Blog or resource section for career advice

---

## Backend (this repo)

```bash
backend/
├── app.py                  # Flask app entrypoint and routes
├── requirements.txt        # Python dependencies
├── majors.json             # Majors dataset (demo)
├── db.sqlite3              # (optional) not used by Flask routes currently
├── templates/
│   ├── base.html           # Global layout (navbar + footer)
│   ├── navbar.html
│   ├── footer.html
│   ├── landing.html
│   ├── home.html
│   ├── search.html
│   ├── suggest.html
│   ├── majorsview.html
│   ├── profile.html
│   ├── favorites.html
│   └── history.html
├── static/
│   ├── logo.png
│   ├── favorite.png
│   ├── history.png
│   ├── logout.png
│   ├── profile.png
│   ├── majorsview.css      # Styles for majors detail screen
│   └── css/
│       ├── base.css        # Design tokens + global styles
│       ├── navbar.css
│       ├── footer.css
│       ├── home.css
│       ├── login.css
│       ├── landing.css
│       ├── profile.css
│       ├── favorites.css
│       ├── history.css
│       ├── signup.css
│       └── search_bar.css
└── user.json               # Demo user store
```



## Frontend (optional stub)

```bash
frontend/
├── package.json
└── public/
    └── index.html
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

For feedback or collaboration:

**Your Name**  
📧 your.email@example.com  
🔗 GitHub: https://github.com/yourusername
