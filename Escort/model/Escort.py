# coding: utf-8
import datetime

import enum
from sqlalchemy import Column, Integer, String, Text, Boolean, Float, DateTime, Enum
from sqlalchemy.orm import relationship

from model.Base import Base


class Escort(Base):
    __tablename__ = 'Escort'

    class Progress_Enum():
        on = 'on'
        coordinating = 'coordinating'
        run = 'run'
        abandon = 'abandon'
        deleted = 'deleted'
        paid = 'paid'
        arrive = 'arrive'
        sign = 'sign'
        complete = 'complete'
        off = 'off'

    id = Column(Integer, primary_key=True)
    topic = Column(String(140))
    time = Column(String)
    name = Column(String(140))
    phone = Column(String(15))
    information = Column(String(1000))
    address = Column(String(1000))
    fee = Column(Float())
    tip = Column(Float())
    pay_index = Column(Integer())
    progress = Column('progress', Enum(Progress_Enum.on,
                                       Progress_Enum.coordinating,
                                       Progress_Enum.run,
                                       Progress_Enum.abandon,
                                       Progress_Enum.deleted,
                                       Progress_Enum.paid,
                                       Progress_Enum.arrive,
                                       Progress_Enum.sign,
                                       Progress_Enum.complete,
                                       Progress_Enum.off))

    def __init__(self, topic=None, time=None, name=None, phone=None,
                 information=None, address=None, fee=None, tip=None,
                 pay_index=None, progress=Progress_Enum.off):
        self.topic = topic
        self.time = time
        self.name = name
        self.phone = phone
        self.information = information
        self.address = address
        self.fee = fee
        self.tip = tip
        self.pay_index = pay_index
        self.progress = progress
