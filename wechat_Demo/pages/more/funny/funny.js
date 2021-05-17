Page({

  /**
   * 页面的初始数据
   */
  data: {
    NList:[
      {
        NewsTitle:"青春有你，唯有一起奋斗！",
        time:"发布时间：2021/5/5",
      },
      { 
        NewsTitle:"不会有人只在寝室睡觉吧？",
        time:"发布时间：2021/4/29",
      },
      {
        NewsTitle:"和全世界道了晚安，却一个人偷偷失眠",
        time:"发布时间：2021/4/24",
      },
      {
        NewsTitle:"科研“视界”，平凡学子",
        time:"发布时间：2021/4/1",
      },
      {
        NewsTitle:"缓冲完毕 即刻腾飞",
        time:"发布时间：2021/3/29",
      },
      {
        NewsTitle:"养生这件事，我琢磨好久了",
        time:"发布时间：2021/3/26",
      },
      {
        NewsTitle:"晴天 | 暖阳奔向你而来，一起晒太阳吧！",
        time:"发布时间：2021/3/24",
      },
    ]
  },
  onSearch:function(e){
  },
  onCancel:function(){

  },
  jump:function(){
    wx.navigateTo({
      url: '/pages/more/funny/funnyShow',
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