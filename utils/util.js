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

module.exports = {
  updateAddressList :  updateAddressList,
  get_post_userInfo : get_post_userInfo,
  parse_address: parse_address,
  get_init_order_data: get_init_order_data
}

