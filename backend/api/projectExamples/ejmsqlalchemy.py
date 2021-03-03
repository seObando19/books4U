#!/usr/bin/python3
"""
Para que una clase sea un modelo obligatoriamente tiene que heredar de una clase base

por lo tanto se importa declarative_base
"""
from datetime import datetime
from sqlalchemy.ext.declarative import declarative_base

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String, DateTime

"""Establecer la conexion entre la aplicacion y el gestor"""
engine = create_engine('mysql://root:root@localhost/book4u')
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer(), primary_key=True)
    username = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False)
    name = Column(String(50))
    lastname = Column(String(50))
    age = Column(Integer)
    created_at =Column(DateTime(), default=datetime.now())

    def __str__(self):
        return self.username

"""
Para trabajar con la conexion y los modelos se realizara con [sesiones] => un puente entre la conexion y los modelos

con esto podremos modificar la base de datos insertar, actualizar, eliminar o realizar consultas
"""
Session = sessionmaker(engine)
session = Session()

if __name__ == "__main__":
    """ eliminar todo de la base de datos """
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)

    user1 = User(username='user1', email='user@hotmail.com', name='userName', lastname='Obando', age=40)
    user2 = User(username='user2', email='user2@hotmail.com', name='userName2', lastname='Obando', age=30)
    user3 = User(username='user3', email='user3@hotmail.com', name='userName3', lastname='Obando', age=20)

    session.add(user1)
    session.add(user2)
    session.add(user3)

    session.commit()
