import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home/Home'
import Categroy from 'views/categroy/Categroy'
import Tag from 'views/tag/Tag'
import Search from 'views/search/Search'
import Archive from 'views/archive/Archive'
import PostDetail from 'views/detail/PostDetail'

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
      component: Categroy,
      children: [
        {path: '/cate/:id', component: Categroy}
      ]
    },
    {
      path: '/tags',
      name: 'Tag',
      component: Tag,
      children: [
        {path: '/tags/:id', component: Tag}
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/about',
      name: 'About',
      component: PostDetail
    },
    {
      path: '/post/:id',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/search/:keywords',
      name: 'SearchPost',
      component: Home
    }
  ]
})
