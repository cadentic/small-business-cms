
// Routes
import paths from './paths'

function route (path, view, name) {
    return {
        name: name || view,
        path,
        component: (resovle) => import(
            `../../../themes/v2/views/${view}.vue`
            ).then(resovle)
    }
}

const routes = paths.map(path => route(path.path, path.view, path.name)).concat(
    {
        path: '',
        redirect: 'dashboard'
    })
export default routes
