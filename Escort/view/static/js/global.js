//html根字体
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 6.4 + 'px';
    }, false);
})();

//其他插件
$(document).ready(function () {


    //显示隐藏密码
    $(".icon-logon-eye").on("click", function () {
        if ($(this).hasClass("icon-logon-eye")) {
            $(".icon-logon-eye").removeClass('icon-logon-eye').addClass('icon-logon-eye-open');
            $('#password').attr("type", "text");
        } else {
            $(".icon-logon-eye-open").removeClass('icon-logon-eye-open').addClass('icon-logon-eye');
            $('#password').attr("type", "password");
        }
    })

    $('.up-img em').click(function () {

        $("input").trigger("click");
    });

    $('.m-escort-appeal .item .up span').click(function () {

        $("input").trigger("click");
    });

    $('.m-person-info .item  .head img').click(function () {

        $(".m-person-info .item  .head input").trigger("click");
    });


    $('.m-my-capital .bd .item li:last-child').css('border-bottom', 'none');

    $('.m-escort-appeal .item-list .item:last-child').css('border-bottom', 'none');


    if ($('div').hasClass('m-footer')) {
        $('body').css('padding-bottom', '1.15rem');
    }

    if ($('div').hasClass('m-pay-submit')) {
        $('body').css('padding-bottom', '50px');
    }


    //接镖大厅
    $('body').click(function () {

        if ($('.m-alert-wrap').is(":hidden")) {

        } else {
            $('.m-header .diamond').addClass('diamond-fixed');
        }
    });

    $('.m-qiangdan').click(function () {

        $('.m-alert-wrap').show();
    });

    $('.m-edit-location .nor').click(function () {
        $(this).next().slideToggle();
    });
    $('.m-edit-location .hor').click(function () {
        $(this).slideUp();
    });


    $('.m-select-hor .nor').click(function () {
        $(this).next().slideToggle();
    });

    //$('.m-select-hor .hor').click(function() {
    //$(this).slideUp();
    //});
    $('.m-select-hor .hor ul li').click(function () {
        var text = $(this).text();
        $(this).parent().parent().parent().siblings('i').text(text);
        $(this).parent().parent().slideUp();
    })

    //成为镖师 选择性别
    $('.m-dartlike-center .bs-sex .hor ul li').click(function () {
        var text = $(this).text();
        $(this).parent().parent().parent().find('.nor span').text(text);
        $(this).parent().parent().slideUp();
    })

    $('.m-send-dartlike .arrow').click(function () {
        $(this).parent().children('.right').children('.hor').slideToggle();
    });


    //修改下列注释掉的点击函数，获取选中数据
    //$('.m-dartlike-item .hor').click(function() {
    //$(this).slideUp();
    //});
    //发镖页面
    $('.m-dartlike-item .hor ul li').click(function () {
        var text = $(this).text();
        $(this).parent().parent().siblings('.nor').children('span').text(text);
        $(this).parent().parent().slideUp();
    })
    //编辑位置页面
    $('.m-edit-location .hor ul li').click(function () {
        var text = $(this).text();
        $(this).parent().parent().parent().siblings('.left').find('i').text(text);
        $(this).parent().parent().slideUp();
    })


    $('.m-pay-way .bd .item').click(function () {
        $('.m-pay-way .bd .item').removeClass('on');
        $(this).addClass('on');
    });


    $(".m-send-dartlike textarea").focus(function () {
        $('.m-pay-submit').hide();
    });


    $(".m-send-dartlike textarea").blur(function () {
        $('.m-pay-submit').show();
    });


    var footerIndex = $('.m-footer ul .on').index();
    switch (footerIndex) {
        case 0:
            $('.m-footer ul li:eq(0) em').addClass('icon-home-hor').removeClass('icon-home-nor');
            break;
        case 1:
            $('.m-footer ul li:eq(1) em').addClass('icon-makeorder-hor').removeClass('icon-makeorder-nor');
            break;
        case 2:
            $('.m-footer ul li:eq(2) em').addClass('icon-acceptorder-hor').removeClass('icon-acceptorder-nor');
            break;
        case 3:
            $('.m-footer ul li:eq(3) em').addClass('icon-me-hor').removeClass('icon-me-nor');
            break;

    }


});


//其他插件
$(document).ready(function () {

    TouchSlide({
        slideCell: "#banner",
        titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell: ".bd ul",
        effect: "left",
        autoPlay: false, //自动播放
        autoPage: true, //自动分页
        switchLoad: "_src" //切换加载，真实图片路径为"_src" 
    });


    TouchSlide({
        slideCell: "#aotuSlider",

        endFun: function (i) { //高度自适应
            var bd = document.getElementById("aotuSliderBd");
            bd.parentNode.style.height = bd.children[i].children[0].offsetHeight + "px";
            if (i > 0) bd.parentNode.style.transition = "200ms";
        }

    });


    TouchSlide({
        slideCell: "#mMyDartlike",

        endFun: function (i) { //高度自适应
            var bd = document.getElementById("mMyDartlikeBd");
            bd.parentNode.style.height = bd.children[i].children[0].offsetHeight + "px";
            if (i > 0) bd.parentNode.style.transition = "200ms";
        }

    });


});


