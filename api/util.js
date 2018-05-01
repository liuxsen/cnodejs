function fnPureProcessResourceData(options) {
  return new Promise((resolve, reject) => {
    const sPreUrl = 'https://cnodejs.org/api/v1'
    let { url, data, method, params, restful } = options
    if(method === 'GET'){
      if (!restful){
        url += '/?' + serialize(params)
      }else{
        url+= '/' + params.id
      }
    }
    wx.request({
      url: sPreUrl + url,
      data: data,
      method: method,
      dataType: 'json',
      success(res) {
        resolve(res.data.data)
      },
      fail(err) {
        console.log(err)
        reject(err)
      }
    })
  })
}

function serialize (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

module.exports = {
  fnPureProcessResourceData,
}