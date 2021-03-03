#!/usr/bin/python3
from flask import jsonify
from api.routes import route_views

@route_views.route('/home')
def home():
    return jsonify({"Message": "Welcome to Home"})
