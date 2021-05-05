// pages/selfInformation/commonAddress/singleAddress/singleAddress.js
const utils = require('../../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:"addressList",
    title:'',
    index:0,
    newAddressData:''
  },

  
  setAddressData: function (e){
    this.setData({
      newAddressData : e.detail.value
    })
  },

  
  addAddressData: function () {
    utils.updateAddressList(this);
    // console.log(this.data.addressList)
    if(this.data.newAddressData != ''){
      var tmpAddressList = this.data.addressList;
      tmpAddressList.push({strMessage:this.data.newAddressData});
      wx.setStorage({//存储到本地
        key:"addressList",
        data:tmpAddressList
      });
    }
    // 修改之后记得同步到服务器端
    wx.navigateBack({         //返回上一页  
      delta:1
    });
  },
  
  deleteAddressData: function () {
    utils.updateAddressList(this);
    var tmpAddressList = this.data.addressList;
    tmpAddressList.splice(this.data.index, 1);
    wx.setStorage({//存储到本地
      key:"addressList",
      data:tmpAddressList
    });
    // 修改之后记得同步到服务器端
    wx.navigateBack({         //返回上一页  
      delta:1
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options){
    // console.log(options.index);
    this.setData({
      index:parseInt(options.index)
    });
    if(this.data.index == -1){
      this.setData({
        title:'新增地址'
      });
    }
    else{
      var newIndex = this.data.index + 1;
      this.setData({
        title:'常用地址' + newIndex.toString()
      });
    }
    // console.log("Single Address");
    utils.updateAddressList(this);
    // console.log(this.data.addressList)
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