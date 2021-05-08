// pages/takeOrder/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "human1": "歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜",
    "human2": "帕布罗.迭戈.荷瑟.山迪亚哥.弗朗西斯科.德.保拉.居安.尼波莫切诺.克瑞斯皮尼亚诺.德.罗斯.瑞米迪欧斯.西波瑞亚诺.德.拉.山迪西玛.特立尼达.玛利亚.帕里西奥.克里托.瑞兹.布拉斯科.毕加索",
    "start": "北京大学45乙504",
    "target": "北京大学45乙539",
    "self": "取件码 123456789，大件",
    "place": "北京大学二教",
    "message": "轻拿轻放，是玻璃制品",
    "state": "北大校内闪送王非你莫属，又快又好，666！！打call",
    "money":3,
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['1','2','3','4','5'],//下拉列表的数据
    "index":2,
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
  showModal_time(e){
    this.setData({
      modalName: e.currentTarget.dataset.target
    });
    setTimeout(
      ()=>{wx.switchTab({
        url: e.currentTarget.dataset.navigate,
      })}, 2000
    )
  },
  // 点击下拉显示框
  selectTap(){
    this.setData({
     show: !this.data.show
    });
    },
    // 点击下拉列表
    optionTap(e){
      let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
       index:Index,
       show:!this.data.show
      });
      },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
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