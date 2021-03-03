#!/usr/bin/python3
"""  """
from flask import jsonify, abort
from app.all_blueprint import route_views
""" from models import storage
from models.userModels import User """


@route_views.route('/user', method=['GET'])
def home():
    return jsonify({"Message": "Welcome to user"})

""" @route_views.route('/user/<user_id>', method=['GET'])
def get_id(user_id):
    get the user by id
    user = storage.get(User, user_id)
    if not user:
        abort(404)
    return jsonify(user.to_dict()) """