import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
sys.path.append('..')
engine = create_engine('sqlite:////tmp/escort.db', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=True,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    from model import Escort, Topic, Position, User, Login
    Base.metadata.create_all(bind=engine)
