// pages/order/home/home.js
const app = getApp();
const utils = require("../../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null,
    coinNumPicker: [],
    tabbar: {},
    src_address: null,
    dest_address: null,
    coin_cost: null,
    description: null,
    secret_info: null,
    src_address_label: false,
    dest_address_label: false,
    coin_cost_label: false,
    description_label: false,
    secret_info_label: false,
    tmp_value: '',
  },

  PickerChange(e) {
    // console.log(e);
    this.setData({
      index: e.detail.value,
      coin_cost: this.data.coinNumPicker[parseInt(e.detail.value)],
      coin_cost_label: false
    })
  },

  set_src_address(e){
    this.setData({
      src_address: e.detail.value,
      // src_address_label: false
    })
  },

  set_dest_address(e){
    this.setData({
      dest_address: e.detail.value,
      // dest_address_label: false
    })
  },

  set_description(e){
    this.setData({
      description: e.detail.value,
      // description_label: false
    })
  },

  set_secret_info(e){
    this.setData({
      secret_info: e.detail.value,
      // secret_info_label: false
    })
  },

  init_coinNumPicker(){
    let userCoinNum;
    let tmpIndex = 1, tmpList = []
    if(app.globalData.userInfo.coin_num){
      userCoinNum = app.globalData.userInfo.coin_num;
    }
    else{
      userCoinNum = app.globalData.init_coin_num;
    }
    for(;tmpIndex<=userCoinNum; ++tmpIndex){
      tmpList.push(tmpIndex);
    }
    this.setData({
      coinNumPicker:tmpList
    })
  },

  init_parameters(){
    this.setData({
      index: null,
      coinNumPicker: [],
      tabbar: {},
      src_address: null,
      dest_address: null,
      coin_cost: null,
      description: null,
      secret_info: null,
      src_address_label: false,
      dest_address_label: false,
      coin_cost_label: false,
      description_label: false,
      secret_info_label: false,
      tmp_value: '',
    })
    this.init_coinNumPicker()
  },

  updateOrderInfo(e){
    
    this.setData({
      src_address_label: this.data.src_address == null,
      dest_address_label: this.data.dest_address == null,
      coin_cost_label: this.data.coin_cost == null,
      description_label: this.data.description == null,
      secret_info_label: this.data.secret_info == null
    })
    if(this.data.src_address == null || this.data.dest_address == null ||
      this.data.coin_cost == null || this.data.description  == null ||
      this.data.secret_info == null){
        return;
    }
    // console.log(this.data)
    let order_post_data = utils.get_init_order_data(app.globalData.userInfo, this.data)
    if(!app.globalData.checkMode){
      wx.request({
        url: app.globalData.serverUrl+'/order_num/?',
        method: 'GET',
        success: (res) =>{
          console.log('order get order_num succeed')
          // console.log(res.data)
          let order_num = parseInt(res.data);
          order_post_data.order_id = (order_num + 1).toString();
          // console.log(order_num)
          console.log(order_post_data)
          wx.request({
            url: app.globalData.serverUrl+'/order/',
            method: 'POST',
            data: order_post_data,
            success: (res) =>{
              console.log('order post order succeed')
            }
          })
        }
      })
    }
    this.init_parameters()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
    // console.log("order");
    // // 首先要获得用户的目前代币数量，这里先用一个数字代替
    this.init_coinNumPicker();
    
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