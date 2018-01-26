import Companycard from '@/components/Base/Company-sets/Card/CompanyCard'
import Area from '@/components/Base/Company-sets/Area/Area'
import Community from '@/components/Base/Company-sets/Community/Community'
import Test from '@/components/Base/Company-sets/Test/Test'

/**
 * company.routes
 * @type {{path: string, component}}
 */

const card = {
  path: 'card',
  component: Companycard
};

const area = {
  path: 'area',
  component: Area
};

const community = {
  path : 'community',
  component : Community
};

const tester = {
  path : 'test',
  component: Test
};


export default {
  card, area , community , tester
}
