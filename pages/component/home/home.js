// Component({
//   options: {
//     addGlobalClass: true,
//   },
//   data: {
//     elements: [
//       { title: '操作条', name: 'bar', color: 'purple', icon: 'vipcard' },
//       { title: '导航栏 ', name: 'nav', color: 'mauve', icon: 'formfill' },
//       { title: '列表', name: 'list', color: 'pink', icon: 'list' },
//       { title: '卡片', name: 'card', color: 'brown', icon: 'newsfill' },
//       { title: '表单', name: 'form', color: 'red', icon: 'formfill' },
//       { title: '时间轴', name: 'timeline', color: 'orange', icon: 'timefill' },
//       { title: '聊天', name: 'chat', color: 'green', icon: 'messagefill' },
//       { title: '轮播', name: 'swiper', color: 'olive', icon: 'album' },
//       { title: '模态框', name: 'modal', color: 'grey', icon: 'squarecheckfill' },
//       { title: '步骤条', name: 'steps', color: 'cyan', icon: 'roundcheckfill' },
//     ],
//   },
// })

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //tabbar
    tabbar: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    app.editTabbar();
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
