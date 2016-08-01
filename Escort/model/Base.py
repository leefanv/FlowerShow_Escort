# coding: utf-8
import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

from model.init_data import init_data

sys.path.append('..')

engine = create_engine('sqlite:////tmp/escort.db', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=True,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()


def init_db(test_data=True):
    from model import Escort, Topic, Address, User, Login
    Base.metadata.create_all(bind=engine)
    if test_data:
        init_data(db_session)


def get_or_create(self, *args):
    try:
        instance = db_session.query(self).filter(args).first()
        if instance is None:
            instance = self(args)
            db_session.add(instance)
            db_session.commit(instance)
        return instance
    except Exception:
        pass
    return None

def get_exist(self, *args):
    try:
        instance = db_session.query(self).filter(args).first()
        return instance
    except Exception:
        pass
