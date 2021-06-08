Page({
  data:{
    element:{}
  },
  CommentText: function(e){
    this.setData({
      ['element.comment']: e.detail.value
    })
  },
  SubmitComment: function(){
    var element = this.data.element;
    element.type = "17";
    console.log(JSON.stringify(element));
    wx.request({
      url: 'http://47.97.40.237:8000/pkusender/order/',
      method: 'POST',
      data: JSON.stringify(element),
      success: (res)=>{
        console.log('order success send');
      }
    })
    wx.navigateBack({         //返回上一页  
      delta:2
    });
  },
  onLoad: function (options) {
    var index = options.index;
    wx.getStorage({
      key: 'place_orders',
      success: (res)=>{
        this.setData({
          elements: res.data
        })
        var element = this.data.elements[index];
        //转换成字符串发给后端
        var order_status = element.order_status.toString();
        var coin_cost = element.coin_cost.toString();
        var order_type = element.order_type.toString();
        this.setData({
          element:element,
          ['element.order_type']: order_type,
          ['element.order_status']: order_status,
          ['element.coin_cost']: coin_cost
        })
      }
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