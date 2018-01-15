import Company from '@/components/basesets/Company/Company';
import CompanyEdit from '@/components/basesets/Company/CompanyEdit';
const company_child = {
  path : 'edit',
  component:CompanyEdit
}

const companyRouter = {
  path : 'company',
  component : Company,
  children:[company_child]
};

export default companyRouter
