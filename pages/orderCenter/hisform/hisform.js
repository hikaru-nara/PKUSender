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
        "time": "2021年5月7日 18:05",
        "state": "干得不错",
      },
      {
        "human1": "我爱学习",
        "human2": "帕布罗.迭戈.荷瑟.山迪亚哥.弗朗西斯科.德.保拉.居安.尼波莫切诺.克瑞斯皮尼亚诺.德.罗斯.瑞米迪欧斯.西波瑞亚诺.德.拉.山迪西玛.特立尼达.玛利亚.帕里西奥.克里托.瑞兹.布拉斯科.毕加索",
        "start": "北京大学34楼后快递点",
        "target": "北京大学第二教学楼",
        "self": "近邻宝京东窗口 取件码 123456789",
        "message": "小件，很轻",
        "money": "1",
        "time": "2021年5月8 日 21:10",
        "state": "北大校内闪送王非你莫属，又快又好，666！！打call",
      }
    ]
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
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
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
  }
})