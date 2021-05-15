// pages/core/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 界面跳转
  goOne:function () {
    wx.navigateTo({
      url:'/pages/indexNav/books/lib',
    })
  },

  goTwo:function(){
    wx.navigateTo({
      url: '/pages/indexNav/socre/socre',
    })
  },
  goThree:function(){
    wx.navigateTo({
      url: '/pages/indexNav/classroom/classroom',
    })
  },
  goFour:function(){
    wx.navigateTo({
      url: '/pages/indexNav/student/student',
    })
  },
  goFive:function(){
    wx.navigateTo({
      url: '/pages/indexNav/calendar/calendar',
    })
  },
  goSix:function(){
    wx.navigateTo({
      url: '/pages/more/compusNews/compusNews',
    })
  },
  goSeven:function(){
    wx.navigateTo({
      url: '/pages/more/funny/funny',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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