/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
    {
        path: '',
        meta: {
            name: '',
            requiresAuth: false
        },
        redirect: 'dashboard'
    },
    {
        path: 'dashboard',
        name: 'DashboardV4',
        component: () => import(`../views/Dashboard.vue`)
    },
    {
        path: 'user-profile',
        meta: {
            name: 'User Profile',
            requiresAuth: true
        },
        component: () => import(`../views/UserProfile.vue`)
    },
    {
        path: 'myteam',
        meta: {
            name: 'MyTeam',
            requiresAuth: true
        },
        component: () => import(`../views/MyTeam.vue`)
    },
    {
        path: 'myproject',
        meta: {
            name: 'MyProject',
            requiresAuth: true
        },
        component: () => import(`../views/MyProject.vue`)
    },
    {
        path: 'myclient',
        meta: {
            name: 'MyClient',
            requiresAuth: true
        },
        component: () => import(`../views/MyClient.vue`)
    },
    {
        path: 'history',
        meta: {
            name: 'History',
            requiresAuth: true
        },
        component: () => import(`../views/History.vue`)
    },
    {
        path: 'communication',
        meta: {
            name: 'Communication',
            requiresAuth: true
        },
        component: () => import(`../views/Communication.vue`)
    },
    {
        path: 'settings',
        meta: {
            name: 'Settings',
            requiresAuth: true
        },
        component: () => import(`../views/Settings.vue`)
    },
]
