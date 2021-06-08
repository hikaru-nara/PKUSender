// pages/takeOrder/home/home.js
const app = getApp();
const utils = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: {},
    elements:[
      {
        "title": "取快递",
        "name": "UserHot",
        "reward": 3,
        "requestID": 0,
        "detail": "从快递点凭取件码xxxxx取快递送到39楼楼下，联系电话xxxxx，当面取，急！！",
        "time": "21:10",
        "emergency": 5,
        "from": "34楼后快递点",
        "to": "39楼楼下",
        "object": "快递",
        "avatar": "/images/LOGO.png"
      },
      {
        "title": "食堂外带",
        "name": "UserCold",
        "reward": 1,
        "requestID": 1,
        "detail": "帮忙家园三楼打包一份鸡腿饭送到45乙楼下把，谢谢",
        "time": "19:22",
        "emergency": 2,
        "from": "34楼后快递点",
        "to": "45乙楼楼下",
        "object": "鸡腿饭",
        "avatar": "/images/LOGO.png"
      }

    ]
  },


//   DateUtils: (function(){
//     /*
//     var locale = {
//         dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//         shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//         monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//         shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         am: 'AM',
//         pm: 'PM',
//         shortAm: 'A',
//         shortPm: 'P'
//     };
//     */

//     var locale = {
//         dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
//         shortDayNames: ["日", "一", "二", "三", "四", "五", "六"],
//         monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
//         shortMonthNames: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
//         am: "上午",
//         pm: "下午",
//         shortAm: '上',
//         shortPm: '下'
//     };

//     /**
//      * 左边补0
//      */
//     function leftPad(str, size){
//         var result = '' + str;

//         while (result.length < size) {
//             result = '0' + result;
//         }

//         return result;
//     }

//     var parseToken = (function(){
//         var match2 = /\d{2}/,          // 00 - 99
//             //match3 = /\d{3}/,          // 000 - 999
//             match4 = /\d{4}/,          // 0000 - 9999
//             match1to2 = /\d{1,2}/,     // 0 - 99
//             match1to3 = /\d{1,3}/,     // 0 - 999
//             //match1to4 = /\d{1,4}/,     // 0 - 9999
//             match2w = /.{2}/,         // 匹配两个字符
//             match1wto2w = /.{1,2}/,   // 匹配1~2个字符
//             map = {
//                 //年的后两位
//                 'yy': {
//                     regex: match2,
//                     name: 'year'
//                 },
//                 //年
//                 'yyyy': {
//                     regex: match4,
//                     name: 'year'
//                 },
//                 //两位数的月，不到两位数则补0
//                 'MM': {
//                     regex: match2,
//                     name: 'month'
//                 },
//                 //月
//                 'M': {
//                     regex: match1to2,
//                     name: 'month'
//                 },
//                 //两位数的日期，不到两位数则补0
//                 'dd': {
//                     regex: match2,
//                     name: 'date'
//                 },
//                 //日期
//                 'd': {
//                     regex: match1to2,
//                     name: 'date'
//                 },
//                 //两位数的小时，24小时进制
//                 'HH': {
//                     regex: match2,
//                     name: 'hours'
//                 },
//                 //小时，24小时进制
//                 'H': {
//                     regex: match1to2,
//                     name: 'hours'
//                 },
//                 //两位数的小时，12小时进制
//                 'hh': {
//                     regex: match2,
//                     name: 'hours'
//                 },
//                 //小时，12小时进制
//                 'h': {
//                     regex: match1to2,
//                     name: 'hours'
//                 },
//                 //两位数的分钟
//                 'mm': {
//                     regex: match2,
//                     name: 'minutes'
//                 },
//                 //分钟
//                 'm': {
//                     regex: match1to2,
//                     name: 'minutes'
//                 },
//                 's': {
//                     regex: match1to2,
//                     name: 'seconds'
//                 },
//                 'ss': {
//                     regex: match2,
//                     name: 'seconds'
//                 },
//                 //上午、下午
//                 'tt': {
//                     regex: match2w,
//                     name: 't'
//                 },
//                 //上午、下午
//                 't': {
//                     regex: match1wto2w,
//                     name: 't'
//                 },
//                 //毫秒
//                 'S': {
//                     regex: match1to3,
//                     name: 'millisecond'
//                 },
//                 //毫秒
//                 'SS': {
//                     regex: match1to3,
//                     name: 'millisecond'
//                 },
//                 //毫秒
//                 'SSS': {
//                     regex: match1to3,
//                     name: 'millisecond'
//                 }
//             };

