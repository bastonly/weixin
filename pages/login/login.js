// pages/login/login.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  login:function(){
    //页面登陆
    // console.log("Hello");
    wx.redirectTo({
      url:"/pages/live/live"
    })
    // wx.navigateTo({
    //   url: "/pages/live/live"
    // })
  },
  reg:function(){
    console.log('reg!')
  },
  getPwd:function(){
    console.log('get Password!')
  }
})