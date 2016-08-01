# coding:utf-8
from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime, Enum
from sqlalchemy.orm import relationship

from passlib.apps import custom_app_context as pwd_context

from model.Address import Address
from model.Base import Base


class User(Base):
    class SEX_CHOICE():
        FEMALE = 'female'
        MALE = 'male'
        UNKNOWN = 'unknown'

    class ROLE_CHOICE():
        normal = 'normal'
        escort = 'escort'

    __tablename__ = 'User'
    id = Column(Integer, primary_key=True)
    telephone = Column(String(15))
    nickname = Column(String(20))
    sex = Column('sex', Enum(SEX_CHOICE.FEMALE, SEX_CHOICE.MALE, SEX_CHOICE.UNKNOWN))
    img_url = Column(String(5000))
    community = Column(String(500))
    openid = Column(String(50))
    password = Column(String(1000))
    role = Column('role', Enum(ROLE_CHOICE.normal, ROLE_CHOICE.escort))

    addresses = relationship('Address', order_by=Address.id, back_populates='user')

    def __init__(self, role=None, nickname=None, telephone=u'请输入手机号', sex=None, img_url=None, community=u'请输入所在社区',
                 openid=None,
                 password=None):
        self.role = role
        self.telephone = telephone
        self.nickname = nickname
        self.sex = sex
        self.img_url = img_url
        self.community = community
        self.openid = openid
        self.password = pwd_context.encrypt(password)

    def pwd_verify(self, password):
        return pwd_context.verify(unichr(password), self.id)

    def update_info(self, **kwargs):
        # FIXME 更新用户信息
        return None
