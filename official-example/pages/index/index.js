//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    a:1,
    b:2,
    c:3,
    d:4,
    object:{
      key:'james'
    },
    test:['kobe','lverson'],
     array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4],
    item:{
      index: 0,
      msg:'this is template',
      time:'2017-1-10'
    },
    imgs:'images in here',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getlocation:function(){
    wx.chooseLocation({
     success: function(res) {
    console.log(JSON.stringify(res));
    }
   })
   /*
     打开地图选择位置
   wx.openLocation({
     latitude: 39.90403, // 纬度，范围为-90~90，负数表示南纬
     longitude: 116.407526, // 经度，范围为-180~180，负数表示西经
     scale: 18, // 缩放比例
     // name: 'name', // 位置名
     // address: 'address', // 地址的详细说明
     success: function(res){
       // success
     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })*/
   /*
    打开内置地图查看位置
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function(res) {
      var latitude = res.latitude
      var longitude = res.longitude
      wx.openLocation({
        latitude: latitude,
        longitude: longitude,
       scale: 28
      })
     }
   })*/
  },
  chooseimage:function(){
      var that = this;
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
       var imgs = res.tempFilePaths;
       that.setData({
          imgs:imgs
       })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  click:function(){
      var that = this
     that.setData({
        motto:'点击后的文字'
      })
  },
  tapName: function(event){
    console.log(event);
  },
  //测试分享
  onShareAppMessage: function () {
    return {
      title: '测试分享标题',
      desc: '测试分享描述',
      path: '/page/user?id=12'
    }
  },
  //下拉刷新
  onPullDownRefresh: function(){
    var that = this
     that.setData({
        motto:'刷新之后的文字'
      })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  /*systeminfo:function(){
   wx.getSystemInfo({
     success: function(res) {
       console.log(JSON.stringify(res))
    }
 })
    try{
      var res = wx.getSystemInfoSync()
      console.log(JSON.stringify(res));
    }catch(e){
      
    }
  },*/
  /*getnetwork:function(){
    wx.getNetworkType({
      success: function(res) {
        console.log(JSON.stringify(res));
      }
    })
  },*/
 /* onaccelero:function(){
    wx.onAccelerometerChange(function(res){
      console.log(JSON.stringify(res));
    })
  },*/
  /*oncompass:function(){
    wx.onCompassChange(function(res){
      console.log(JSON.stringify(res));
    })
  }*/
  /* callphone:function(){
     wx.makePhoneCall({
       phoneNumber: '17714206545',
       success: (res) => {
         console.log(JSON.stringify(res));
       }
     })
  },*/
  /*checksession:function(){
    wx.checkSession({
      success: function(){
        console.log("未过期");
      },
      fail: function(){
        console.log("已过期，请重新登录");
        wx.login({
          success: function(res){
            console.log("登录成功");
          },
          fail: function() {
            console.log("登录成功");
          },
          complete: function() {
            // complete
          }
        })
      }
    })
  }*/
  /*wxpay: () =>{
    wx.requestPayment({
      timeStamp: '1484134967500',
      nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
      package: 'wx201410272009395522657a690389285100',
      signType: 'MD5',
      paySign: '',
      success: function(res){
        console.log("请求成功");
      },
      fail: function() {
        console.log("请求失败");
      },
      complete: function() {
        console.log("请求....");
      }
    })
  }*/
  
 /* scancode:function(){
     wx.scanCode({
       success: function (res){
         console.log("成功");
       },
       fail: function (){
         console.log("失败");
       },
       complete: function (){
         console.log("不管成功和失败都会调用此方法");
       }
     })
  }*/
 /*  trouble 
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }*/
})
