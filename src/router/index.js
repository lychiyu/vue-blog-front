import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/Home'
import Categroy from 'views/categroy/Categroy'
import Tag from 'views/tag/Tag'
import Search from 'views/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cate',
      name: 'Categroy',
      component: Categroy
    },
    {
      path: '/tag',
      name: 'Tag',
      component: Tag
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
