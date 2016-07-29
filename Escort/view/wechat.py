# coding: utf-8
import functools
import os

import sys

import requests
from flask import url_for
from wechatpy.client.api import WeChatMenu
from wechatpy.exceptions import InvalidSignatureException
from wechatpy.utils import check_signature

sys.path.append("..")
token = "flowersandgrassmakesunine"
app_id = "wx74f11559acca4843"
app_secret = "049c8dfaabc0ba862d11d6b1bba8c264"
encoding_aes_key = "aI3oNaHcRncU2mIRsAfNb9sSz1KyfT2DVa3nSG9rxws"

web_access_token = ''
refresh_token = ''
openid = ''
scope = 'snsapi_userinfo'
def get_code(code):
    url = 'https://api.weixin.qq.com/sns/oauth2/access_token?' \
          'appid=' + app_id + \
          '&secret=' + app_secret + \
          '&code=' + code + \
          '&grant_type=authorization_code'
    response = requests.get(url=url)
    json = response.json()
    try:
        web_access_token = json.get('access_token')
        refresh_token = json.get('refresh_token')
        openid = json.get('openid')
        scope = json.get('scope')
        return True
    except Exception:
        return False


def get_userinfo_via_web():
    url = 'https://api.weixin.qq.com/sns/userinfo?' \
          'access_token=' + web_access_token + \
          '&openid=' + openid + \
          '&lang=zh_CN'
    response = requests.get(url)
    json = response.json()
    try:
        nickname = json.get('nickname')
        sex = json.get('sex')
        province = json.get('province')
        city = json.get('city')
        country = json.get('country')
        headimgurl = json.get('headimgurl')
        privilege = json.get('privilege')
        unionid = json.get('unionid')
        user = {
            'openid': openid,
            'nickname': nickname,
            'sex': sex,
            'province': province,
            'city': city,
            'country': country,
            'headimgurl': headimgurl,
            'privilege': privilege,
            'unionid': unicode
        }
        return user
    except Exception:
        pass


def get_weixin_index_url():
    url = 'https://open.weixin.qq.com/connect/oauth2/authorize?' \
          'appid=' + app_id + \
          '&redirect_uri=' + url_for('index') + \
          '&response_type=code' \
          '&scope=' + scope + \
          '&state=STATE#wechat_redirect'
    return url
