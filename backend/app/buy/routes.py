from flask import jsonify
from app.all_blueprint import route_views

@route_views.route('/buy')
def buy_page():
    return jsonify({"Message": "Welcome to Buy"})
