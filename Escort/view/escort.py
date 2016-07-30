# coding: utf-8
import datetime
import functools
import json
import sys

sys.path.append("..")

from flask.ext.admin import AdminIndexView
from requests import Response

from model.User import User
from model.Helper import generate_time
from model.Position import Position
from model.Base import init_db, db_session
from model.Topic import Topic
from model.Escort import Escort
from model.Login import Login

from flask import Flask, request, render_template, redirect, url_for, make_response, jsonify, session, abort
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
from flask_httpauth import HTTPBasicAuth

import wechat

app = Flask(__name__)
auth = HTTPBasicAuth()

app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

users = {
    'taylor': '222',
}


class MyHomeView(AdminIndexView):
    @expose('/')
    @auth.login_required
    def index(self):
        return self.render('admin/index.html')


admin = Admin(app, index_view=MyHomeView())
admin.add_view(ModelView(Escort, db_session))
admin.add_view(ModelView(Topic, db_session))
admin.add_view(ModelView(User, db_session))
admin.add_view(ModelView(Login, db_session))


def oauth(method):
    @functools.wraps(method)
    def warpper(*args, **kwargs):
        code = request.args.get('code', None)
        url = wechat.WeChatOAuth(wechat.app_id, wechat.app_secret, request.url, scope=wechat.scope).authorize_url
        if code:
            try:
                token = wechat.WeChatOAuth.fetch_access_token(code)
                user = wechat.WeChatOAuth.get_user_info(openid=wechat.WeChatOAuth.open_id, access_token=token)
            except Exception:
                abort(403)
            else:
                nickname = user['nickname']
                if user['sex'] == '1':
                    sex = '1'
                elif user['sex'] == '2':
                    sex = '0'
                else:
                    sex = '2'
                openid = user['openid']
                img_url = user['headimgurl']
                user = User(nickname=nickname, sex=sex, openid=openid, img_url=img_url, password=openid)
                try:
                    login = Login(user_id=user.id, login_time=datetime.datetime.now())
                    db_session.add(user)
                    db_session.add(login)
                    db_session.commit()
                    session['user_id'] = user.id
                except Exception:
                    abort(403)
        else:
            return redirect(url)

        return method(*args, **kwargs)

    return warpper


@app.before_first_request
def init_database():
    # init_db()
    pass


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@auth.get_password
def get_password(username):
    if username in users:
        return users.get(username)
    return None


@app.route('/create_menu', methods=['GET'])
def create_menu():
    menu = {
        u'button': [
            {
                u'name': u'选择服务',
                u'sub_button': [
                    {
                        u'type': u'view',
                        u'name': u'校园镖局',
                        u'url': u'http://www.huacaoxiu.com'
                    },
                    {
                        u'type': u'view',
                        u'name': u'下载客户端',
                        u'url': u'http://www.huacaoxiu.com'
                    },
                ]
            },
            {
                u'name': u'个人中心',
                u'type': u'view',
                u'url': u'http://www.huacaoxiu.com/my.html'
            }
        ]
    }
    return str(wechat.client.menu.create(menu_data=menu))


@app.route('/robot.txt')
def robot():
    return render_template('robot.txt')


@app.route('/wexin', methods=['GET', 'POST', 'OPTION'])
def wexin():
    signature = request.args.get('signature')
    timestamp = request.args.get('timestamp')
    nonce = request.args.get('nonce')
    echostr = request.args.get('echostr')
    try:
        wechat.check_signature(wechat.token, signature, timestamp, nonce)
        if echostr != '':
            return echostr
        else:
            # code goes here
            pass
    except wechat.InvalidSignatureException:
        return 'you are not wechat ,fuck off'


#####   TODO web goes here
@app.route('/send_bd.html', methods=['POST', 'GET'])
@oauth
def send_bd():
    """"
    version:0.0.1
    创建一个镖单
    """
    if request.method == 'POST':
        # 从请求json中创建变量
        try:
            data = request.get_json()
            topic = data['topic']
            time = data['time']
            name = data['name']
            phone = data['phone']
            address = data['address']
            information = data['information']
            fee = data['fee']
            tip = data['tip']
            pay_index = data['pay_index']
            progress = Escort.Progress_Enum.on
            # FIXME 未做任何判断直接生成escort
            escort = Escort(topic=topic, name=name,
                            phone=phone, address=address,
                            time=time,
                            information=information, fee=fee,
                            tip=tip, pay_index=pay_index, progress=progress)
            db_session.add(escort)
            db_session.commit()
            return jsonify({'ok': True})
        except Exception:
            return jsonify({'ok': False})
    if request.method == 'GET':
        times = generate_time()
        return render_template('send_bd.html', times=times)


