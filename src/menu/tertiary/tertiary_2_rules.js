import routers from '@/router/home-parts/rules/rulesRouter.js'

export default [
  {
    id: 1,
    index: '1-2-1',
    title:'编码规则',
    txt: '',
    path: {path: '/v1.0/rules/encode'},
    router: routers.encode
  }, {
    id: 2,
    index: '1-2-2',
    title:'气表型号',
    txt: '',
    path: {path: '/v1.0/rules/meter-type'},
    router: routers.meter_type
  }, {
    id: 3,
    index: '1-2-3',
    title:'卡操作类型',
    txt: '',
    path: {path: '/v1.0/rules/card-opt-type'},
    router: ''
  }, {
    id: 4,
    index: '1-2-4',
    title:'气费价格',
    txt: '',
    path: {path: '/v1.0/rules/price'},
    router: routers.price
  }, {
    id: 5,
    index: '1-2-5',
    title:'阶梯价格',
    txt: '',
    path: {path: '/v1.0/rules/ladders'},
    router: ''
  }
]
