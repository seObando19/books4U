#!/usr/bin/python3

import models
from os import getenv
import sqlalchemy
from app.home.models import User
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker


classes = {
            "User":User
}

class DBStorage:
    """interaacts with the MySQL database"""
    __engine = None
    __session = None

    def __init__(self):
        """Instantiate a DBStorage object"""
        MYSQL_USER = getenv('MYSQL_USER')
        MYSQL_PWD  = getenv('MYSQL_PWD')
        MYSQL_HOST = getenv('MYSQL_HOST')
        MYSQL_DB   = getenv('MYSQL_DB')

        self.__engine = create_engine("mysql://{}:{}@{}/{}".
                                      format(MYSQL_USER,
                                             MYSQL_PWD,
                                             MYSQL_HOST,
                                             MYSQL_DB))

    def new(self):
        
