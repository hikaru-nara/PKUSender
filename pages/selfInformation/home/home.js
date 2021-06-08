//index.js
//获取应用实例
const app = getApp();
const utils = require('../../../utils/util.js');
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: null,
    avatar_url : null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    tabbar: {},
    json_data: null,
  },
  
  onLoad: function () {
    // wx.request({
    //   url: app.globalData.serverUrl + '?wx_id=wx_1&type=0',
    //   methos: 'GET',
    //   success: (res) => {
    //     console.log(JSON.parse(res.data).length)
    //   }
    // })
    app.editTabbar();
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  onShow: function (){
    app.editTabbar();
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // console.log(res.userInfo)
        let tmpUserInfo = {}
        // tmpUserInfo.student_id = app.globalData.initStudentID;
        tmpUserInfo.user_id = (res.userInfo.nickName).replace('&','%26');
        tmpUserInfo.user_name = res.userInfo.nickName;
        tmpUserInfo.gender = res.userInfo.gender;
        tmpUserInfo.address = app.globalData.init_address;
        tmpUserInfo.coin_num = app.globalData.init_coin_num;
        tmpUserInfo.credit = app.globalData.init_credit;
        tmpUserInfo.call_order_list = app.globalData.init_call_order_list;
        tmpUserInfo.take_order_list = app.globalData.init_take_order_list;
        tmpUserInfo.avatar_url = res.userInfo.avatarUrl;
        this.setData({
          userInfo: tmpUserInfo,
          hasUserInfo: true,
          avatar_url: res.userInfo.avatarUrl
        })
        app.globalData.userInfo = tmpUserInfo;
        // console.log(tmpUserInfo)
        if(!app.globalData.checkMode){
          wx.request({
            url: app.globalData.serverUrl+'/user/?user_id='+tmpUserInfo.user_id+'&type=0',
            method: 'GET',
            success: (res)=>{
              if (res.data != 'user_id error!'){
                // console.log(res.data)
                this.setData({
                  userInfo: JSON.parse(res.data)[0]
                })
                this.data.userInfo.user_id = this.data.userInfo.user_id.replace('&','%26');
                this.data.userInfo.address = utils.parse_address(this.data.userInfo.address, app.globalData.sep_op);
                app.globalData.userInfo = this.data.userInfo;
                console.log('selfInfomation home get succeed')
              }
              else{
                let post_data = {}
                utils.get_post_userInfo(this.data.userInfo, post_data, 0, app.globalData.sep_op)
                // console.log(post_data)
                wx.request({
                  url: app.globalData.serverUrl+'/user/',
                  method: 'POST',
                  data: post_data,
                  success: (res)=>{
                    console.log(res)
                    console.log('selfInformation home post succeed')
                  }
                })
              }
            }, 
          })
        }
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    // console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