window.onload = function () {

    $('.m-my-dartlike-items .result h3.tips').click(function () {

        $('.m-my-tips-alert-wrap').show();
    });
    $('.m-my-tips-alert-wrap').click(function () {

        $('.m-my-tips-alert-wrap').hide();
    });


    $('.m-my-dartlike-alert-wrap .fr').click(function () {

        $('.m-my-dartlike-alert-wrap').hide();
    });
}


///
//包装函数
var myFunc = {
    getUrlParam: function (name) {//获取url参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); ///构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);    //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null;      //返回参数值
    },
    mouseout: function (obj) {
        var className = "hover";
        var _ecname = obj.className;
        if (_ecname.length == 0) return;
        if (_ecname == className) {
            obj.className = "";
            return;
        }
        if (_ecname.match(new RegExp("(^|\s)" + className + "(\s|$)")))
            obj.className = _ecname.replace((new RegExp("(^|\s)" + className + "(\s|$)")), "");
    },
    hover: function (obj) {
        if (!obj) return;
        var className = "hover"
        var _ecname = obj.className;
        if (_ecname.length == 0) {
            obj.className = className;
            return;
        }
        if (_ecname == className || _ecname.match(new RegExp("(^|\s)" + className + "(\s|$)")))
            return;
        obj.className = _ecname + "" + className;
    },
    showAlert: function (msg) {
        $('.m-fail-wrap .m-close-succeed-alert p').text(msg);
        $('.m-fail-wrap').show();
        return false;
    },
    showNote: function (msg) {
        $('.m-note-wrap .m-close-succeed-alert p').text(msg);
        $('.m-note-wrap').show();
    },
}


////
// 手机实现div的hover效果
$(document).ready(function () {
    $('.m-my-dartlike-ongoing .con .item div').eq(1).attr('ontouchstart', 'myFunc.hover(this');
    $('.m-my-dartlike-ongoing .con .item div').eq(1).attr('ontouchend', 'myFunc.mouseout(this)');
    $('.m-my-index-hd .cf div:eq(0)').attr('ontouchstart', 'myFunc.hover(this');
    $('.m-my-index-hd .cf div:eq(0)').attr('ontouchend', 'myFunc.mouseout(this)');
})

////
//返回上一页
$(document).ready(function () {
    $('.back a').click(function () {
        history.back(-1);
    });
})

$(document).ready(function () {
    $('.close a').click(function () {
        window.location.href = 'index.html';
    });
})


var blankReg = /(^\s*)|(\s*$)/g;//空格正则
var data = '';
var url;
var codeReg = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}/;//密码必须由数字、字符、特殊字符三种中的两种组成,密码长度不能少于8个字符；
var numberReg = /^(1+\d{10})$/;


