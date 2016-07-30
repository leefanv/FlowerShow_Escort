from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime, Enum
from sqlalchemy.orm import relationship

from model.Base import Base


class Login(Base):
    __tablename__ = 'Login'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    login_time = Column(DateTime())
    logout_time = Column(DateTime())

    def __init__(self, user_id=None, login_time=None, logout_time=None):
        self.user_id = user_id
        self.login_time = login_time
        self.logout_time = logout_time
