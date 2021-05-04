// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "/pages/basics/home/home",
            "iconPath": "/images/tabbar/basics.png",
            "selectedIconPath": "/images/tabbar/basics_cur.png",
            "text": "订单中心"
          },
          {
            "pagePath": "/pages/component/home/home",
            "iconPath": "/images/tabbar/component.png",
            "selectedIconPath": "/images/tabbar/component_cur.png",
            "text": "接单"
          },
          {
            "pagePath": "/pages/order/home/home",
            "iconPath": "/images/tabbar/plugin.png",
            "selectedIconPath": "/images/tabbar/plugin_cur.png",
            "text": "下单"
          },
          {
            "pagePath": "/pages/selfInformation/home/home",
            "iconPath": "/images/tabbar/about.png",
            "selectedIconPath": "/images/tabbar/about_cur.png",
            "text": "个人中心"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
