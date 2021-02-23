from flask import jsonify
from app.all_blueprint import route_views

@route_views.route('/donate')
def donate_page():
    return jsonify({"Message": "Welcome to Donate"})
