import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueRouter from 'vue-router'
import home from './components/home1.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
import about from './components/about.vue'
import select from './components/select.vue'
import personal from './components/personal.vue'
import relationship from './components/relationship.vue'
import academic from './components/academic.vue'
import FAQs from './components/FAQ.vue'
import term from './components/terms.vue'
import privacy from './components/privacy.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import counsellor1 from './components/counsel-personal.vue'
import counsellor2 from './components/counsel-relationship.vue'
import counsellor3 from './components/counsel-academic.vue'
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'

Vue.use(AnimatedVue)

// Install BootstrapVue
Vue.use(BootstrapVue)

// Install BootstrapVue icon
Vue.use(IconsPlugin)


Vue.config.productionTip = false
Vue.use(VueRouter);
const routes=[
  {path : '/', component:home},
  {path :'/login', component:login},
  {path:'/signup', component:signup},
  {path : '/about' , component: about},
  {path : '/select', component:select},
  {path : '/select/personal', component:personal},
  {path : '/select/relationship', component:relationship},
  {path : '/select/academic', component : academic},
  {path: '/FAQs', component : FAQs},
  {path : '/terms and conditions', component:term},
  {path : '/privacy policy' ,component:privacy},
  {path:'/selectpersonalcounsel', component:counsellor1},
  {path:'/selectrelationshipcounsel', component:counsellor2},
  {path:'/selectacademiccounsel', component:counsellor3}



  
];
const router= new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  created(){
    AOS.init()
  },
  
  router,
  render: h => h(App),
  
}).$mount('#app');
