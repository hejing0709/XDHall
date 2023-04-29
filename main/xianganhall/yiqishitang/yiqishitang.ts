// pages/main/xianganhall/yiqishitang/yiqishitang.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    
    DishKind:[{"kindName":"猪肉","kindId":"a"},
    {"kindName":"鸡肉","kindId":"b"},
    {"kindName":"鸭肉","kindId":"c"},
    {"kindName":"鱼肉","kindId":"d"},
    {"kindName":"面食","kindId":"e"},
    {"kindName":"米饭","kindId":"f"},
    {"kindName":"牛肉","kindId":"g"},
    ],
    DishName:[
      {kindId:"a",dishId:"1",dishName:"红烧肉",dishUrl:"../../../../resources/dishName/红烧肉.jpg",dishprice:"4",dishAmount:0},
      {kindId:"a",dishId:"2",dishName:"梅菜扣肉",dishUrl:"../../../../resources/dishName/梅菜扣肉.jpg",dishprice:"4.5",dishAmount:1},
      {kindId:"a",dishId:"3",dishName:"回锅肉",dishUrl:"../../../../resources/dishName/回锅肉.jpg", dishprice:"4",dishAmount:0},
      {kindId:"a",dishId:"4",dishName:"猪蹄",dishUrl:"../../../../resources/dishName/猪蹄.jpg",dishprice:"6",dishAmount:0},
      {kindId:"a",dishId:"5",dishName:"爆炒猪肉",dishUrl:"../../../../resources/dishName/爆炒猪肉.jpg",dishprice:"6",dishAmount:0},
      {kindId:"b",dishId:"6",dishName:"卤鸡腿",dishUrl:"../../../../resources/dishName/卤鸡腿.jpg",dishprice:"4",dishAmount:0},
      {kindId:"b",dishId:"7",dishName:"三杯鸡",dishUrl:"../../../../resources/dishName/三杯鸡.jpg",dishprice:"4.5",dishAmount:0},
      {kindId:"b",dishId:"8",dishName:"辣子鸡",dishUrl:"../../../../resources/dishName/辣子鸡.jpg",dishprice:"4.5",dishAmount:0},
      {kindId:"b",dishId:"9",dishName:"白切鸡",dishUrl:"../../../../resources/dishName/白切鸡.jpg",dishprice:5,dishAmount:0},
      {kindId:"b",dishId:"10",dishName:"大盘鸡",dishUrl:"../../../../resources/dishName/大盘鸡.jpg",dishprice:"4",dishAmount:0}  
    ],
    indexId: 0,
    toTitle: "title-0",
    scrollTop: 0,
    top: [],
    totalPrice: 0, //选中商品总价格
    totalNum: 0, //选中商品数量
    cartList: [], //选中商品列表
    // 购物车动画
    animationData: {},
    animationMask: {},
    maskVisual: "hidden",
    maskFlag: true,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    getData() {
      return this.data.childData;
    },
    
    plus:function(e){
      var id=e.currentTarget.dataset.id
      console.log(id)
      this.data.DishName[id-1].dishAmount=this.data.DishName[id-1].dishAmount+1;
      this.setData({
        DishName:this.data.DishName
      })
    },
    subtract:function(e){
      var id=e.currentTarget.dataset.id
      var m=this.data.DishName[id-1].dishAmount
      if(m>0){
        this.data.DishName[id-1].dishAmount=this.data.DishName[id-1].dishAmount-1;
        this.setData({
          DishName:this.data.DishName
        })
      }
    },
    

  }
})
