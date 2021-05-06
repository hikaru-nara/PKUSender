const app = getApp();
Page({
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
    onLoad: function (options) {
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