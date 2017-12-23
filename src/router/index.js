import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes
})

let authRoutes = [
  '/register',
  '/login',
  '/auth'
]

router.beforeEach((to, from, next) => {

  if (
    from.query.redirect
    && !to.query.redirect
    && authRoutes.includes(to.path)
  ) return next({
    path: to.path,
    query: { redirect: from.query.redirect }
  })

  if (
    to.matched[0].meta.private
    && !window.$model.user
  ) next({
    path: '/auth',
    query: { redirect: to.fullPath.slice(1) }
  })
  else
    next()
})


export default router