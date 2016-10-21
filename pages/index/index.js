//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //页面加载时
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
  }
  //页面渲染完成时
  onReady: function(){

  }
  //页面显示时
  onShow: function(){

  }
  //页面隐藏时
  onHide: function(){

  }
  //页面卸载时
  onUnload: function(){

  }
})
