import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import yuangong from '@/views/modules/yuangong/list'
    import discussjiudianjianjie from '@/views/modules/discussjiudianjianjie/list'
    import kefangyuding from '@/views/modules/kefangyuding/list'
    import ruzhuanpai from '@/views/modules/ruzhuanpai/list'
    import kefangleixing from '@/views/modules/kefangleixing/list'
    import yonghu from '@/views/modules/yonghu/list'
    import jiudianjianjie from '@/views/modules/jiudianjianjie/list'
    import discussjiudiankefang from '@/views/modules/discussjiudiankefang/list'
    import jiudiankefang from '@/views/modules/jiudiankefang/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '酒店公告',
        component: news
      }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/discussjiudianjianjie',
        name: '酒店简介评论',
        component: discussjiudianjianjie
      }
      ,{
	path: '/kefangyuding',
        name: '客房预定',
        component: kefangyuding
      }
      ,{
	path: '/ruzhuanpai',
        name: '入住安排',
        component: ruzhuanpai
      }
      ,{
	path: '/kefangleixing',
        name: '客房类型',
        component: kefangleixing
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/jiudianjianjie',
        name: '酒店简介',
        component: jiudianjianjie
      }
      ,{
	path: '/discussjiudiankefang',
        name: '酒店客房评论',
        component: discussjiudiankefang
      }
      ,{
	path: '/jiudiankefang',
        name: '酒店客房',
        component: jiudiankefang
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
