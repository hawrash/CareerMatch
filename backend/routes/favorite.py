# import json
# import os

# BASE_KEY = 'favorites'

# def get_user_key():
#     user = json.loads(os.getenv('currentUser', '{}'))
#     return f"{BASE_KEY}_{user['id']}" if user else BASE_KEY

# def load_favorites():
#     try:
#         return json.loads(os.getenv(get_user_key(), '[]'))
#     except:
#         return []

# def save_favorites(lst):
#     os.environ[get_user_key()] = json.dumps(lst)

# class Favorite:
#     def __init__(self):
#         self.favorites = []
#         self.update_favorites()

#     def update_favorites(self):
#         fav_ids = load_favorites()
#         fav_majors = [m for m in majors_data if m['pk'] in fav_ids]
#         self.favorites = fav_majors

#     def handle_toggle(self, pk):
#         favs = load_favorites()
#         if pk in favs:
#             favs.remove(pk)
#         else:
#             favs.append(pk)
#         save_favorites(favs)
#         self.update_favorites()

#     def handle_card_click(self, pk):
#         navigate(f"/MajorsView/{pk}")

#     def render(self):
#         print("Your Favorite Majors")
#         if not self.favorites:
#             print("No favorites yet.")
#         else:
#             for major in self.favorites:
#                 print(f"Major: {major['fields']['name']}")
#                 print(f"About: {major['fields']['about']}")
#                 print("Remove Favorite")