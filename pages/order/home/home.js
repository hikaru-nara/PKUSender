// pages/order/home/home.js
const app = getApp();
const utils = require("../../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coinNumberIndex: null,
    coinNumPicker: [],
    orderTypeIndex: null,
    orderTypePicker: ['取快递','取外卖','送物品', '其他'],
    tabbar: {},
    src_address: null,
    dest_address: null,
    coin_cost: null,
    order_type:null,
    description: null,
    secret_info: null,
    src_address_label: false,
    dest_address_label: false,
    order_type_label: false,
    coin_cost_label: false,
    description_label: false,
    secret_info_label: false,
    coin_overflow_label: false,
    total_coin_number : -1,
    tmp_value: '',
    ifshow: false,
    src_address_info: '请填写订单信息',
    window_label: false,
  },

  coinNumberPickerChange(e) {
    // console.log(e);
    this.setData({
      coinNumberIndex: e.detail.value,
      coin_cost: this.data.coinNumPicker[parseInt(e.detail.value)],
      coin_cost_label: false,
    })
    this.setData({
      coin_overflow_label: this.data.coin_cost > app.globalData.coin_num
    })
  },

  orderTypePickerChange(e){
    this.setData({
      orderTypeIndex: e.detail.value,
      order_type:  (parseInt(e.detail.value) + 1)%(this.data.orderTypePicker.length),
      order_type_label: false
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
    let tmpIndex = 1, tmpList = [];
    userCoinNum = app.globalData.max_order_coin_number;
    for(;tmpIndex<=userCoinNum; ++tmpIndex){
      tmpList.push(tmpIndex);
    }
    this.setData({
      coinNumPicker:tmpList
    })
  },

  init_parameters(){
    this.setData({
      coinNumberIndex: null,
      coinNumPicker: [],
      orderTypeIndex: null,
      orderTypePicker: ['取快递','取外卖','送物品', '其他'],
      tabbar: {},
      src_address: null,
      dest_address: null,
      coin_cost: null,
      order_type: null,
      description: null,
      secret_info: null,
      src_address_label: false,
      dest_address_label: false,
      coin_cost_label: false,
      order_type_label: false,
      description_label: false,
      secret_info_label: false,
      coin_overflow_label: false,
      total_coin_number : -1,
      tmp_value: '',
      window_label: false,
    })
    this.init_coinNumPicker()
  },

  updateOrderInfo(e){
    
    this.setData({
      src_address_label: this.data.src_address == null,
      dest_address_label: this.data.dest_address == null,
      coin_cost_label: this.data.coin_cost == null,
      order_type_label: this.data.order_type == null,
      description_label: this.data.description == null,
      secret_info_label: this.data.secret_info == null,
      coin_overflow_label: this.data.coin_cost > app.globalData.userInfo.coin_num
    })
    if(this.data.src_address == null || this.data.dest_address == null ||
      this.data.coin_cost == null ||  this.data.order_type == null ||
      this.data.secret_info == null ||this.data.description  == null ||
      this.data.coin_overflow_label == true){
        this.setData({
          total_coin_number : app.globalData.userInfo.coin_num
        })
        return;
    }
    // console.log(this.data)
    let user_post_data = {};
    app.globalData.userInfo.coin_num = app.globalData.userInfo.coin_num - this.data.coin_cost;
    utils.get_post_userInfo(app.globalData.userInfo, user_post_data, 13, null);
    wx.request({
      url: app.globalData.serverUrl+'/user/',
      method: 'POST',
      data: user_post_data,
      success: (res) =>{
        console.log(res)
        console.log('user coin num update succeed')
      }
    })
    let order_post_data = utils.get_init_order_data(app.globalData.userInfo, this.data)
    if(!app.globalData.checkMode){
      wx.request({
        url: app.globalData.serverUrl+'/order_num/?',
        method: 'GET',
        success: (res) =>{
          console.log('order get order_num succeed')
          // console.log(res.data)
          let order_num = parseInt(res.data);
          order_post_data.order_id = (order_num + 1000).toString();
          // console.log(order_num)
          // console.log(order_post_data)
          wx.request({
            url: app.globalData.serverUrl+'/order/',
            method: 'POST',
            data: order_post_data,
            success: (res) =>{
              console.log(res)
              console.log('order post order succeed')
            }
          })
        }
      })
    }
    this.init_parameters()
    this.setData({
      window_label: true,
      ifshow: false
    })
    setTimeout(
      ()=>{
      wx.switchTab({
        url: '/pages/orderCenter/home/home',
      }),
      this.setData({
        window_label: false
      })
    }, 2000
    )
    // console.log(this.data.coinNumberIndex)
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
    if(app.globalData.userInfo.user_id){
      this.setData({
        ifshow:true,
        // window_label:false
      })
    }
    else{
      this.setData({
        ifshow:false,
        // window_label:false
      })
    }
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