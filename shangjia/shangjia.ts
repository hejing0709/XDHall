// pages/shangjia/shangjia.ts
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Tarray:['选择','鸡肉', '鱼肉', '猪肉', '鸭肉','蔬菜'],
    chosedImage:'../../resources/ICON/PLUS.png',
    tempFilePaths:"../../resources/ICON/PLUS.png",
    tindex:"0",
    name:"菜名",
    kind:"菜品类别",
    imageList: [], 
    form: {          // 用于其他功能提交的参数
  		ossUrl: []
    },
    imageSrc: '',
    image_name:"",
    images:"",
  },
  chooseImage: function () {
    var that = this
    wx.chooseImage({
      count: 1, // 只允许选择一张图片
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        // 显示图片预览
        that.setData({
          chosedImage: tempFilePaths[0]
        })
      }
    })},
  imageName:function(e){
    this.setData({
      image_name:e.detail.value,
    })
  },
  TChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tindex: e.detail.value
    })
  },
  send:function(e){
    var Kind=this.data.Tarray[this.data.tindex]
    var Name=this.data.image_name
    
    wx.uploadFile({
                url: 'http://10.0.0.129:8000/upload/', // 后端服务器地址
                filePath: this.data.chosedImage,
                name: 'image',
                formData:{ // 传输一些需要的数据
                  kind:Kind,
                  image_name : Name
       　　　　 },
                success: function (res) {
                  console.log(res.data)
                  wx.showToast({
                    title: '上传成功',
                    icon: 'success',
                    duration: 2000
                  })
                },
                fail: function (res) {
                  console.log(res)
                  wx.showToast({
                    title: '上传失败',
                    icon: 'none',
                    duration: 2000
                  })
                }
              })
  },
        // 将图片上传到后端服务器
//         wx.uploadFile({
//           url: 'http://10.0.0.129:8000/upload/', // 后端服务器地址
//           filePath: tempFilePaths[0],
//           name: 'image',
//           formData:{ // 传输一些需要的数据
//             // kind:"1",
//             image_name : "鸡翅"
//  　　　　 },
//           success: function (res) {
//             console.log(res.data)
//             wx.showToast({
//               title: '上传成功',
//               icon: 'success',
//               duration: 2000
//             })
//           },
//           fail: function (res) {
//             console.log(res)
//             wx.showToast({
//               title: '上传失败',
//               icon: 'none',
//               duration: 2000
//             })
//           }
//         })

  // 选择图片


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.request({
      url: 'http://10.0.0.129:8000/get_image_info/',
      success: (res) => {
        
        const images = res.data.images;
        console.log(images)
        this.setData({
          images: images	//服务器返回的结果
        })
        // 处理图片信息，例如在页面上显示图片
        // ...
      },
      fail: (err) => {
        // 处理失败响应
      }
    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})