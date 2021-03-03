#!/usr/bin/python3
from flask import  Flask, jsonify
from api.routes import route_views

app = Flask(__name__)
app.config['DEBUG'] = True

app.register_blueprint(route_views)

@app.route('/')
def greeting():
    return jsonify({"Message": "Welcome to app"})


if __name__ == '__main__':
    app.run()
