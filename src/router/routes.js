const HomePage = () => import('@/components/pages/Home')
const TestsPage    = () => import('@/components/pages/Tests')
/*
const ProfilePage  = () => import('@/components/pages/Profile')
const TheoryPage   = () => import('@/components/pages/Theory')
const PracticePage = () => import('@/components/pages/Practice')
*/

const Authorization = () => import('@/components/Authorization')
const Authentication = () => import('@/components/forms/Authentication')
const Registration = () => import('@/components/forms/Registration')

const DealWithIt = () => import('@/components/DealWithIt')
const PagePlaceholder = () => import('@/components/PagePlaceholder')

/*
import HomePage     from '@/components/pages/Home'
import ProfilePage  from '@/components/pages/Profile'
import TheoryPage   from '@/components/pages/Theory'
import TestsPage    from '@/components/pages/Tests'
import PracticePage from '@/components/pages/Practice'
*/

export default [
  {
    path: '/',
    redirect: '/profile',
  }, {
    path: '/home',
    component: HomePage
  }, {
    path: '/auth',
    component: Authorization,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'login',
        component: Authentication,
      }, {
        path: '/register',
        name: 'register',
        component: Registration
      }
    ]
  }, /*{
    path: '/profile',
    component: ProfilePage,
    meta: { private: true }
  }, {
    path: '/theory',
    component: TheoryPage,
    meta: { private: true }
  }, */{
    path: '/tests',
    component: TestsPage
  }, /*{
    path: '/practice',
    component: PracticePage,
    meta: { private: true }
  }, */{
    path: '*',
    component: PagePlaceholder,
    meta: { private: true }
  }
]