""" all blueprint api """
from flask import Blueprint

route_views = Blueprint('route:views', __name__)

from homeRoutes import *
""" from api.routes.homeRoutes import *
from api.routes.buyRoutes import *
from api.routes.donateRoutes import *
from api.routes.userRoutes import * """