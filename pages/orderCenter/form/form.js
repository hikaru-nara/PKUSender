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
    "state": "未取件",
    "money": "3",
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
  }
})