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
  click:function(){
      var that = this
     that.setData({
        motto:'点击后的文字'
      })
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
  }
})
