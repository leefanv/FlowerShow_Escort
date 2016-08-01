# coding: utf-8


def init_data(db_session):
    # testing data goes here...
    import User, Topic, Address
    topics = [
        {'img': u'icon icon-chaoshi', 'title': u'超市', 'describe': u'超市里面买买买点这里'},
        {'img': u'icon icon-shitang', 'title': u'食堂', 'describe': u'小炒盒饭黄焖鸡...'},
        {'img': u'icon icon-kuaidi', 'title': u'快递', 'describe': u'包裹点这里'},
        {'img': u'icon icon-jiaoshi', 'title': u'教室', 'describe': u'教室东西落下了点这里'},
        {'img': u'icon icon-tianping', 'title': u'甜品', 'describe': u'咖啡蛋糕果汁点这里'},
        {'img': u'icon icon-other', 'title': u'其他', 'describe': u'@#￥%&点这里'},
    ]

    addresses = [
        {'user_id': 1, 'consignee': u'李彦宏', 'phone': u'15182938887', 'describe': u'寝室6栋303', 'is_default': True},
        {'user_id': 1, 'consignee': u'李彦宏', 'phone': u'15182938887', 'describe': u'6教418', 'is_default': False},
    ]

    users = [
        {'role': User.User.ROLE_CHOICE.normal, 'nickname': u'taylor', 'telephone': u'15182938887',
         'sex': User.User.SEX_CHOICE.MALE,
         'img_url': u'http://wx.qlogo.cn/mmopen/DxOZTchzRIyS3mNM63wdveYdFfZFoyOu08jqj'
                    u'9z9zHo12n6nfibsrAORTlehqHpgPv8gt4f3AMLGxZpHdu6IScUk4ajNhWfiaW/0',
         'community': u'none',
         'openid': 'oZv7zvwMxvnKz-v36ggNB4cARt0M',
         'password': 'xxxx'},
    ]
    for topic in topics:
        t = Topic.Topic(img=topic['img'], title=topic['title'], describe=topic['describe'])
        db_session.add(t)

    for user in users:
        u = User.User(role=user['role'], nickname=user['nickname'], telephone=user['telephone'],
                      sex=user['sex'], img_url=user['img_url'], community=user['community'],
                      openid=user['openid'], password=user['password'])
        db_session.add(u)

    for address in addresses:
        a = Address.Address(user_id=address['user_id'], consignee=address['consignee'], phone=address['phone'],
                            describe=address['describe'], is_default=address['is_default'])
        db_session.add(a)

    db_session.commit()
