import company_child from './routeGroups/company/company_route'

import Login_v from '@/components/Login/Login'
import Main_v from '@/components/Main/Main'
import App from '@/App.vue'

export default [
  {path: '/login', component: Login_v},
  {path: '/home', component: App,
    children:[
      company_child
    ]
  }
]
