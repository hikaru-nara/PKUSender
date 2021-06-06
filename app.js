//app.js
App({
  onLaunch: function() {
    //隐藏系统tabbar
    // wx.hideTabBar();
    //获取设备信息
    this.getSystemInfo();

    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
		if (capsule) {
		 	this.globalData.Custom = capsule;
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
    // 登录
    // // 获取用户信息
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           console.log('getUserInfo success')
    //           this.globalData.userInfo = res.userInfo
    //           console.log(res.userInfo)
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },

  getSystemInfo: function () {
    let t = this;
    wx.getSystemInfo({
      success: function (res) {
        t.globalData.systemInfo = res;
      }
    });
  },

  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },

  globalData: {
    systemInfo: null,//客户端设备信息
    serverUrl: 'http://47.97.40.237:8000/pkusender',
    userInfo: {},
    checkMode: false,
    init_student_ID: 1700012964,
    max_order_coin_number: 5,
    // init_address: [{
    //   strMessage: '北京大学45乙楼504室'
    // }, {
    //   strMessage: '北京大学第二教学楼'
    // }],
    init_address: [],
    init_coin_num: 50,
    init_credit: 100,
    init_call_order_list: '',
    init_take_order_list: '',
    sep_op: '<SEP>',
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#1c1c1b",
      "list": [
        {
          "pagePath": "/pages/orderCenter/home/home",
          "iconPath": "/images/tabbar/basics.png",
          "selectedIconPath": "/images/tabbar/basics_cur.png",
          "text": "订单中心"
        },
        {
          "pagePath": "/pages/takeOrder/home/home",
          "iconPath": "/images/tabbar/component.png",
          "selectedIconPath": "/images/tabbar/component_cur.png",
          "text": "接单"
        },
        {
          "pagePath": "/pages/order/home/home",
          "iconPath": "/images/tabbar/plugin.png",
          "selectedIconPath": "/images/tabbar/plugin_cur.png",
          "text": "下单"
        },
        {
          "pagePath": "/pages/selfInformation/home/home",
          "iconPath": "/images/tabbar/about.png",
          "selectedIconPath": "/images/tabbar/about_cur.png",
          "text": "个人中心"
        }
      ]
    },
    ColorList: [{
        title: '嫣红',
        name: 'red',
        color: '#e54d42'
      },
      {
        title: '桔橙',
        name: 'orange',
        color: '#f37b1d'
      },
      {
        title: '明黄',
        name: 'yellow',
        color: '#fbbd08'
      },
      {
        title: '橄榄',
        name: 'olive',
        color: '#8dc63f'
      },
      {
        title: '森绿',
        name: 'green',
        color: '#39b54a'
      },
      {
        title: '天青',
        name: 'cyan',
        color: '#1cbbb4'
      },
      {
        title: '海蓝',
        name: 'blue',
        color: '#0081ff'
      },
      {
        title: '姹紫',
        name: 'purple',
        color: '#6739b6'
      },
      {
        title: '木槿',
        name: 'mauve',
        color: '#9c26b0'
      },
      {
        title: '桃粉',
        name: 'pink',
        color: '#e03997'
      },
      {
        title: '棕褐',
        name: 'brown',
        color: '#a5673f'
      },
      {
        title: '玄灰',
        name: 'grey',
        color: '#8799a3'
      },
      {
        title: '草灰',
        name: 'gray',
        color: '#aaaaaa'
      },
      {
        title: '墨黑',
        name: 'black',
        color: '#333333'
      },
      {
        title: '雅白',
        name: 'white',
        color: '#ffffff'
      },
    ]
  }
})
