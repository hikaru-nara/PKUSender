const app = getApp();
Page({
  data:{
    elements:[
      {
        "human1": "歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜歪比巴卜",
        "human2": "帕布罗.迭戈.荷瑟.山迪亚哥.弗朗西斯科.德.保拉.居安.尼波莫切诺.克瑞斯皮尼亚诺.德.罗斯.瑞米迪欧斯.西波瑞亚诺.德.拉.山迪西玛.特立尼达.玛利亚.帕里西奥.克里托.瑞兹.布拉斯科.毕加索",
        "start": "北京大学34楼后快递点",
        "target": "北京大学45乙539",
        "self": "8号柜 取件码 123456789",
        "place": "北京大学二教",
        "message": "大件，轻拿轻放，是玻璃制品",
        "state": "运送中",
        "money": "3",
        "INDEX":"2",
      },
      {
        "human1": "我爱学习",
        "human2": "帕布罗.迭戈.荷瑟.山迪亚哥.弗朗西斯科.德.保拉.居安.尼波莫切诺.克瑞斯皮尼亚诺.德.罗斯.瑞米迪欧斯.西波瑞亚诺.德.拉.山迪西玛.特立尼达.玛利亚.帕里西奥.克里托.瑞兹.布拉斯科.毕加索",
        "start": "北京大学34楼后快递点",
        "target": "北京大学第二教学楼",
        "self": "近邻宝京东窗口 取件码 123456789",
        "place": "北京大学五四运动场",
        "message": "小件，很轻",
        "state": "运送中",
        "money": "1",
        "INDEX":"0",
      }
    ],
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['1','2','3','4','5'],//下拉列表的数据
    "Index" : 0,
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
      var tmpAddressList = this.data.start;
      wx.setStorage({//存储到本地
        key:"start",
        data:tmpAddressList
      });
      // console.log("Common Address");
      const eventChannel = this.getOpenerEventChannel()
      // eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
      // eventChannel.emit('someEvent', {data: 'test'});
      // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
      var index = 0;
      eventChannel.on('acceptDataFromOpenerPage', function(data) {
        index = data.index;
      })
      let choiceidx = this.data.elements[index].INDEX;
      let Index = this.data.Index;
      Index = choiceidx;
      this.setData({
        idx:index,
        Index
      })
      console.log(this.data.Index);
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
  gotoPage:function(e) {
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