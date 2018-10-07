import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import PostList from '@/components/Postlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList
      }
    },
    {
      path: '/topic/:id',
      name: 'post_content',
      components: {
        main:Article
      }
    }
  ]
})
