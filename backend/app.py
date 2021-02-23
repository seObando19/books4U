from flask import  Flask, jsonify
from app.all_blueprint import route_views
""" from app.donate.routes import donate
from app.buy.routes import buy """

app = Flask(__name__)
app.config['DEBUG'] = True

app.register_blueprint(route_views)

@app.route('/')
def greeting():
    return jsonify({"Message": "Welcome to app"})


if __name__ == '__main__':
    app.run()
