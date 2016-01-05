// require("commons");
require("Bootstrap");

Vue.use(VueTouch);

var page1 = require("./templ/page1.vue");
var page2 = require("./templ/page2.vue");
var page3 = require("./templ/page3.vue");
var page4 = require("./templ/page4.vue");
var page5 = require("./templ/page5.vue");
Vue.component('page1',page1);
Vue.component('page2',page2);
Vue.component('page3',page3);
Vue.component('page4',page4);
Vue.component('page5',page5);

Vue.use(VueRouter);
var router = new VueRouter()
router.map({
    '/page1': {
        component: page1
    },
    '/page2': {
        component: page2
    },
    '/more/page3': {
        component: page3
    },
    '/more/page4': {
        component: page4
    },
    '/more/page5': {
        component: page5
    }
})
var app = Vue.extend({
  el: "#app",
  data: function(){
    return {
      msg: "hello world",
      navGroup: [true, false,false]
    }
  },
  methods: {
    tapme: function(num){
      var _self = this;
      this.navGroup.forEach(function(el, index){
        _self.$set('navGroup['+ index +']', false)
      })
      this.$set('navGroup['+ num +']', true)
    }
  },
  update: {
  }
})
router.start(app, '#app')
