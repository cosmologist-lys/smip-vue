import Companycard from '@/components/Base/Company-sets/Card/CompanyCard'
import Area from '@/components/Base/Company-sets/Area/Area'
import Community from '@/components/Base/Company-sets/Community/Community'
import Test from '@/components/Base/Company-sets/Test/Test'

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

const community = {
  path : 'company/community',
  component : Community
}

const tester = {
  path : 'company/test',
  component: Test
}

const redirect = {
  path: 'company',
  redirect: 'company/card'
}

export default {
  card, area, redirect , community , tester
}
