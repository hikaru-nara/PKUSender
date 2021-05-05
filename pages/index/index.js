Page({
  data: {
    PageCur: 'basics'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
<<<<<<< HEAD
    // if(this.data.PageCur == 'selfInformation'){

    // }
=======
>>>>>>> 5d083d752968aa1ed56d1874239f79231ac82ea2
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})