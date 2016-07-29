# coding: utf-8
import datetime
import json
import sys

from flask.ext.admin import AdminIndexView
from requests import Response

sys.path.append("..")
from flask import Flask, request, render_template, redirect, url_for, make_response, jsonify
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
from flask_httpauth import HTTPBasicAuth

from model.Position import Position
from model.base import init_db, db_session
from model.Topic import Topic
from model.Escort import Escort
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
admin.add_view(ModelView(Position, db_session))


@app.before_first_request
def init_database():
    init_db()


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


@auth.get_password
def get_password(username):
    if username in users:
        return users.get(username)
    return None


@app.route('/test', methods=['POST', 'GET'])
def test():
    return jsonify({'data': True})


@app.route('/position')
def position():
    json = []
    for posi in db_session.query(Position).all():
        json.append(posi.serializer())
    return jsonify({"data": json})


@app.route('/create_menu', methods=['GET'])
def create_menu():
    menu = {
        "button": [
            {
                "name": "选择服务",
                "sub_button": [
                    {
                        "type": "view",
                        "name": "校园镖局",
                        "url": "http://seize.space:8085/"
                    },
                    {
                        "type": "view",
                        "name": "下载客户端",
                        "url": "http://seize.space"
                    },
                ]
            },

            {
                "name": "个人中心",
                "type": "view",
                "url": "http://seize.space"
            }
        ]
    }
    # return str(wechat.create_menu(menu_data=menu))


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
        return render_template('send_bd.html')


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
        return render_template('topic_list.html')


if __name__ == '__main__':
    app.run(debug=True)