////
//发镖
$(document).ready(function () {
    if (!(document.cookie || navigator.cookieEnabled)) {
        alert('对不起,您的浏览器的Cookie功能被禁用,请开启后返回程序。')//检测用户cookie是否开启
    }

    ////
    //发镖
    //发镖页面
    //点击跳转到主题列表
    $('.topic_choose').click(function () {

        window.location.href = 'topic_list.html';//跳转到主题列表
    })


    //主题列表页面
    //点击获取主题 
    $('.m-list-opics .item').click(function () {
        var topic = $(this).find('span').text();                   //把点击元素的主题内容赋值给参数
        $.cookie('c_topic', topic, {expires: 5 * 365, path: '/'}); //把点击元素的主题内容写入cookie
        window.location.href = 'send_bd.html';
    })


    //发镖页面
    //判断主题是否已在cookie里，如果是写入cookie
    if ($.cookie('c_topic')) {
        var bdtopic = $.cookie('c_topic');
        $('.m-dartlike-item .bd-topic span').text(bdtopic);
    }

    //选择位置按钮
    $('.location_choose').click(function () {
        var start = 'start';                                        //定义start参数
        start = encodeURI(encodeURI(start));                       //对start参数进行二次编码
        window.location.href = 'my_location.html?startVal=' + start + '';//跳转到我的位置页面
    })


    //我的位置页面
    //如果没有默认地址点击获取位置信息
    var startSignal = myFunc.getUrlParam('startVal');
    startSignal = decodeURI(decodeURI(startSignal));
    if (startSignal && startSignal.indexOf('start') != -1) {      //这个地方需要判断上一页面url是否是发镖页面，如是则点击获取地址
        $('.m-my-location .item .bd').click(function () {
            var loname = $(this).find('ul li:eq(0) span').text();
            $.cookie('c_loname', loname, {expires: 5 * 365, path: '/'}); //把点击元素的姓名写入cookie
            var lophone = $(this).find('ul li:eq(0) i').text();
            ;
            $.cookie('c_lophone', lophone, {expires: 5 * 365, path: '/'});  //把点击元素的电话写入cookie
            var loaddress = $(this).find('ul li:eq(1) p').text();
            $.cookie('c_loaddress', loaddress, {expires: 5 * 365, path: '/'}); //把点击元素的具体地址写入cookie
            window.location.href = 'send_bd.html';  //跳转到新的url
        })
        $('#myLocation .m-header .back a').attr('href', 'send_bd.html');
    }


    //发镖页面
    //判断位置信息是否已在cookie里，如果是写入cookie
    if ($.cookie('c_lophone')) {
        $('.m-dartlike-item .bd-location p span:eq(0)').text($.cookie('c_loname'));
        $('.m-dartlike-item .bd-location p span:eq(1)').text($.cookie('c_lophone'));
        $('.m-dartlike-item .bd-location p i').text($.cookie('c_loaddress'));
    }

    //textarea输入后文字更深格式
    var bdInformationInput = $('.m-dartlike-content .bd-information textarea');
    bdInformationInput.blur(function () {
        $('.m-dartlike-content .bd-information textarea').css({
            'opacity': '0.6',
            'filter': 'alpha(opacity=60)',
            'color': '#000'
        });
    })

    //服务费输入结束时计算结算金额
    $('.bd-service-fee input').blur(function () {
        var feeVal = $(this).val();
        var tipVal, resultVa;
        if (isNaN(feeVal)) {
            myFunc.showAlert('请输入数字。');
        } else if (feeVal < 2) {
            myFunc.showAlert('请输入不低于2的数字。');
        } else {
            feeVal = parseInt(feeVal).toFixed(2);
            tipVal = parseInt($('.bd-tip span').text()).toFixed(2);
            resultVal = ((feeVal - 0) + (tipVal - 0)).toFixed() + '元';
            $('.m-pay-submit .left i').text(resultVal);
        }

    })

    //获取选择时间值
    $('.m-dartlike-item .hor ul li').click(function () {
        var text = $(this).text();
        $(this).parent().parent().siblings('.nor').children('span').text(text);
        $(this).parent().parent().slideUp();
    })

    $('.m-picture-description .bd .up-img input').click(function (event) {

    })

    //计算支付结果函数
    getResult = function () {
        var feeVal = parseFloat($('.bd-service-fee input').val()).toFixed(2);
        if (isNaN(feeVal)) {
            feeVal = 0;
        }
        var tipVal = parseFloat($('.bd-tip span').text()).toFixed(2);
        var resultVal = ((feeVal - 0) + (tipVal - 0)).toFixed() + '元';

        $('.m-pay-submit .left i').text(resultVal);
    }
    //计算支付结果
    getResult();
    //发镖提交按钮准备数据
    var bdTopic, bdTime, bdLocationName, bdLocationPhone, bdLocationAddress, bdInformation, image1, bdServiceFee, bdTip, bdPayIndex;
    $('#pay_submit').click(function () {
        bdInformation = $('.m-dartlike-content .bd-information textarea').val();
        bdServiceFee = $('.m-dartlike-item .bd-service-fee input').val();
        if (bdInformation.replace(blankReg, '') == '') {
            myFunc.showAlert('请输入您的重要信息');
        } else if (bdServiceFee.replace(blankReg, '') == '') {
            myFunc.showAlert('请输入服务费。');
        } else if (isNaN(bdServiceFee) || bdServiceFee < 2) {
            myFunc.showAlert('请输入符合要求的服务费。');
        } else {
            bdTopic = $('.m-dartlike-item .bd-topic span').text();  //主题内容
            bdTime = $('.m-dartlike-item .bd-time span').text();    //送达时间
            bdLocationName = $('.m-dartlike-item .bd-location p span:eq(0)').text();//位置联系人姓名
            bdLocationPhone = $('.m-dartlike-item .bd-location p span:eq(1)').text();//位置联系人电话
            bdLocationAddress = $('.m-dartlike-item .bd-location p i').text();//位置具体地址
            bdInformation = $('.m-dartlike-content .bd-information textarea').val();//镖单内容
            //image1 = $('.m-picture-description .bd-images .img:eq(0) img').attr('src');//上传图片1
            bdServiceFee = $('.m-dartlike-item .bd-service-fee input').val(); //服务费
            bdTip = parseFloat($('.bd-tip span').text()); //打赏修改数据类型
            bdPayIndex = $('.bd-pay .list .item').index($('.bd-pay .list .on'));//付款方式
            data = {
                'topic': bdTopic,
                'time': bdTime,
                'name': bdLocationName,
                'phone': bdLocationPhone,
                'address': bdLocationAddress,
                'information': bdInformation,
                'fee': bdServiceFee,
                'tip': bdTip,
                'pay_index': bdPayIndex
            };
            data = JSON.stringify(data); //预计数据接口  POST数据             
            $.ajax({
                type: 'post',
                url: '/send_bd.html',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function (data) {
                    if (data.ok)
                        window.location.href = '/my_bd.html';//跳转我的镖单页面
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                    alert(data);
                }
            })
        }
    })
})
//我的位置my_location页面
$(document).ready(function () {
    var del, unchecked;
    var defaultSpan = $('.m-my-location .item .ft .fl span');
    var checkBoxs = $('.m-my-location .item .ft .fl input');
    var editButton = $('.m-my-location .item .ft .fr .edit');
    var delButton = $('.m-my-location .item .ft .fr .del');
    var adminButton = $('.m-admin-wrap .m-admin-bottom a');

    //编辑按钮添加跳转链接
    $('.m-my-location .item .ft .fr .edit').click(function () {
        window.location.href = 'my_location_edit.html';
    })

    //隐藏默认地址以及checkbox、编辑、删除按钮
    defaultSpan.hide();
    checkBoxs.hide();
    editButton.hide();
    delButton.hide();

    //管理数据按钮
    adminButton.click(function () {
        if (!$(this).hasClass('on')) {
            $(this).text('完成');
            $(this).addClass('on');
            defaultSpan.fadeIn(300);
            checkBoxs.fadeIn(300);
            editButton.fadeIn(300);
            delButton.fadeIn(300);
        } else {
            if (checkBoxs.is(':checked')) {
                var checkedBox = checkBoxs.filter(':checked');
                var status = checkBoxs.is(':checked');
                defaultItem = checkedBox.parent().parent().parent();
                i = defaultItem.index();
                data = {'default_index': i};
                JSON.stringify(data);
                $.ajax({
                    type: 'post',
                    url: '',
                    dataType: 'json',
                    data: data,
                    async: true,
                    contentType: 'application/json',
                    success: function () {
                        myFunc.showNote('设置成功');
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus);
                    }
                })
            } else {
                //如果默认地址存在，用户取消点击默认地址选择框，未选择任何地址就提交时，提醒用户选择默认地址
                myFunc.showAlert('请选择默认地址');
                return false;

            }
            $(this).text('管理');
            $(this).removeClass('on');
            defaultSpan.hide();
            checkBoxs.hide();
            editButton.hide();
            delButton.hide();
        }
    })
    checkBoxs.click(function () {
        if ($(this).is(':checked')) {
            $(this).parent().parent().siblings('.bd').find('li:eq(1) i').text('默认地址');
            unchecked = $(this).parent().parent().parent().siblings().find(':checkbox');
            unchecked.removeAttr('checked');
            unchecked.parent().parent().siblings('.bd').find('li:eq(1) i').text('');
        } else {
            $(this).parent().parent().siblings('.bd').find('li:eq(1) i').text('');
        }

    });

    $('.m-my-location .item .ft .del').click(function () {
        $('.m-my-dartlike-alert-wrap').show();
        del = $(this);
        $('.m-my-dartlike-alert-wrap .m-close-order-alert p .fl').click(function () {
            $('.m-my-dartlike-alert-wrap').hide();
            delItem = del.parent().parent().parent();
            i = delItem.index();
            data = $('.m-my-location .item').eq(i);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('删除成功');
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
            delItem.fadeTo('slow', 0.01, function () {
                $(this).slideUp('slow'), function () {
                    $(this).remove();
                }
            });
        })
    });
})

