import CompanyV from '@/components/Constructor/Company/Company'
import CompanyEditV from '@/components/Constructor/Company/CompanyEdit'

/**
 * company.routes
 * @type {{path: string, component}}
 */

const info = {
  path: 'company/info',
  component: CompanyV
}

const edit = {
  path: 'company/edit',
  component: CompanyEditV
}

const redirect = {
  path: 'company',
  redirect: 'company/info'
}

export default {
  info, edit, redirect
}
