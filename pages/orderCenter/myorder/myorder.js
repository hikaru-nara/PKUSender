const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  onShow: function () {
    wx.request({
      url: 'http://47.97.40.237:8000/pkusender/user/?user_id='+app.globalData.userInfo.user_id+'&type=1',
      method: 'GET',
      success: (res)=>{
        var ticketlist = JSON.parse(res.data);
        console.log(res);
        console.log(app.globalData.userInfo.user_id);
        wx.setStorage({
          key: 'place_orders', 
          data:ticketlist
        })
        this.setData({
          elements: ticketlist
        })
        // console.log(ticketlist[0])
      }
    })
    
  },
  navToDetail: function(arg){
    wx.navigateTo({
      url: "/pages/orderCenter/myform/myform",
      success: function(res){
        res.eventChannel.emit('acceptDataFromOpenerPage', {index: arg.currentTarget.dataset.id})
      }
    })
    // console.log(arg.currentTarget.dataset.id);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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