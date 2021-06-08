
const app = getApp();
const utils = require('../../../utils/util.js');
Page({
  data:{
    element:{},
    PersonalInfo:{},
    Delete:{},
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['1','2','3','4','5'],//下拉列表的数据
    Index: '0',
    Idx: 0,
    State: '',
    Type:''
  },
    // 点击下拉显示框
    selectTap(){
      this.setData({
        show: !this.data.show
      });
    },

    // 点击下拉列表
    optionTap(e){
      let index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      var coin = index + 1;
      var coin_cost = coin.toString();
      this.setData({
        Index:index,
        show:!this.data.show,
        ['element.coin_cost']:coin_cost
      });
    },

    onLoad: function (options) {
      // console.log("Common Address");
      const eventChannel = this.getOpenerEventChannel()
      var index = 0;
      eventChannel.on('acceptDataFromOpenerPage', function(data) {
        index = data.index;
      })
      wx.getStorage({
        key: 'place_orders',
        success: (res)=>{
          this.setData({
            elements: res.data
          })
          var element = this.data.elements[index];
          var type = element.order_type;
          var choiceidx = element.coin_cost;
          choiceidx = choiceidx - 1;
          var State = this.data.State;
          var Type = this.data.Type;
          var status = element.order_status;
          if (status == 1){
            State = "已接单"
          }
          else if(status == 2){
            State = "已完成"
          }
          else if(status == 0){
            State = "未接单"
          }
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
          //转换成字符串发给后端
          var order_status = element.order_status.toString();
          var coin_cost = element.coin_cost.toString();
          var order_type = element.order_type.toString();
          this.setData({
            element:element,
            idx:index,
            Idx:index,
            Index:choiceidx,
            State:State,
            Type:Type,
            ['element.order_type']: order_type,
            ['element.order_status']: order_status,
            ['element.coin_cost']: coin_cost
          })
        }
      })
    },

  showselfmessage(e) {
    this.setData({
      ['element.secret_info']: e.detail.value
    })
  },
  
  showdescription(e) {
    this.setData({
      ['element.description']: e.detail.value
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  gotoStartPage:function(e) {
    wx.navigateTo({
      url: 'startaddress/startaddress',
    })
  },
  gotoTargetPage:function(e) {
    wx.navigateTo({
      url: 'targetaddress/targetaddress',
    })
  },

  CompleteOrder: function () {
    var element = this.data.element;
    element.type = "13";
    element.order_status = "2";
    element.complete_time = utils.formatTime(new Date());
    wx.request({
      url: 'http://47.97.40.237:8000/pkusender/order/',
      method: 'POST',
      data: JSON.stringify(element),
      success: (res)=>{
        console.log('order success send');
      }
    })
    var Idx = this.data.idx;
    wx.navigateTo({
      url: 'Comment/Comment?index='+Idx,
      success: function(res){
        console.log("success");
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
  
  ModifyOrder: function () {
    var element = this.data.element;
    element.type = "20";
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
      delta:1
    });
  },
  DeleteOrder: function () {
    var element = this.data.element;
    element.type = "19";
    wx.request({
      url: 'http://47.97.40.237:8000/pkusender/order/',
      method: 'POST',
      data: JSON.stringify(element),
      success: (res)=>{
        console.log('order success send');
      }
    })
    wx.request({
      url: 'http://47.97.40.237:8000/pkusender/user/?user_id='+app.globalData.userInfo.user_id+'&type=0',
      method: 'GET',
      success: (res)=>{
        var ticketlist = JSON.parse(res.data);
        console.log(ticketlist);
        this.setData({
          PersonalInfo: ticketlist
        })
        var userId = this.data.PersonalInfo[0].user_id;
        var coin = this.data.PersonalInfo[0].coin_num;
        var coin_cost = parseInt(element.coin_cost);
        var Delete = this.data.Delete;
        coin = coin + coin_cost;
        console.log(coin);
        Delete.type = "13";
        Delete.user_id = userId.toString();
        Delete.coin_num = coin.toString();
        console.log(this.data.Delete);
        wx.request({
          url: 'http://47.97.40.237:8000/pkusender/user/',
          method: 'POST',
          data: JSON.stringify(Delete),
          success: (res)=>{
            console.log('order success send');
          }
        })
      }
    })

    wx.navigateBack({         //返回上一页  
      delta:1
    });
  },

})