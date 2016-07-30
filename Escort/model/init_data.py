# coding: utf-8


def init_data(db_session):
    # testing data goes here...
    from model import Topic
    topics = [
        {'img': u'icon icon-chaoshi', 'title': u'超市', 'describe': u'超市里面买买买点这里'},
        {'img': u'icon icon-shitang', 'title': u'食堂', 'describe': u'小炒盒饭黄焖鸡...'},
        {'img': u'icon icon-kuaidi', 'title': u'快递', 'describe': u'包裹点这里'},
        {'img': u'icon icon-jiaoshi', 'title': u'教室', 'describe': u'教室东西落下了点这里'},
        {'img': u'icon icon-tianping', 'title': u'甜品', 'describe': u'咖啡蛋糕果汁点这里'},
        {'img': u'icon icon-other', 'title': u'其他', 'describe': u'@#￥%&点这里'},
    ]
    for topic in topics:
        t = Topic.Topic(img=topic['img'], title=topic['title'], describe=topic['describe'])
        db_session.add(t)

    db_session.commit()
