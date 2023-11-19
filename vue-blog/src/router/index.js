import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Column from '../views/Column.vue'
import Article from '../views/Article.vue'
import ArticleList from '../views/ArticleList.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {path:'/column',component:Column},
      {path:'/article/list',component:ArticleList},
      {path:'/article/:id',component:Article},
      
    ]
  },

]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router