////
//编辑位置页面
$(document).ready(function () {
    var lSchool, lBuilding, lDetail, lName, lPhone, lCheckboxStatus;
    $('.location-edit .edit-phone input').blur(function () {
        if (!numberReg.test($(this).val())) {
            myFunc.showAlert('请输入正确的手机号');
        }
    })
    //提交按钮ajax函数
    $('.location-edit .m-form-submit').click(function () {
        //准备提交数据
        lSchool = $('.location-edit .edit-school i').text();
        lBuilding = $('.location-edit .edit-building i').text();
        lDetail = $('.location-edit .edit-detail textarea').val();
        lName = $('.location-edit .edit-name input').val();
        lPhone = $('.location-edit .edit-phone input').val();
        lCheckboxStatus = $('.location-edit input[type="checkbox"]').is(':checked');
        if (lDetail.replace(blankReg, '') == '' || lName.replace(blankReg, '') == '') {
            myFunc.showAlert('请填写地址内容');
        } else if (!numberReg.test(lPhone)) {
            myFunc.showAlert('请输入正确的手机号');
        } else {
            lSchool = $('.location-edit .edit-school i').text();
            lBuilding = $('.location-edit .edit-building i').text();
            lDetail = $('.location-edit .edit-detail textarea').val();
            lName = $('.location-edit .edit-name input').val();
            lPhone = $('.location-edit .edit-phone input').val();
            lCheckboxStatus = $('.location-edit input[type="checkbox"]').is(':checked');                                        // 填写内容不为空才可提交                   
            data = {
                'l_shool': lSchool, 'l_building': lBuilding, 'l_detail': lDetail, 'l_name': lName
                , 'l_phone': lPhone, 'l_checkbox_status': lCheckboxStatus
            };
            data = JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('修改成功');
                    setTimeout("window.location.href='my_location.html';", 3000);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        }
    })
})

////
//新建位置页面
$(document).ready(function () {
    var numberReg, nSchool, nBuilding, nDetail, nName, nPhone, nCheckboxStatus;
    $('.location-new .new-phone input').blur(function () {
        numberReg = /^(1+\d{10})$/;
        if (!numberReg.test($(this).val())) {    //判断手机输入格式
            myFunc.showAlert('请输入正确的手机号');
        }
    })
    $('.location-new .m-form-submit').click(function () {
        nSchool = $('.location-new .new-school i').text();
        nBuilding = $('.location-new .new-building i').text();
        nDetail = $('.location-new .new-detail textarea').val();
        nName = $('.location-new .new-name input').val();
        nPhone = $('.location-new .new-phone input').val();
        nCheckboxStatus = $('.location-new input[type="checkbox"]').is(':checked');
        if (nSchool == '' || nBuilding == '') {      //判断地址选择框是否为空，如果为空提示选择
            myFunc.showAlert('请选择地址');
        } else if (nDetail.replace(blankReg, '') == '' || nName.replace(blankReg, '') == '') {  //判断地址输入框是否为空，如果为空提示选择
            myFunc.showAlert('请填写内容');
        } else {
            data = {
                'n_school': nSchool,
                'n_building': nBuilding,
                'n_detail': nDetail,
                'n_name': nName,
                'n_phone': nPhone,
                'n_ncheckboxstatus': nCheckboxStatus
            }; //提交位置数据 POST数据
            data = JSON.stringify(data);                                        //预计数据接口
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('新建成功');
                    setTimeout("window.location.href='my_location.html';", 3000);//跳转页面
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        }
    })

})