//         return function(token, str, dateObj){
//             var result, part = map[token];
//             if(part){
//                 result = str.match(part.regex);
//                 if(result){
//                     dateObj[part.name] = result[0];
//                     return result[0];
//                 }
//             }

//             return null;
//         };
//     })();

//     return {
//         locale: locale,
//         format: function(val, pattern){
//             if(Object.prototype.toString.call(val) !== '[object Date]'){
//                 return '';
//             }

//             if(Object.prototype.toString.call(pattern) !== '[object String]' || pattern === ''){
//                 pattern = 'yyyy-MM-dd HH:mm:ss';
//             }

//             var fullYear = val.getFullYear(),
//                 month = val.getMonth(),
//                 day = val.getDay(),
//                 date = val.getDate(),
//                 hours = val.getHours(),
//                 minutes = val.getMinutes(),
//                 seconds = val.getSeconds(),
//                 milliseconds = val.getMilliseconds();

//             return pattern.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|SS?S?)/g, function (m) {
//                 if (m.charAt(0) === '\\') {
//                     return m.replace('\\', '');
//                 }

//                 var locale = DateUtils.locale;

//                 switch (m) {
//                     case "hh":
//                         return leftPad(hours < 13 ? (hours === 0 ? 12 : hours) : (hours - 12), 2);
//                     case "h":
//                         return hours < 13 ? (hours === 0 ? 12 : hours) : (hours - 12);
//                     case "HH":
//                         return leftPad(hours, 2);
//                     case "H":
//                         return hours;
//                     case "mm":
//                         return leftPad(minutes, 2);
//                     case "m":
//                         return minutes;
//                     case "ss":
//                         return leftPad(seconds, 2);
//                     case "s":
//                         return seconds;
//                     case "yyyy":
//                         return fullYear;
//                     case "yy":
//                         return (fullYear + '').substring(2);
//                     case "dddd":
//                         return locale.dayNames[day];
//                     case "ddd":
//                         return locale.shortDayNames[day];
//                     case "dd":
//                         return leftPad(date, 2);
//                     case "d":
//                         return date;
//                     case "MMMM":
//                         return locale.monthNames[month];
//                     case "MMM":
//                         return locale.shortMonthNames[month];
//                     case "MM":
//                         return leftPad(month + 1, 2);
//                     case "M":
//                         return month + 1;
//                     case "t":
//                         return hours < 12 ? locale.shortAm : locale.shortPm;
//                     case "tt":
//                         return hours < 12 ? locale.am : locale.pm;
//                     case "S":
//                         return milliseconds;
//                     case "SS":
//                         return leftPad(milliseconds, 2);
//                     case "SSS":
//                         return leftPad(milliseconds, 3);
//                     default: 
//                         return m;
//                 }
//             });
//         },

//         parse: function(val, pattern){
//             if(!val){
//                 return null;
//             }

//             if(Object.prototype.toString.call(val) === '[object Date]'){
//                 // 如果val是日期，则返回。
//                 return val;
//             }

//             if(Object.prototype.toString.call(val) !== '[object String]'){
//                 // 如果val不是字符串，则退出。
//                 return null;
//             }

//             var time;
//             if(Object.prototype.toString.call(pattern) !== '[object String]' || pattern === ''){
//                 // 如果fmt不是字符串或者是空字符串。
//                 // 使用浏览器内置的日期解析
//                 time = Date.parse(val);
//                 if(isNaN(time)){
//                     return null;
//                 }

