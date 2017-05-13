export default [
  // {
  //   path: '/about/',
  //   component: require('./assets/vue/pages/landing.vue')
  // },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
  {
    path: '/login/',
    component: require('./assets/vue/pages/login.vue')
  },
  {
    path: '/signup-step1/',
    component: require('./assets/vue/pages/register_step1.vue')
  },
  {
    path: '/signup-step2/',
    component: require('./assets/vue/pages/register_step2.vue')
  },
  {
    path: '/signup-step3/',
    component: require('./assets/vue/pages/register_step3.vue')
  },
  {
    path: '/signup-step4/',
    component: require('./assets/vue/pages/register_step4.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }
]
