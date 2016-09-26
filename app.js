//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    //当小程序初始化完成时,会触发onLaunch(全局只触发一次)
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log(logs);
  },
  onShow:function(){
    //当小程序启动，或者从后端进入前端显示，会触发onShow
  },
  onHide:function(){
    //当小程序从前端进入后端，会触发onHide
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})
