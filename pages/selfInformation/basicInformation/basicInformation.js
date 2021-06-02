const utils = require("../../../utils/util");

// pages/plugin/basicInformation/basicInformation.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    genderPicker: ['保密', '男', '女'],
    userInfo : null,
    user_name : null,
    student_id : null,
    gender : null,
  },
  
  PickerChange(e) {
    // console.log(e);
    this.setData({
      index: e.detail.value,
      gender: e.detail.value,
    })
  },

  updateUserInfo: function(e){
    // 这里之后可以写一个合理性检验
    let tmpUserInfo = this.data.userInfo;
    if(this.data.user_name != null){
      tmpUserInfo.user_name = this.data.user_name;
    }
    if(this.data.student_id != null){
      tmpUserInfo.student_id = this.data.student_id;
    }
    if(this.data.gender != null){
      tmpUserInfo.gender = this.data.gender;
    }
    this.setData({
      userInfo: tmpUserInfo
    });
    app.globalData.userInfo = this.data.userInfo;
    // 向服务器发送同步信息
    if(!app.globalData.checkMode){
      let post_data = {}
      utils.get_post_userInfo(this.data.userInfo, post_data, 20, app.globalData.sep_op)
      wx.request({
        url: app.globalData.serverUrl+'/user/',
        method: 'POST',
        data : post_data,
        success: (res)=>{
          console.log(res)
          console.log('basicInformation post succeed')
        }
      })
    }
    wx.navigateBack({
      delta: 1
    })
  },

  setNickName: function (e) {
    this.setData({
      user_name: e.detail.value
    })
  },

  setStudentID: function (e) {
    this.setData({
      student_id: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
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