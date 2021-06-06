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

function get_post_userInfo(userInfo, post_data,type,sep_op){
  if(type == 0 || type == 20){
    post_data.user_id = userInfo.user_id;
    post_data.user_name = userInfo.user_name;
    post_data.address = code_adreess(userInfo.address,sep_op);
    post_data.credit = userInfo.credit;
    post_data.coin_num = userInfo.coin_num;
    post_data.gender = userInfo.gender.toString();
    post_data.call_order_list = userInfo.call_order_list;
    post_data.take_order_list = userInfo.take_order_list;
    post_data.avatar_url = userInfo.avatar_url;
    post_data.type = type.toString();
  }
  else if(type == 11){
    post_data.user_id = userInfo.user_id;
    post_data.address = code_adreess(userInfo.address,sep_op);
    post_data.type = type.toString();
  }
  
}

function parse_address(address_string, sep_op){
  let addressList = address_string.split(sep_op);
  var addressDict = [];
  for(let i = 0; i < addressList.length; ++i){
    addressDict.push({'strMessage':addressList[i]})
  }
  return addressDict
}

function code_adreess(addressDict,sep_op){
  let addressList = []
  for(let i = 0; i < addressDict.length; ++i){
    addressList.push(addressDict[i]['strMessage'])
  }
  return addressList.join(sep_op)
}

