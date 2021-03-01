#!/usr/bin/python3


import models
from os import getenv
from models.base_model import BaseModel, Base
import sqlalchemy
from sqlalchemy import Column, Integer, String, DateTime
from hashlib import md5


class User(BaseModel, Base):
    __tablename__ = 'user'
    name = Column(String(50), nullable=False)
    lastname = Column(String(50), nullable=False)


    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __setattr__(self, name, value):
        if name == "password":
            value = md5(value.encode()).hexdigest()
        super().__setattr__(name, value)


""" age = Column(Integer(), nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    phone = Column(String(10), nullable=True)
    username = Column(String(100), unique=True, nullable=False)
    type_user_id = Column(String(10), default="5")
    password = Column(String(100), nullable=False) """