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
      key: 'history_orders',
      success: (res)=>{
        this.setData({
          elements: res.data
        })
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
})