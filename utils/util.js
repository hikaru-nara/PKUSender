
// pages/selfInformation/commonAddress/commonAddress
// pages/selfInformation/singleAddress/singleAddress
function updateAddressList (that){
  wx.getStorage({//获取本地缓存
    key:"addressList",
    success:function(opt){
      that.setData({
        addressList:opt.data
      })
    },
  })
}
module.exports = {
  updateAddressList :  updateAddressList
}

