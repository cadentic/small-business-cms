/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
    {
        path: 'dashboard',
        name: 'DashboardV2',
        // Relative to /src/views
        view: 'Dashboard'
    },
    {
        path: 'user-profile',
        name: 'User Profile',
        view: 'UserProfile'
    },
    {
        path: 'table-list',
        name: 'Table List',
        view: 'TableList'
    },
    {
        path: 'solution',
        name: 'Solution',
        view: 'Typography'
    },
    {
        path: 'icons',
        name: 'IconsV2',
        view: 'Icons'
    },
    {
        path: 'forum',
        name: 'Forum',
        view: 'Notifications'
    },
    {
        path: 'bots',
        name: 'Bots',
        view: 'Application'
    },
    {
        path: 'report',
        name: 'Report',
        view: 'Application'
    },
    {
        path: 'settings',
        name: 'Settings',
        view: 'Application'
    },
]
