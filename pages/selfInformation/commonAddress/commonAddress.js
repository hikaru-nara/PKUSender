// pages/plugin/commonAddress/commonAddress.js
const utils = require('../../../utils/util.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 之后这里的addressList初始化从服务器读
    addressList: null
  },

  addButtonGoto: function(){
    wx.navigateTo({
      url: '/pages/selfInformation/commonAddress/singleAddress/singleAddress?index=-1',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if(!app.globalData.checkMode){
    //   wx.request({
    //     url: app.globalData.serverUrl+'?wx_id' + String(app.globalData.userInfo.userID),
    //     method: 'GET',
    //     success: (res)=>{
    //       console.log('commonAddress get succeed')
    //       this.setData({
    //         addressList: JSON.parse(res.data)[0].addressList
    //       })
    //     }
    //   })
    // }
    let tmpAddressList = app.globalData.userInfo.address;
    this.setData({
      addressLList: app.globalData.userInfo.address
    })
    // console.log("Common Address");
    wx.setStorage({//存储到本地
      key:"addressList",
      data:tmpAddressList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    utils.updateAddressList(this);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})