//                 return new Date(time);
//             }

//             var i, token, tmpVal, 
//                 tokens = pattern.match(/(\\)?(dd?|MM?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|SS?S?|.)/g),
//                 dateObj = {
//                     year: 0,
//                     month: 1,
//                     date: 0,
//                     hours: 0,
//                     minutes: 0,
//                     seconds: 0,
//                     millisecond: 0
//                 };

//             for(i = 0; i < tokens.length; i++){
//                 token = tokens[i];
//                 tmpVal = parseToken(token, val, dateObj);

//                 if(tmpVal !== null){
//                     if(val.length > tmpVal.length){
//                         val = val.substring(tmpVal.length);
//                     }else{
//                         val = '';
//                     }
//                 }else{
//                     val = val.substring(token.length);
//                 }
//             }

//             if(dateObj.t){
//                 if(DateUtils.locale.pm === dateObj.t || DateUtils.locale.shortPm === dateObj.t){
//                     dateObj.hours = (+dateObj.hours) + 12;
//                 }
//             }

//             dateObj.month -= 1;

//             return new Date(dateObj.year, dateObj.month, dateObj.date, dateObj.hours, dateObj.minutes, dateObj.seconds, dateObj.millisecond);
//         }
//     };
// })(),

  navToDetail: function(arg){
    
    wx.navigateTo({
      url: "/pages/takeOrder/detail/detail",
      success: function(res){
        res.eventChannel.emit('acceptDataFromOpenerPage', {index: arg.currentTarget.dataset.id})
      }
    })
    // console.log(arg.currentTarget.dataset.id);
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
    wx.request({
      url: 'http://47.97.40.237:8000/pkusender/order_wait/?index=1&num=20',
      method: 'GET',
      success: (res)=>{
        var ticketlist = JSON.parse(res.data)
        
        // console.log(ticketlist)
        // var date = utils.DateUtils.parse('2016-06-07 下午 11:00:00', 'yyyy-mm-dd tt HH:mm:ss')
        // console.log(date.getDate())
        for(var i=0; i<ticketlist.length;i++){
          var date_create = utils.DateUtils.parse(ticketlist[i].create_time, 'yyyy/M/d tth:mm:ss')
          // console.log(ticketlist[i].create_time)
          // console.log(date_create)
          ticketlist[i].format_create_time = date_create
          var date = new Date()
          if(utils.dateEqual(date, date_create)){
            // console.log('It is today.')
            var short_create_time = utils.DateUtils.format(date_create, 'tth:mm')
            // var short_create_time = date_create.getHours().toString() +':'+ date_create.getMinutes().toString()
          }
          else{
            // console.log('Not today')
            var short_create_time = utils.DateUtils.format(date_create, 'yyyy/M/d')
            // var short_create_time = date_create.getMonth().toString() +'/'+ date_create.getDate().toString()
            
          }
          // console.log(short_create_time)
          ticketlist[i].short_create_time = short_create_time
          // console.log(date)
        }
        ticketlist.sort(function(a,b){
          // var time_a = utils.DateUtils.parse(a.create_time, 'yyyy/M/d tth:mm:ss')
          // var time_b = utils.DateUtils.parse(b.create_time, 'yyyy/M/d tth:mm:ss')
          return b.format_create_time.getTime()-a.format_create_time.getTime()
        })
        // for(var i=0; i<ticketlist.length;i++){
        //   // var tmptime = '2021/6/7 下午11:20:59' //ticketlist[i].create_time
        //   console.log(ticketlist[i].create_time)
        //   var create_time_parsed = utils.DateUtils.parse(ticketlist[i].create_time, 'yyyy/M/d tth:mm:ss')
        //   console.log(create_time_parsed)
        // }
        // console.log(ticketlist)
        this.setData({
          elements: ticketlist
        })
        wx.setStorage({
          key: 'Untaken-Order-List', 
          data:ticketlist
        })
        // console.log(ticketlist[0])
      }
    })
    
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