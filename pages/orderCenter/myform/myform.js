const app = getApp();
Page({
  data:{
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['1','2','3','4','5'],//下拉列表的数据
    Index: 0,
    Idx: 0,
    Start: '',
    Target: '',
    State: ''
  },
    // 点击下拉显示框
    selectTap(){
      this.setData({
        show: !this.data.show
      });
    },
    // 点击下拉列表
    optionTap(e){
      let index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
        Index:index,
        show:!this.data.show
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
          var choiceidx = this.data.elements[index].coin_cost;
          choiceidx = choiceidx - 1;
          console.log(choiceidx)
          var Start = this.data.elements[index].src_address;
          var Target = this.data.elements[index].dest_address;
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
          this.setData({
            idx:index,
            Idx:index,
            Index:choiceidx,
            Start:Start,
            Target:Target,
            State:State
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
  gotoStartPage:function(e) {
    wx.navigateTo({
      url: 'address/address',
    })
  },
  gotoTargetPage:function(e) {
    wx.navigateTo({
      url: 'address/address',
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
  textareaBInput(e) {
    this.setData({
      textareaBValue: e.detail.value
    })
  },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height,
      inputValue: e.detail.value
    })
  },
  CompleteOrder: function () {
    this.setData({
      State:"已完成"
    });
  },
  ModifyOrder: function () {
    wx.navigateBack({         //返回上一页  
      delta:1
    });
  },
  DeleteOrder: function () {
    wx.navigateBack({         //返回上一页  
      delta:1
    });
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  },
  methods: {
    optionTap(e) {
      let dataset = e.target.dataset
      this.setData({
        current: dataset,
        isShow: false
      });

      // 调用父组件方法，并传参
      this.triggerEvent("change", { ...dataset })
    },
    openClose() {
      this.setData({
        isShow: !this.data.isShow
      })
    },

    // 此方法供父组件调用
    close() {
      this.setData({
        isShow: false
      })
    }
  },
  lifetimes: {
    attached() {
      // 属性名称转换, 如果不是 { id: '', name:'' } 格式，则转为 { id: '', name:'' } 格式
      let result = []
      if (this.data.key !== 'id' || this.data.text !== 'name') {       
        for (let item of this.data.options) {
          let { [this.data.key]: id, [this.data.text]: name } = item
          result.push({ id, name })
        }
      }
      this.setData({
        current: Object.assign({}, this.data.defaultOption),
        result: result
      })
    }
  }
})