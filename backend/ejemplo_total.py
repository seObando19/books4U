#!/usr/bin/python3

from models.base_model import BaseModel, Base
from models.engine.db import DBStorage
from models.userModels import User



new_dict = { "name": "Sebastian", "lastname": "Obando"}
db = DBStorage()

db.reload()

mydb = db.all(User)
for user in mydb:
    print(mydb[user].name)
db.close()

""" obj = db.get(User, 2)
print(obj.name) """


""" db.get(User, "2") """
""" db.new(User(**new_dict)) """
""" db.save() """

