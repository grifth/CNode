import Vue from 'vue'
import Router from 'vue-router'
import article from '@/components/article'
import postlist from '@/components/postlist'
import userinfo from '@/components/userinfo'
import slidebar from '@/components/slidebar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main:postlist
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main:article,
        slidebar:slidebar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main:userinfo
      }
    },
  ]
})
