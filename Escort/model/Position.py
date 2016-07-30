# coding: utf-8
import datetime

from flask import jsonify
from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime, Enum
from sqlalchemy.orm import relationship

from model.Base import Base


class Position(Base):
    __tablename__ = 'Position'
    id = Column(Integer, primary_key=True)
    consignee = Column(String(10))
    phone = Column(String(15))
    describe = Column(String(1000))
    is_default = Column(Boolean)

    def __init__(self, consignee=None, describe=None, phone=None, is_default=None):
        self.consignee = consignee
        self.phone = phone
        self.describe = describe
        self.is_default = is_default

    def serializer(self):
        serializer = {
            "id": self.id,
            "consignee": self.consignee,
            "phone": self.phone,
            "describe": self.describe,
            "is_default": self.is_default
        }
        return serializer
