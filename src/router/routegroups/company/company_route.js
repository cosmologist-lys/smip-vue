import Company_V from '@/components/basesets/Company/Company'
import Company_V_edit from '@/components/basesets/Company/CompanyEdit'


export default [
  {path : '/company', component : Company_V,
    children : [
      {path : 'edit',component : Company_V_edit},
    ]
  }
]
