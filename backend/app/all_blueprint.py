#!/usr/bin/python3
""" all blueprint api """
from flask import Blueprint

route_views = Blueprint('route:views', __name__)

from app.home.routes import *
from app.donate.routes import *
from app.buy.routes import *
