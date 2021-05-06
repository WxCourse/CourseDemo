// pages/core/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: [ "#FFA07A", "#90C650", "#D8AA5A", "#AD9DD0", "#0A9A70", "#61BC69", "#12AEF3"],
    wlist: [
      { "WhichDay": 1, "CourseBegin": 1, "CourseNumber": 3, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 1, "CourseBegin": 5, "CourseNumber": 3, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 2, "CourseBegin": 1, "CourseNumber": 2,"CourseName":"高等数学@教A-301"},
      { "WhichDay": 2, "CourseBegin": 7, "CourseNumber": 2, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 3, "CourseBegin": 4, "CourseNumber": 1, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 3, "CourseBegin": 9, "CourseNumber": 2, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 3, "CourseBegin": 5, "CourseNumber": 2, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 4, "CourseBegin": 2, "CourseNumber": 3, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 4, "CourseBegin": 9, "CourseNumber": 2, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 5, "CourseBegin": 1, "CourseNumber": 2, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 6, "CourseBegin": 3, "CourseNumber": 2, "CourseName": "高等数学@教A-301" },
      { "WhichDay": 7, "CourseBegin": 5, "CourseNumber": 3, "CourseName": "高等数学@教A-301" },
    ],
    datelist:[12],
    monthNow: 4,
    array:['第一周','第二周','第三周','第四周'],
    objectArray:[
      {
        id:0,
        name:'第一周'
      },
      {
        id:1,
        name:'第二周'
      },
      {
        id:2,
        name:'第三周'
      },
      {
        id:3,
        name:'第四周'
      },
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为',e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
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