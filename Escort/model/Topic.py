# coding: utf-8
import datetime

from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime, Enum
from sqlalchemy.orm import relationship

from model.Base import Base


class Topic(Base):
    __tablename__ = 'Topic'
    id = Column(Integer, primary_key=True)
    img = Column(String(140))
    title = Column(String(140))
    describe = Column(String(1000))

    def __init__(self, img=None, title=None, describe=None):
        self.img=img
        self.title = title
        self.describe = describe

    def serializer(self):
        serializer = {
            "img": self.img,
            "title": self.title,
            "describe": self.describe
        }
        return serializer
