// pages/plugin/coinRemain/coinRemain.js
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coinNumber: 0,
    reputation: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(!app.globalData.userInfo.coinNumber){
      this.setData({
        coinNumber: app.globalData.initCoinNumber
      })
    }
    else{
      this.setData({
        coinNumber: app.globalData.userInfo.coinNumber
      })
    }
    if(!app.globalData.userInfo.reputation){
      this.setData({
        reputation: app.globalData.initReputation
      })
    }
    else{
      this.setData({
        reputation: app.globalData.userInfo.reputation
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