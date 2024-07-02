const App = {
  data() {
    return {
      isTemp:true,
      iceType: ['正常冰', '少冰', '微冰', '去冰', '熱'],
      sugarType: ['全糖', '七分', '半糖', '三分', '無糖'],
      toppingsType: ['珍珠', '粉條', '小粉圓', '椰果', '芋頭'],
      products: [
        {
          name: '珍珠鮮奶茶',
          engName: 'Pearl Milk Tea',
          price: 60,
        },
        {
          name: '鮮奶茶',
          engName: 'Milk Tea',
          price: 50,
        },
        {
          name: '古意冬瓜茶',
          engName: 'Winter Melon Drink',
          price: 30,
        },
        {
          name: '蜜香紅茶',
          engName: 'Black Tea',
          price: 30,
        },
        {
          name: '包種青茶',
          engName: 'Black Tea',
          price: 35,
        },
        {
          name: '檸檬烏龍',
          engName: 'Lemon Oolong Tea',
          price: 55,
        },
        {
          name: '薑母茶',
          engName: 'Ginger Tea',
          price: 55,
        },
        {
          name: '青草茶',
          engName: 'Herbal Tea',
          price: 35,
        },
        {
          name: '金桔檸檬',
          engName: 'Kumquat Lemonade',
          price: 40,
        },
        {
          name: '柳澄青茶',
          engName: 'Orange Mountain Tea',
          price: 45,
        },
      ],
      tempProduct:{
        toppingsType:[],
        price:0,
        num:1
      },
      order:[]
    }
  },
  methods: {
    activateItem(item){
     this.products.forEach((item)=>{
      item.isActive=false
     })
     item.isActive=true
     this.isTemp=false
     this.tempProduct.name=item.name
     this.tempProduct.price=item.price
    },
    addItem(){
      const spredTempProduct={...this.tempProduct}
      this.order.push(spredTempProduct)
      this.clearTempProduct()
    },
    clearTempProduct(){
      this.tempProduct=this.resetItemProperties();
      this.products.forEach(item => item.isActive = false)
      this.isTemp=true
    },
    resetItemProperties() {
            return {
              name: '',
              price: 0,
              num: 1,
              iceType: '',
              sugarType: '',
              toppingsType: [],
              text: ''
            };
    },
    calculateSubtotal(item) {
      const toppingsCost = item.toppingsType.length * 15;
      return (item.num * (item.price + toppingsCost));
    },
    clearOrder(){
      this.clearTempProduct()
      this.order=[]
    }
  },
  computed: {
    total() {
      let total = 0;
      this.order.forEach(item => {
        total += this.calculateSubtotal(item);
      });
      return total;
    }
  }
};

Vue.createApp(App).mount('#app');