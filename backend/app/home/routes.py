from flask import jsonify
from app.all_blueprint import route_views

@route_views.route('/home')
def home():
    return jsonify({"Message": "Welcome to Home"})
