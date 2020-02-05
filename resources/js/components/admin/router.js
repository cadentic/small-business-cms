import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import DashboardView from './views/DashboardView.vue'
import Tab1 from './components/Tab1.vue'
import Tab2 from './components/Tab2.vue'
import Tab3 from './components/Tab3.vue'
import Tab4 from './components/Tab4.vue'
import Tab5 from './components/Tab5.vue'
import Tab6 from './components/Tab6.vue'
import Tab9 from './components/Tab9.vue'
import Tab10 from './components/Tab10.vue'
import Tab11 from './components/Tab11.vue'
import Tab12 from './components/Tab12.vue'
import Tab13 from './components/Tab13.vue'
import PathsV1 from './themes/v1/router/paths'
import PathsV2 from './themes/v2/router/routes'
import PathsV3 from './themes/v3/router/routes'
import PathsV4 from './themes/v4/router/routes'
import AppV2 from './themes/v2/App.vue'
import AppV3 from './themes/v3/App.vue'
import AppV4 from './themes/v4/App.vue'
import TemplateV1 from './components/TemplateV1.vue'
import TemplateV2 from './components/TemplateV2.vue'
import TemplateV3 from './components/TemplateV3.vue'
import TemplateV4 from './components/TemplateV4.vue'


import TransactionHistory from "./components/transaction-history/TransactionHistory.vue";
import ClientPayout from "./components/client-payout/ClientPayout.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/admin',
            redirect: '/admin/manage/v1/'
        },
        {
            path: '/admin/login',
            name: 'login',
            component: Login
        },
        {
            path: '/admin/v1',
            component: TemplateV1,
            children: PathsV1
        },
        {
            path: '/admin/v2',
            component: TemplateV2,
            children: PathsV2
        },
        {
            path: '/admin/v3',
            component: TemplateV3,
            children: PathsV3
        },
        {
            path: '/admin/pm',
            component: TemplateV4,
        },
        {
            path: '/admin/manage/v3',
            component: AppV3,
            children: PathsV3
        },
        {
            path: '/admin/manage',
            component: DashboardView,
            children: [
                {
                    path: '',
                    redirect: 'tab1'
                },
                {
                    path: 'transaction-history',
                    name: 'TransactionHistory',
                    component: TransactionHistory,
                },

                {
                    path: 'client-payout',
                    name: 'ClientPayout',
                    component: ClientPayout,
                },

                {
                    path: 'tab1',
                    name: 'Tab1',
                    component: Tab1,
                },
                {
                    path: 'tab2',
                    name: 'Tab2',
                    component: Tab2,
                },
                {
                    path: 'tab3',
                    name: 'Tab3',
                    component: Tab3,
                },
                {
                    path: 'tab4',
                    name: 'Tab4',
                    component: Tab4,
                },
                {
                    path: 'v1',
                    component: Tab5,
                    children: PathsV1
                },
                {
                    path: 'tab6',
                    name: 'Tab6',
                    component: Tab6,
                },
                {
                    path: 'v2',
                    component: AppV2,
                    children: PathsV2
                },
                {
                    path: 'v4',
                    component: AppV4,
                    children: PathsV4
                },
                {
                    path: 'tab9',
                    name: 'Tab9',
                    component: Tab9,
                },
                {
                    path: 'tab10',
                    name: 'Tab10',
                    component: Tab10,
                },
                {
                    path: 'tab11',
                    name: 'Tab11',
                    component: Tab11,
                },
                {
                    path: 'tab12',
                    name: 'Tab12',
                    component: Tab12,
                },
                {
                    path: 'tab13',
                    name: 'Tab13',
                    component: Tab13,
                },
            ]
        },
    ]
})
