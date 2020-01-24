/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import Dashboard from '../../../themes/v1/views/Dashboard'
import UserProfile from '../../../themes/v1/views/UserProfile'
import ApplicationV1 from '../../../themes/v1/views/Application'
import TypographyV1 from '../views/Typography'
import TableListV1 from '../../../themes/v1/views/TableList'
import Icons from '../../../themes/v1/views/Icons'
import MenuBuilder from '../views/MenuBuilder'

export default [{
        path: '',
        redirect: 'dashboard'
    },
    {
        path: 'dashboard',
        component: Dashboard,
        name: 'Dashboard'
    },
    {
        path: 'menu-style',
        name: 'Menu Style',
        component: UserProfile,
    },
    {
        path: 'application',
        name: 'Application',
        component: ApplicationV1,
    },
    {
        path: 'pages',
        name: 'Pages',
        component: TypographyV1,
    },
    {
        path: 'ui-kit',
        name: 'UI Kit',
        component: ApplicationV1,
    },
    {
        path: 'email',
        name: 'Email',
        component: ApplicationV1,
    },
    {
        path: 'user',
        name: 'User',
        component: ApplicationV1,
    },
    {
        path: 'form',
        name: 'Form',
        component: ApplicationV1,
    },
    {
        path: 'table',
        name: 'Table',
        component: TableListV1,
    },
    {
        path: 'icon',
        name: 'Icons',
        component: Icons,
    },
    {
        path: 'menubuilder',
        name: 'MenuBuilder',
        component: MenuBuilder,
    },
]