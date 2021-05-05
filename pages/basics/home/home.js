<<<<<<< HEAD
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
  
=======
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    elements: [{
        title: '布局',
        name: 'layout',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue',
        icon: 'colorlens'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple',
        icon: 'font'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve',
        icon: 'icon'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink',
        icon: 'btn'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown',
        icon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        icon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        icon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        icon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        icon: 'loading2'
      },
    ],
>>>>>>> 5d083d752968aa1ed56d1874239f79231ac82ea2
  }
})