// pages/plugin/coinRemain/coinRemain.js
const app =  getApp();
const utils = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coin_num: 0,
    credit: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo.address)
    if(!app.globalData.userInfo.coin_num){
      this.setData({
        coinNumber: app.globalData.init_coin_num
      })
    }
    else{
      this.setData({
        coinNumber: app.globalData.userInfo.coin_num
      })
    }
    if(!app.globalData.userInfo.credit){
      this.setData({
        reputation: app.globalData.init_credit
      })
    }
    else{
      this.setData({
        reputation: app.globalData.userInfo.credit
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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