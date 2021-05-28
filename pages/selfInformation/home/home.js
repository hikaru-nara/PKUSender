//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: {},
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
        console.log(res.userInfo)
        let tmpUserInfo = res.userInfo;
        tmpUserInfo.studentID = app.globalData.initStudentID;
        tmpUserInfo.userID = res.userInfo.nickName;
        tmpUserInfo.addressList = app.globalData.initAddressList;
        tmpUserInfo.coinNumber = app.globalData.initCoinNumber;
        tmpUserInfo.reputation = app.globalData.initReputation;
        this.setData({
          userInfo: tmpUserInfo,
          hasUserInfo: true
        })
        app.globalData.userInfo = tmpUserInfo;
        if(!app.globalData.checkMode){
          wx.request({
            url: app.globalData.serverUrl+'?wx_id'+String(tmpUserInfo.userID),
            method: 'GET',
            success: (res)=>{
              if (JSON.parse(res.data).length == 0){
                this.setData({
                  userInfo: JSON.parse(res.data)[0]
                })
                console.log('selfInfomation home get succeed')
              }
              else{
                wx.request({
                  url: app.globalData.serverUrl+'?wx_id'+String(tmpUserInfo.userID),
                  method: 'POST',
                  data: this.data.userInfo,
                  success: (res)=>{
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
