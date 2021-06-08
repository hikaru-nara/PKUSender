const app = getApp();
Page({
  data:{
    Type:''
  },
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
    wx.getStorage({
      key: 'receive_orders',
      success: (res)=>{
        this.setData({
          elements: res.data
        })
        var State = this.data.State;
        var order_status = this.data.elements[index].order_status;
        if (order_status == 1){
          State = "已接单"
        }
        else if(order_status == 2){
          State = "已完成"
        }
        else if(order_status == 0){
          State = "未接单"
        }
        var type = this.data.elements[index].order_type;
        var Type = this.data.Type;
        if (type == 0){
          Type = "其他"
        }
        else if(type == 1){
          Type = "取快递"
        }
        else if(type == 2){
          Type = "取外卖"
        }
        else if(type == 3){
          Type = "送物品"
        }
        this.setData({
          State:State,
          Type:Type
        })
      }
    })
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
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  MultiChange(e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  DeleteOrder: function () {
    wx.navigateBack({         //返回上一页  
      delta:1
    });
  },
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  }
})