import companys from './home-parts/company/companyRouter'
import rules from './home-parts/rules/rulesRouter'

const parts = [
  //公司信息
  companys.area,
  companys.card,
  companys.redirect,
  companys.community,
  companys.tester,
  //规则设置
  rules.encode,
  rules.meter_type,
  rules.price,
  rules.redirect
];

export default parts;