@app.route('/article.html')
def article():
    if request.method == 'GET':
        return render_template('article.html')


@app.route('/bd_appeal.html')
def bd_appeal():
    if request.method == 'GET':
        return render_template('bd_appeal.html')


@app.route('/be_bs.html')
def be_bs():
    if request.method == 'GET':
        return render_template('be_bs.html')


@app.route('/be_bs_success.html')
def be_bs_success():
    if request.method == 'GET':
        return render_template('be_bs_success.html')


@app.route('/bs_bd.html')
def bs_bd():
    if request.method == 'GET':
        return render_template('bs_bd.html')


@app.route('/bs_bd_detail.html')
def bs_bd_detail():
    if request.method == 'GET':
        return render_template('bs_bd_detail.html')


@app.route('/bs_center.html')
def bs_center():
    if request.method == 'GET':
        return render_template('bs_center.html')


@app.route('/bs_complaint.html')
def bs_complaint():
    if request.method == 'GET':
        return render_template('bs_complaint.html')


@app.route('/bs_income.html')
def bs_income():
    if request.method == 'GET':
        return render_template('bs_income.html')


@app.route('/forget.html')
def forget():
    if request.method == 'GET':
        return render_template('forget.html')


@app.route('/get_bd.html')
def get_bd():
    if request.method == 'GET':
        return render_template('get_bd.html')


@app.route('/go_complaint.html')
def go_complaint():
    if request.method == 'GET':
        return render_template('go_complaint.html')


@app.route('/go_refund.html')
def go_refund():
    if request.method == 'GET':
        return render_template('go_refund.html')


@app.route('/')
@app.route('/index.html')
@oauth
def index():
    if request.method == 'GET':
        return render_template('index.html')


@app.route('/login.html')
def login():
    if request.method == 'GET':
        return render_template('login.html')


@app.route('/my.html')
def my():
    if request.method == 'GET':
        return render_template('my.html')


@app.route('/my_bd.html')
def my_bd():
    if request.method == 'GET':
        return render_template('my_bd.html')


@app.route('/my_bd_complaint.html')
def my_bd_complaint():
    if request.method == 'GET':
        return render_template('my_bd_complaint.html')


@app.route('/my_info.html')
def my_info():
    if request.method == 'GET':
        return render_template('my_info.html')


@app.route('/my_location.html')
def my_location():
    if request.method == 'GET':
        return render_template('my_location.html')


@app.route('/my_location_edit.html')
def my_location_edit():
    if request.method == 'GET':
        return render_template('my_location_edit.html')


@app.route('/my_location_new.html')
def my_location_new():
    if request.method == 'GET':
        return render_template('my_location_new.html')


@app.route('/my_msg.html')
def my_msg():
    if request.method == 'GET':
        return render_template('my_msg.html')


@app.route('/refund_confirm.html')
def refund_confirm():
    if request.method == 'GET':
        return render_template('refund_confirm.html')


@app.route('/register.html')
def register():
    if request.method == 'GET':
        return render_template('register.html')


@app.route('/safe.html')
def safe():
    if request.method == 'GET':
        return render_template('safe.html')


@app.route('/safe_change.html')
def safe_change():
    if request.method == 'GET':
        return render_template('safe_change.html')


@app.route('/send_bd_1.html')
def send_bd_1():
    if request.method == 'GET':
        return render_template('send_bd_1.html')


@app.route('/send_bd_iframe.html')
def send_bd_iframe():
    if request.method == 'GET':
        return render_template('send_bd_iframe.html')


@app.route('/settings.html')
def settings():
    if request.method == 'GET':
        return render_template('settings.html')


@app.route('/topic_list.html')
def topic_list():
    if request.method == 'GET':
        items = db_session.query(Topic).all()
        return render_template('topic_list.html', items=items)


if __name__ == '__main__':
    app.run(debug=True)