function get_init_order_data(userInfo, order_info){
  let order_data = {}
  let myDate = new Date();
  order_data.order_id = '';
  order_data.caller_id = userInfo.user_id;
  order_data.caller_name = userInfo.user_name;
  order_data.helper_id = '';
  order_data.helper_name = '';
  order_data.src_address = order_info.src_address;
  order_data.dest_address = order_info.dest_address;
  order_data.coin_cost = order_info.coin_cost;
  order_data.order_type = order_info.order_type;
  order_data.description = order_info.description;
  order_data.secret_info = order_info.secret_info;
  order_data.order_status = '0';
  order_data.comment = '';
  order_data.star_level = '';
  order_data.create_time = myDate.toLocaleString();
  order_data.complete_time = '';
  order_data.type = '0';
  return order_data;
}

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
 
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
 
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function dateEqual(date1, date2){
    var day1 = date1.getDate()
    var day2 = date2.getDate()
    var m1 = date1.getMonth()
    var m2 = date2.getMonth()
    var y1 = date1.getFullYear()
    var y2 = date2.getFullYear()
    if(day1!=day2)
      return false
    else if(m1!=m2)
      return false
    else if(y1!=y2)
      return false
    return true
  }
  
  var DateUtils = (function(){
    /*
    var locale = {
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        am: 'AM',
        pm: 'PM',
        shortAm: 'A',
        shortPm: 'P'
    };
    */
  
    var locale = {
        dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        shortDayNames: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        shortMonthNames: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        am: "上午",
        pm: "下午",
        shortAm: '上',
        shortPm: '下'
    };
  
    /**
     * 左边补0
     */
    function leftPad(str, size){
        var result = '' + str;
  
        while (result.length < size) {
            result = '0' + result;
        }
  
        return result;
    }
  
    var parseToken = (function(){
        var match2 = /\d{2}/,          // 00 - 99
            //match3 = /\d{3}/,          // 000 - 999
            match4 = /\d{4}/,          // 0000 - 9999
            match1to2 = /\d{1,2}/,     // 0 - 99
            match1to3 = /\d{1,3}/,     // 0 - 999
            //match1to4 = /\d{1,4}/,     // 0 - 9999
            match2w = /.{2}/,         // 匹配两个字符
            match1wto2w = /.{1,2}/,   // 匹配1~2个字符
            map = {
                //年的后两位
                'yy': {
                    regex: match2,
                    name: 'year'
                },
                //年
                'yyyy': {
                    regex: match4,
                    name: 'year'
                },
                //两位数的月，不到两位数则补0
                'MM': {
                    regex: match2,
                    name: 'month'
                },
                //月
                'M': {
                    regex: match1to2,
                    name: 'month'
                },
                //两位数的日期，不到两位数则补0
                'dd': {
                    regex: match2,
                    name: 'date'
                },
                //日期
                'd': {
                    regex: match1to2,
                    name: 'date'
                },
                //两位数的小时，24小时进制
                'HH': {
                    regex: match2,
                    name: 'hours'
                },
                //小时，24小时进制
                'H': {
                    regex: match1to2,
                    name: 'hours'
                },
                //两位数的小时，12小时进制
                'hh': {
                    regex: match2,
                    name: 'hours'
                },
                //小时，12小时进制
                'h': {
                    regex: match1to2,
                    name: 'hours'
                },
                //两位数的分钟
                'mm': {
                    regex: match2,
                    name: 'minutes'
                },
                //分钟
                'm': {
                    regex: match1to2,
                    name: 'minutes'
                },
                's': {
                    regex: match1to2,
                    name: 'seconds'
                },
                'ss': {
                    regex: match2,
                    name: 'seconds'
                },
                //上午、下午
                'tt': {
                    regex: match2w,
                    name: 't'
                },
                //上午、下午
                't': {
                    regex: match1wto2w,
                    name: 't'
                },
                //毫秒
                'S': {
                    regex: match1to3,
                    name: 'millisecond'
                },
                //毫秒
                'SS': {
                    regex: match1to3,
                    name: 'millisecond'
                },
                //毫秒
                'SSS': {
                    regex: match1to3,
                    name: 'millisecond'
                }
            };
  
        return function(token, str, dateObj){
            var result, part = map[token];
            if(part){
                result = str.match(part.regex);
                if(result){
                    dateObj[part.name] = result[0];
                    return result[0];
                }
            }
  
            return null;
        };
    })();
  
    return {
        locale: locale,
        format: function(val, pattern){
            if(Object.prototype.toString.call(val) !== '[object Date]'){
                return '';
            }
  
            if(Object.prototype.toString.call(pattern) !== '[object String]' || pattern === ''){
                pattern = 'yyyy-MM-dd HH:mm:ss';
            }
  
            var fullYear = val.getFullYear(),
                month = val.getMonth(),
                day = val.getDay(),
                date = val.getDate(),
                hours = val.getHours(),
                minutes = val.getMinutes(),
                seconds = val.getSeconds(),
                milliseconds = val.getMilliseconds();
  
            return pattern.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|SS?S?)/g, function (m) {
                if (m.charAt(0) === '\\') {
                    return m.replace('\\', '');
                }
  
                var locale = DateUtils.locale;
  
                switch (m) {
                    case "hh":
                        return leftPad(hours < 13 ? (hours === 0 ? 12 : hours) : (hours - 12), 2);
                    case "h":
                        return hours < 13 ? (hours === 0 ? 12 : hours) : (hours - 12);
                    case "HH":
                        return leftPad(hours, 2);
                    case "H":
                        return hours;
                    case "mm":
                        return leftPad(minutes, 2);
                    case "m":
                        return minutes;
                    case "ss":
                        return leftPad(seconds, 2);
                    case "s":
                        return seconds;
                    case "yyyy":
                        return fullYear;
                    case "yy":
                        return (fullYear + '').substring(2);
                    case "dddd":
                        return locale.dayNames[day];
                    case "ddd":
                        return locale.shortDayNames[day];
                    case "dd":
                        return leftPad(date, 2);
                    case "d":
                        return date;
                    case "MMMM":
                        return locale.monthNames[month];
                    case "MMM":
                        return locale.shortMonthNames[month];
                    case "MM":
                        return leftPad(month + 1, 2);
                    case "M":
                        return month + 1;
                    case "t":
                        return hours < 12 ? locale.shortAm : locale.shortPm;
                    case "tt":
                        return hours < 12 ? locale.am : locale.pm;
                    case "S":
                        return milliseconds;
                    case "SS":
                        return leftPad(milliseconds, 2);
                    case "SSS":
                        return leftPad(milliseconds, 3);
                    default: 
                        return m;
                }
            });
        },
  
        parse: function(val, pattern){
            if(!val){
                return null;
            }
  
            if(Object.prototype.toString.call(val) === '[object Date]'){
                // 如果val是日期，则返回。
                return val;
            }
  
            if(Object.prototype.toString.call(val) !== '[object String]'){
                // 如果val不是字符串，则退出。
                return null;
            }
  
            var time;
            if(Object.prototype.toString.call(pattern) !== '[object String]' || pattern === ''){
                // 如果fmt不是字符串或者是空字符串。
                // 使用浏览器内置的日期解析
                time = Date.parse(val);
                if(isNaN(time)){
                    return null;
                }
  
                return new Date(time);
            }
  
            var i, token, tmpVal, 
                tokens = pattern.match(/(\\)?(dd?|MM?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|SS?S?|.)/g),
                dateObj = {
                    year: 0,
                    month: 1,
                    date: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    millisecond: 0
                };
  
            for(i = 0; i < tokens.length; i++){
                token = tokens[i];
                tmpVal = parseToken(token, val, dateObj);
  
                if(tmpVal !== null){
                    if(val.length > tmpVal.length){
                        val = val.substring(tmpVal.length);
                    }else{
                        val = '';
                    }
                }else{
                    val = val.substring(token.length);
                }
            }
  
            if(dateObj.t){
                if(DateUtils.locale.pm === dateObj.t || DateUtils.locale.shortPm === dateObj.t){
                    dateObj.hours = (+dateObj.hours) + 12;
                }
            }
  
            dateObj.month -= 1;
  
            return new Date(dateObj.year, dateObj.month, dateObj.date, dateObj.hours, dateObj.minutes, dateObj.seconds, dateObj.millisecond);
        }
    };
  })()

module.exports = {
    dateEqual: dateEqual,
    DateUtils: DateUtils,
  updateAddressList :  updateAddressList,
  get_post_userInfo : get_post_userInfo,
  parse_address: parse_address,
  get_init_order_data: get_init_order_data,
  formatTime: formatTime
}
 

