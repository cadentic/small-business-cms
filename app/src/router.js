import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import DashboardView from '@/views/DashboardView.vue'
import Tab1 from '@/components/Tab1.vue'
import Tab2 from '@/components/Tab2.vue'
import Tab3 from '@/components/Tab3.vue'
import Tab4 from '@/components/Tab4.vue'
import Tab5 from '@/components/Tab5.vue'
import Tab6 from '@/components/Tab6.vue'
import Tab9 from '@/components/Tab9.vue'
import Tab10 from '@/components/Tab10.vue'
import PathsV1 from '@/themes/v1/router/paths'
import PathsV2 from '@/themes/v2/router/routes'
import PathsV3 from '@/themes/v3/router/routes'
import PathsV4 from '@/themes/v4/router/routes'
import AppV2 from './themes/v2/App.vue'
import AppV3 from './themes/v3/App.vue'
import AppV4 from './themes/v4/App.vue'
import TemplateV1 from '@/components/TemplateV1.vue'
import TemplateV2 from '@/components/TemplateV2.vue'
import TemplateV3 from '@/components/TemplateV3.vue'
import TemplateV4 from '@/components/TemplateV4.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/manage/v1/'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/v1',
            component: TemplateV1,
            children: PathsV1
        },
        {
            path: '/v2',
            component: TemplateV2,
            children: PathsV2
        },
        {
            path: '/v3',
            component: TemplateV3,
            children: PathsV3
        },
        {
            path: '/pm',
            component: TemplateV4,
        },
        {
            path: '/manage/v3',
            component: AppV3,
            children: PathsV3
        },
        {
            path: '/manage',
            component: DashboardView,
            children: [
                {
                    path: '',
                    redirect: 'tab1'
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
            ]
        },
    ]
})
