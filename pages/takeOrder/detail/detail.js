// pages/takeOrder/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    elements:[
      {
        "title": "取快递",
        "name": "UserHot",
        "reward": 3,
        "requestID": 0,
        "detail": "从快递点凭取件码xxxxx取快递送到39楼楼下，联系电话xxxxx，当面取，急！！",
        "time": "21:10",
        "emergency": 5,
        "from": "34楼后快递点",
        "to": "39楼楼下",
        "object": "快递",
        "avatar": "/images/LOGO.png"
      },
      {
        "title": "食堂外带",
        "name": "UserCold",
        "reward": 1,
        "requestID": 1,
        "detail": "帮忙家园三楼打包一份鸡腿饭送到45乙楼下把，谢谢",
        "time": "19:22",
        "emergency": 2,
        "from": "34楼后快递点",
        "to": "45乙楼楼下",
        "object": "鸡腿饭",
        "avatar": "/images/LOGO.png"
      }

    ],
    idx: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // console.log(options);
    const eventChannel = this.getOpenerEventChannel()
    // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    // eventChannel.emit('someEvent', {data: 'test'});
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    var index = 0;
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      index = data.index;
    })
    this.setData({
      idx:index
    })
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