////
//接镖
$(document).ready(function () {
    //接镖大厅页面
    $('.diamond a').click(function () {            //点击钻石切换到我的镖单页面
        window.location.href = "bs_bd.html";
    })
    //镖师镖单页面
    $('#biaoshi .m-my-dartlike-ongoing .con .item').click(function () {//点击进行中镖单显示镖单详情
        window.location.href = 'bs_bd_detail.html';
    })
    $('.m-my-dartlike-shut .appeal p a').click(function () { //点击已完成镖单申诉按钮申诉

        window.location.href = 'bd_appeal.html';
    })

    //申诉页面
    $('#onAppeal .submit a').click(function () {                    //点击完成按钮
        //var appealProof = $('.m-escort-appeal .proof');上传图片凭证
        var appealMsg = $('.m-escort-appeal .appealmsg textarea').val();
        if (appealMsg.replace(blankReg, '') === '') {                                        //判断申诉说明是否为空，如果是提示输入。
            myFunc.showAlert('请填写申诉说明');
        } else {
            //申诉凭证数据                                 //预计数据接口
            data = {'appeal_msg': appealMsg};
            JSON.stringify(data);                       //POST 数据
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    if (data) {
                        var begin = 'begin';                                   //定义begin参数
                        begin = encodeURI(encodeURI(begin));                  //对begin参数进行两次编码
                        window.location.href = 'bs_bd.html?beginVal=' + begin + '';//将begin参数传入跳转页面，实现显示指定位置效果
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        }
    })

    //镖师镖单页面
    var beginSignal = myFunc.getUrlParam('beginVal');             //接收begin参数
    beginSignal = decodeURI(decodeURI(beginSignal));
    if (beginSignal && beginSignal.indexOf('begin') != -1) {        //判断begin参数值是否存在如果存在继续
        var text = '用户已投诉';
        $('.m-bs-bd .hd ul li:eq(2)').trigger('click');
        $('.m-my-dartlike-shut .appeal h3 span').text(text);
    }

})


////
//我的收入
$(document).ready(function () {
    var totalValue;
    var myIncome = 0;
    var myRefund = 0;
    $('#myIncome ul li').each(function () {//遍历收入，取得总额
        myIncome += parseFloat($(this).find('em').text()) * 1;

    })
    $('#myRefund ul li').each(function () {//遍历支出，取得总额
        myRefund += parseFloat($(this).find('em').text()) * 1;

    })
    totalValue = (myIncome + myRefund).toFixed(2);//收入与支出相加
    $('.m-my-capital .money h2 span').text(totalValue);//把计算后金额赋值到显示区域
})


////
//我的镖单页面
$(document).ready(function () {
    var current, confirmId, shutId, delId;


    //确认镖单
    //镖师已按时送达？
    $('.m-my-dartlike-ongoing .m-confirm-order').click(function () {
        current = $(this);
        //显示提示框
        $('.m-my-receipt-alert-wrap').show();
        //取消确认镖单`
        $('.m-cancel-order').click(function () {

            $('.m-my-receipt-alert-wrap').hide();
        });
        //确认镖单已经按时送达
        $('.ontime-confirm').click(function () {
            confirmId = current.parent().parent().siblings('.list').find('ul li:eq(0) span b').text();
            data = {"confirm_id": confirmId};
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    $('.m-my-receipt-alert-wrap').hide();
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        });
    });

    //关闭订单
    //是否关闭订单
    $('.m-my-dartlike-ongoing .m-close-order').click(function () {
        current = $(this);
        //显示提示框
        $('.m-my-shut-alert-wrap').show();

        //取消关闭订单？
        $('.m-cancel-order').click(function () {
            $('.m-my-close-alert-wrap').hide();
        });

        //确认关闭订单
        $('.shut-confirm').click(function () {
            shutId = current.parent().parent().siblings('.list').find('ul li:eq(0) span b').text();
            data = {"shut_id": shutId};
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    $('.m-my-shut-alert-wrap').hide();
                    shutItem = current.parent().parent().parent();
                    shutItem.slideUp('slow', function () {
                        $(this).remove();
                    }); //关闭的订单信息传到服务器后在已关闭中出现
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        })
    });

    //删除镖单
    //是否删除镖单
    $('.m-my-dartlike-complete .m-order-del').click(function () {
        current = $(this);
        //显示提示框
        $('.m-my-del-alert-wrap').show();

        //取消删除镖单？
        $('.m-cancel-order').click(function () {

            $('.m-my-del-alert-wrap').hide();
        });

        //确认删除镖单
        $('.del-confirm').click(function () {
            delId = current.parent().parent().siblings('.list').find('ul li:eq(0) span b').text();
            data = {'del_id': delId};
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    $('.m-my-del-alert-wrap').hide();
                    delItem = current.parent().parent().parent();
                    delItem.slideUp('slow', function () {
                        $(this).remove();
                    });
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        })
    });
})

////
//投诉和退款
//
$(document).ready(function () {

    //发起投诉
    $('.my-header-complaint .submit a').click(function () {
        var complaintReason = $(this).parent().parent().siblings('.m-user-complaint').find('.item a textarea').val();
        data = {'complaint_reason': complaintReason};
        JSON.stringify(data);
        if (complaintReason.replace(blankReg, '') !== '') {
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('请等候工作人员处理');
                    setTimeout("window.location.href='my_bd.html';", 3000);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        } else {
            myFunc.showAlert('请输入投诉原因');
        }
    })

    //申请退款
    $('.my-header-refund .submit a').click(function () {
        var refundReason = $(this).parent().parent().siblings('.m-user-complaint').find('.item:eq(0) a textarea').val();
        var refundValue = $(this).parent().parent().siblings('.m-user-complaint').find('.item:eq(1) a b').text();
        data = {'refund_reason': refundReason, 'refund_value': refundValue};
        JSON.stringify(data);
        if (refundReason.replace(blankReg, '') !== '') {
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    window.location.href = 'refund_confirm.html';
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        } else {
            myFunc.showAlert('请输入退款原因');
        }
    })

})


////
//成为镖师
$(document).ready(function () {
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var bsSchool = $('.bs-school .fr input');
    var bsLocation = $('.bs-location .fr input');
    var bsName = $('.bs-name .fr input');
    var bsSex = $('.bs-sex .fr .nor .sex-l');
    var bsValid, bsIdImg;
    var bsPhoneInput = $('.yzm .cf .fr .input1');
    var validGet = $('.yzm .cf .fr p:eq(1) a');
    var validInput = $('.yzm .cf .fr .input2');
    var beBiaoshiSubmit = $('.m-be-bs .submit-box input');
    //禁用验证码输入框
    validInput.attr('disabled', 'disabled');
    //验证手机号合法性
    bsPhoneInput.blur(function () {
        if (numberReg.test($(this).val())) {
            ok1 = true;
        } else {
            myFunc.showAlert('请输入正确的手机号');
        }
    })
    validGet.click(function () {        //判断手机是否输入成功，成功后点击方可获取验证码
        if (ok1) {
            var sendPhone = bsPhoneInput.val();
            data = {'send_phone': sendPhone};
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    validInput.removeAttr('disabled');//取消禁用验证码输入框
                    myFunc.showNote('验证码已发送到您的手机');//返回函数 提醒发送成功
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        }
    });

    //验证输入验证码是否正确
    validInput.blur(function () {
        /*$.get(url,function(data){
         validCode = JSON.parse(data);
         if($(this).val() === validCode){
         ok2 = true;
         }else{
         myFunc.showAlert('请输入您收到的验证码');
         }
         })*/
        var validCode = 123456;//预计数据接口从服务器获取验证码值 GET数据
        if ($(this).val() == validCode) {
            ok2 = true;
        } else {
            myFunc.showAlert('请输入正确的验证码');
        }
    })
    beBiaoshiSubmit.click(function () {//点击成为镖师按钮
        if (bsSchool.val().replace(blankReg, '') !== '' && bsLocation.val().replace(blankReg, '') !== '' && bsName.val().replace(blankReg, '') !== '') {
            if (ok1 && ok2) {
                bsSchool = bsSchool.val();
                bsLocation = bsLocation.val();
                bsName = bsName.val();
                bsSex = bsSex.text();
                bsValid = validInput.val();
                //bsImg1 = $('.m-picture-description .bd .img:eq(0) img').src();
                //bsImg2 = $('.m-picture-description .bd .img:eq(1) img').src();
                //data ={'bs_school':bsSchool,'bs_location':bsLocation,'bs_name':bsName,'bs_sex':bsSex,'bs_valid':bsValid,'bs_img1':bsImg1,'bs_img2':bsImg2};
                //JSON.stringify(data);
                /*$.ajax({
                 type:'post',
                 url:'',
                 dataType:'json',
                 data:data,
                 async:true,
                 contentType:'application/json',
                 success:function(){
                 window.location.href ='be_bs_success.html';
                 },
                 error:function(XMLHttpRequest, textStatus, errorThrown){
                 alert(XMLHttpRequest.status);
                 alert(XMLHttpRequest.readyState);
                 alert(textStatus);
                 }
                 }) */
                window.location.href = 'be_bs_success.html';
            } else {
                myFunc.showAlert('请验证您的手机号');
            }
        } else {
            myFunc.showAlert('请完成您的信息');
        }
    });
})


////
//登录页面
$(document).ready(function () {
    var userIdInput = $('.m-logon input[type="text"]');
    var userCodeInput = $('.m-logon #password');
    var loginSubmit = $('.m-logon .item02 .m-form-submit');
    var ok1 = false;
    var ok2 = false;
    var userId, userCode, loginReady;

    //验证用户 ID是否存在
    userIdInput.blur(function () {
        /*$.get(url,function(data){
         userId  = JSON.parse(data);
         if($(this).val() === userId){
         ok2 = true;
         }else{
         myFunc.showAlert('用户名不存在');
         }
         })*/
        userId = 'swanny';//预计获取数据 获取用户名 GET数据
        if ($(this).val() == userId) {
            ok2 = true;
        } else {
            myFunc.showAlert('用户名不存在');
        }
    })

    //验证用户密码是否正确
    userCodeInput.blur(function () {

        /*$.get(url,function(data){
         userCode = JSON.parse(data);
         if($(this).val() === userCode){
         ok2 = true;
         }else{
         myFunc.showAlert('密码不正确');
         }
         })*/
        var userCode = 'swan1987';//预计获取数据 获取用户密码 GET数据
        if ($(this).val() == userCode) {
            ok1 = true;
        } else {
            myFunc.showAlert('密码不正确');
        }
    })

    //验证提交
    loginSubmit.click(function () {       //点击提交按钮
        if (ok1 && ok2) {
            //登录成功 预计数据 POST数据
            loginReady = true;
            data = {'login_ready': loginReady};
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('登录成功');
                    setTimeout("window.location.href='index.html';", 3000);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        } else {
            return false;
        }
    })
})


////
//注册页面
$(document).ready(function () {
    var registerIdInput = $('.m-register .item01:eq(0) input');
    var validCodeInput = $('.m-register .item01:eq(1) input');
    var validCodeGet = $('.m-register .item01:eq(1) a')
    var registerCodeInput = $('.m-register .item01:eq(2) input');
    var registerSubmit = $('.m-register .item02 .m-form-submit');
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var registerId, registerCode;

    //验证手机号合法性
    registerIdInput.blur(function () {
        if (numberReg.test($(this).val())) {
            ok1 = true;
        } else {
            myFunc.showAlert('请输入正确的手机号');
        }
    })

    //禁用验证码输入框
    validCodeInput.attr('disabled', 'disabled');
    validCodeGet.click(function () {
        if (ok1) {
            data = {'send_signal': ok1};
            JSON.parse(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    validCodeInput.removeAttr('disabled');
                    myFunc.showNote('验证码已发送到您的手机');//预计数据接口 判断是否发送成功
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        }
    });

    //验证输入验证码是否正确
    validCodeInput.blur(function () {
        /*$.get(url,function(data){
         validCode = JSON.parse(data);
         if($(this).val() === validCode){
         ok2 = true;
         }else{
         myFunc.showAlert('请输入您收到的验证码');
         }
         })*/
        var validCode = 123456;//预计数据接口从服务器获取验证码值 GET数据
        if ($(this).val() == validCode) {
            ok2 = true;
        } else {
            myFunc.showAlert('请输入您收到的验证码');
        }
    })

    //验证输入密码是否合法
    registerCodeInput.blur(function () {
        if (codeReg.test($(this).val())) {
            ok3 = true;
        } else {
            myFunc.showAlert('请输入至少8位组合密码');
        }
    })

    //提交注册数据
    registerSubmit.click(function () {       //点击提交按钮
        if (ok1 && ok2 && ok3) {
            //注册成功 预计数据接口
            registerId = registerIdInput.val(),
                registerCode = registerCodeInput.val();
            data = {'register_id': registerId, 'register_code': registerCode};
            JSON.stringify(data); //预计数据接口 POST数据
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('注册成功');
                    setTimeout("window.location.href='index.html';", 3000); //启动3秒定时
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        } else {
            return false;
        }
    })
})


////
//忘记密码页面
$(document).ready(function () {
    var forgetIdInput = $('.m-forget .item01:eq(0) input');
    var validCodeInput = $('.m-forget .item01:eq(1) input');
    var validCodeGet = $('.m-forget .item01:eq(1) a')
    var forgetCodeInput = $('.m-forget .item01:eq(2) input');
    var forgetSubmit = $('.m-forget .item02 .m-form-submit');
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var registerId, registerCode;

    //验证手机号合法性
    forgetIdInput.blur(function () {
        if (numberReg.test($(this).val())) {
            ok1 = true;
        } else {
            myFunc.showAlert('请输入正确的手机号');
        }
    })

    //禁用验证码输入框
    validCodeInput.attr('disabled', 'disabled');
    validCodeGet.click(function () {
        if (ok1) {
            data = {'send_signal': ok1};
            JSON.parse(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    validCodeInput.removeAttr('disabled');
                    myFunc.showNote('验证码已发送到您的手机');//预计数据接口 判断是否发送成功
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        }
    });

    //验证输入验证码是否正确
    validCodeInput.blur(function () {
        /*$.get(url,function(data){
         validCode = JSON.parse(data);
         if($(this).val() === validCode){
         ok2 = true;
         }else{
         myFunc.showAlert('请输入您收到的验证码');
         }
         })*/
        var validCode = 123456;//预计数据接口从服务器获取验证码值 GET数据
        if ($(this).val() == validCode) {
            ok2 = true;
        } else {
            myFunc.showAlert('请输入您收到的验证码');
        }
    })

    //验证输入密码是否合法
    forgetCodeInput.blur(function () {
        if (codeReg.test($(this).val())) {
            ok3 = true;
        } else {
            myFunc.showAlert('请输入至少8位组合密码');
        }
    })

    //提交新数据
    forgetSubmit.click(function () {       //点击提交按钮
        if (ok1 && ok2 && ok3) {
            //填写成功 预计数据接口
            forgetId = forgetIdInput.val(),
                forgetCode = forgetCodeInput.val();
            data = {'forget_id': forgetId, 'forget_code': forgetCode};
            JSON.stringify(data); //预计数据接口 POST数据
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('登录成功');
                    setTimeout("window.location.href='index.html';", 3000); //启动3秒定时
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })

        } else {
            return false;
        }
    })
})


////
//更改密码页面
$(document).ready(function () {
    var oldCode, newCode;
    var inputOld = $('.m-account-security .item:eq(0) input');
    var newFirst = $('.m-account-security .item:eq(1) input');
    var newSecond = $('.m-account-security .item:eq(2) input');
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    //验证输入旧密码
    inputOld.blur(function () {

        /*$.get(url,function(data){
         oldCode  = JSON.parse(data);
         if($(this).val() === oldCode){
         ok1 = true;
         }else{
         myFunc.showAlert('请输入正确的密码');
         }
         })*/
        oldCode = 'swan1987';    //预计数据接口从服务器获取验证码值GET数据
        if ($(this).val() === oldCode) {
            ok1 = true;
        } else {
            myFunc.showAlert('请输入正确的密码');
        }
    })
    //验证新密码是否合法
    newFirst.blur(function () {
        if ($(this).val().replace(blankReg, '') !== '' && codeReg.test($(this).val()) && $(this).val().length > 7) {
            ok2 = true;
        } else {
            myFunc.showAlert('请输入至少8位组合密码');
        }
    })
    //验证两次输入是否一致
    newSecond.blur(function () {
        if ($(this).val() == newFirst.val()) {
            ok3 = true;
        } else {
            myFunc.showAlert('两次输入不一致');
        }
    })
    //验证提交
    $('.m-account-security .bd input').click(function () {       //点击提交按钮
        if (ok1 && ok2 && ok3) {
            newCode = newSecond.val();
            data = {'new_code': newCode};
            JSON.stringify(data);//预计数据接口 POST数据
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    myFunc.showNote('修改密码成功');
                    setTimeout("window.location.href='safe.html';", 3000); //启动3秒定时
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        } else {
            return false;
        }
    })
})


////
//图文帖子点赞
$(document).ready(function () {

    //点赞按钮
    $('.m-invitation-ft .zan a').click(function () {
        if ($(this).hasClass('icon-zan')) {                             //取消点赞
            $(this).removeClass('icon-zan').addClass('icon-unzan');
            var numberFrom = $(this).parent().siblings('p').children('i');
            var number = numberFrom.text();
            number = parseInt(number);
            number = number - 1;
            data = {'zan_less': number};
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    numberFrom.text(number);//点赞人数减一个
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        } else {                                                        //点赞
            $(this).removeClass('icon-unzan').addClass('icon-zan');
            var numberFrom = $(this).parent().siblings('p').children('i')
            var number = numberFrom.text();
            number = parseInt(number);
            number = number + 1;
            data = {'zan_add': number};
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    numberFrom.text(number);
                    numberFrom.text(number);//点赞人数加一个
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        }
    })
})


////
//我的页面
$(document).ready(function () {
    $('.m-my-index-hd .cf .head').click(function () {       //头像点击跳转个人信息页面
        window.location.href = 'my_info.html';
    })

    if ($.cookie('c_infourl')) {                            //判断用户头像如果在cookie里，赋值
        var infoImg = $.cookie('c_infourl');
        $('.m-my-index-hd .cf .head img').attr('src', infoImg);
    } else {                                                //如果用户头cookie未定义，从服务器获取头像地址 GET数据
        /*$.get(url,function(data){
         $('.m-my-index-hd .cf .head img').attr('src',infoImg);
         })*/
    }
})


////
//个人信息页面
$(document).ready(function () {
    var infoImg, infoName, infoSex, infoBirth;
    $('.m-info-header .submit a').click(function () {               //提交完成按钮
        infoImg = $('#infoImg').attr('src');
        infoName = $('.m-person-info .infoName input').val();
        infoSex = $('.m-person-info .infosex').text();
        infoBirth = $('.m-person-info .infobirth input').val();
        if (infoName != '') {                                       //如果符合条件，提交数据
            //图片上传成功后;获取图片url返回我的页面时，头像图片显示        
            infoImg = 'images/head02.png';
            $.cookie('c_infourl', infoImg, {expires: 5 * 365, path: '/'});
            data = {'info_img': infoImg};                           //预计数据接口 POST数据
            JSON.stringify(data);
            $.ajax({
                type: 'post',
                url: '',
                dataType: 'json',
                data: data,
                async: true,
                contentType: 'application/json',
                success: function () {
                    window.location.href = 'my.html';
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            })
        } else {                                                    //如果不符合条件，提示，并不能提交
            $('.m-person-info .infoName input').attr('placeholder', '请输入');
            return false;
        }

    })
})