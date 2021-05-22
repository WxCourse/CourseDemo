// pages/core/user/mine.js
Page({

    data: {
      show: false,
    },
  
    showPopup() {
      this.setData({ show: true });
    },
  
    onClose() {
      this.setData({ show: false });
    },

  /**
   * 页面的初始数据
//    */
//    data: {
//     showShare: false,
//     options: [
//       { name: '微信', icon: 'wechat', openType: 'share' },
//       { name: '微博', icon: 'weibo' },
//       { name: '复制链接', icon: 'link' },
//       { name: '分享海报', icon: 'poster' },
//       { name: '二维码', icon: 'qrcode' },
//     ],
//   },

//   onClick(event) {
//     this.setData({ showShare: true });
//   },

//   onClose(event) {
//     this.setData({ showShare: false });
//     this,setData({ show: false});
//   },



//   onSelect(event) {
//     Toast(event.detail.name);
//     this.onClose();
//   },
//   wx:navigator({
//     url:'/pages/core/user/user'
//   })
// },
// showPopup() {
//   this.setData({ show: true });
// },

// onClose() {
//   this.setData({ show: false });
// },

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