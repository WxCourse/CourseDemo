// pages/indexNav/lib.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:"",
    BList:[
      {
        id:1,
        title:"法律文书写作",
        introduce:"学习法律学习法律学习法律学习法律学习法律学习法律学习法律",
        author:"陈卫东著",
        borrow:"80"
      },
      {
        id:2,
        title:"计算机网络",
        introduce:"计算机网络计算机网络计算机网络计算机网络",
        author:"谢希仁著",
        borrow:"73"
      },
      {
        id:3,
        title:"活着",
        introduce:"《活着》是作家余华的代表作之一，讲述了在大时代背景下，随着内战、三反五反，大跃进，文化大革命等社会变革",
        author:"余华著",
        borrow:"70"
      },
      {
        id:4,
        title:"追风筝的人",
        introduce:"全书围绕风筝与阿富汗的两个少年之间展开，一个富家少年与家中仆人关于风筝的故事，关于人性的背叛与救赎 ",
        author:"卡勒德·胡塞尼著",
        borrow:"68"
      },
      {
        id:5,
        title:"白鹿原",
        introduce:"该小说以陕西关中地区白鹿原上白鹿村为缩影，通过讲述白姓和鹿姓两大家族祖孙三代的恩怨纷争，表现了从清朝末年到二十世纪七八十年代长达半个多世纪的历史变化",
        author:"陈忠实著",
        borrow:"65"
      },
    ]
  },
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    Toast('搜索' + this.data.value);
    
  },
  onClick(e) {
    Toast('搜索' + this.data.value);

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