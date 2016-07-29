from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime, Enum
from sqlalchemy.orm import relationship

from model.base import Base
from passlib.apps import custom_app_context as pwd_context


class User(Base):
    class SEX_CHOICE():
        FEMALE = '0'
        MALE = '1'
        UNKNOWN = '2'

    class ROLE_CHOICE():
        normal = '0'
        escort = '1'

    __tablename__ = 'User'
    id = Column(Integer, primary_key=True)
    nickname = Column(String(10))
    sex = Column('sex', Enum(SEX_CHOICE.FEMALE, SEX_CHOICE.MALE, SEX_CHOICE.UNKNOWN))
    img_url = Column(String(5000))
    community = Column(String(500))
    openid = Column(String(50))
    password = Column(String(1000))
    role = Column('role', Enum(ROLE_CHOICE.normal, ROLE_CHOICE.escort))

    def __init__(self, role=None, nickname=None, sex=None, img_url=None, community=None, openid=None, password=None):
        self.role = role
        self.nickname = nickname
        self.sex = sex
        self.img_url = img_url
        self.community = community
        self.openid = openid
        self.password = pwd_context.encrypt(password)

    def pwd_verify(self, password):
        return pwd_context.verify(password, self.id)
