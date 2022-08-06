import { createRouter, createWebHistory } from 'vue-router'
import AdminHome from './components/Home'
import Casino from './components/admin/casino/Casinos'
import AddCasino from './components/admin/casino/AddCasino'
import EditCasino from './components/admin/casino/EditCasino'
import ClientHome from './components/client/pages/Index'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import CasinoDetails from './components/client/CasinoDetails'
import CasinosAssigned from './components/admin/casino/CasinosAssigned'
import AssignCountry from './components/admin/casino/AssignCountry'
import AddCountry from './components/admin/country/AddCountry'
// import AdminCountryList from './components/admin/country/Countries'
import CasinoCountries from './components/admin/casino/CasinoCountries' 

const routes = [
  {
      name: 'casinoCountries',
      path: '/casino/countries',
      component: CasinoCountries,
      props: true
  },
  {
      name: 'admin',
      path: '/admin',
      component: AdminHome,
      meta: {requiresAuth: true}
  },
  {
      name: 'admincasinos',
      path: '/admin/casinos',
      component: Casino,
      meta: {requiresAuth: true}
  },
  {
      name: 'addCasino',
      path: '/admin/addCasino',
      component: AddCasino,
      meta: {requiresAuth: true}
  },
  {
    name: 'editCasino',
    path: '/admin/editCasino',
    component: EditCasino,
    // props: true,
    props: (route) => ({
        ...route.params
        // console.log("route")
    }),
    meta: {requiresAuth: true}
  },
  {
      path: '/',
      name: 'home',
      component: ClientHome,
      meta: {guest: true}
  },
  {
      name: 'login',
      path: '/login',
      component: Login,
      meta: {guest: true}
  },
  {
      name: 'register',
      path: '/admin/register',
      component: Register,
    //   meta: {requiresAuth: true}
  },
  {
      name: 'details',
      path: '/view/casino',
      component: CasinoDetails,
      props: true
  },
  {
      name: 'countriesAssigned',
      path: '/admin/casino/countries',
      component: CasinosAssigned,
      props: true,
      meta: {requiresAuth: true}
  },
  {
      name: 'assignCountry',
      path: '/admin/assignCountry',
      component: AssignCountry,
      props: true,
      meta: {requiresAuth: true}
  },
  {
      path: '/admin/addCountry',
      component: AddCountry,
      meta: {requiresAuth: true}
  },
  // {
  //     name: 'adminCountryList',
  //     path: '/admin/countries',
  //     component: AdminCountryList,
  //     meta: {requiresAuth: true}
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  stringifyQuery: (query) => stringifyQuery(query),
  routes
})

export default router
