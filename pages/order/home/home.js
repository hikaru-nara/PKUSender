// pages/order/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    coinNumPicker: [1,2,3],
    tabbar: {},
  },

  PickerChange(e) {
    // console.log(e);
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    // console.log("order");
    // // 首先要获得用户的目前代币数量，这里先用一个数字代替
    var userCoinNum = 50, tmpIndex = 1, tmpList = [];
    for(;tmpIndex<=userCoinNum; ++tmpIndex){
      tmpList.push(tmpIndex);
    }
    this.setData({
      coinNumPicker:tmpList
    })
    
    // console.log(this.data.coinNumPicker);
    // // 
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