#!/usr/bin/python3
"""  """

from datetime import datetime
import models
from os import getenv
import sqlalchemy
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

class BaseModel:
    id = Column(Integer(), primary_key=True)
    created_at = Column(DateTime(), default=datetime.now())
    updated_at = Column(DateTime(), default=datetime.now())

    def __init__(self):
        """Initialization of the base model"""
        self.created_at = datetime.now()
        self.updated_at = created_at

    def __str__(self):
        """String representation of the BaseModel class"""
        return "id:{}".format(self.id)

    def save(self):
        """updates the attribute 'updated_at' with the current datetime"""
        self.updated_at = datetime.now()
        

