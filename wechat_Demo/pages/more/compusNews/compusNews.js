Page({

  /**
   * 页面的初始数据
   */
  data: {
    NList:[
      {
        NewsTitle:"喜迎党代会之请回答：2015-2021|升升升，飕飕飕！",
        time:"发布时间：2021/5/15",
      },
      { 
        NewsTitle:"百炼成钢！党史上的今天",
        time:"发布时间：2021/5/14",
      },
      {
        NewsTitle:"新华社《瞭望新闻周刊》刊发陈晓红院士专访报道",
        time:"发布时间：2021/5/12",
      },
      {
        NewsTitle:"2021年“颂党史辉煌，读红色经典”红书分享会",
        time:"发布时间：2021/5/11",
      },
      {
        NewsTitle:"就在5月7日！湖南工商大学诚邀您参加高层次人才视频“云”招聘！",
        time:"发布时间：2021/5/7",
      },
      {
        NewsTitle:"青春向党 奋斗强国！我校开展五四主题团日活动",
        time:"发布时间：2021/5/2",
      },
      {
        NewsTitle:"国家自然科学基金委“数字经济时代的资源环境管理理论与应用”基础科学中心前沿交叉学术论坛在我校举行",
        time:"发布时间：2021/4/27",
      },
    ]
  },
  onSearch:function(e){
  },
  onCancel:function(){

  },
  jump:function(){
    wx.navigateTo({
      url: '/pages/more/compusNews/searchShowTwo',
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