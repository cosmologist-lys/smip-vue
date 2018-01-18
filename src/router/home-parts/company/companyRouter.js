import Companycard from '@/components/Base/Company-sets/CompanyCard'
import Area from '@/components/Base/Company-sets/Area'

/**
 * company.routes
 * @type {{path: string, component}}
 */

const card = {
  path: 'company/card',
  component: Companycard
}

const area = {
  path: 'company/area',
  component: Area
}

const redirect = {
  path: 'company',
  redirect: 'company/card'
}

export default {
  card, area, redirect
}
