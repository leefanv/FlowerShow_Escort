# coding: utf-8
import datetime

from flask import jsonify
from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime, Enum, ForeignKey
from sqlalchemy.orm import relationship

from model.Base import Base


class Address(Base):
    __tablename__ = 'Address'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('User.id'))
    consignee = Column(String(10))
    phone = Column(String(15))
    describe = Column(String(1000))
    is_default = Column(Boolean)

    user = relationship('User', back_populates='addresses')
    def __init__(self, user_id=None, consignee=None, describe=None, phone=None, is_default=None):
        self.user_id=user_id
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
