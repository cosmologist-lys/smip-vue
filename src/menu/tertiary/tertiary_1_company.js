import routers from '@/router/home-parts/company/companyRouter.js'

export default [
  {
    id: 1,
    title: '公司名片',
    index: '1-1-1',
    txt: '',
    path: {path: '/home/company/card'},
    router: routers.card
  }, {
    id: 2,
    title : '区域划分',
    index: '1-1-2',
    txt: '',
    path: {path: '/home/company/area'},
    router: routers.area
  },{
    id: 3,
    title : '小区划分',
    index: '1-1-3',
    txt: '',
    path: {path: '/home/company/community'},
    router: routers.community
  },{
    id: 4,
    title : '测试表格',
    index: '1-1-4',
    txt: '',
    path: {path: '/home/company/test'},
    router: routers.tester
  }
]
