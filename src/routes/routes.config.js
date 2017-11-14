import overall from '../pages/overall';

import seek from "../components/seek.vue";
var routes = [
    {
       path:'/',
       redirect:'/overall'
    },
    {
        name:'overall',
        path:'/overall',
        component: overall,
        meta:{
            data:true
        }
    },
    {
        name: 'college',
        path: '/college',
        component: seek,
        meta: {
            data: false
        }
    },
    {
        name: 'major',
        path: '/major',
        component: {
            template: '<h1>专业</h1>'
        },
        meta: {
            data: true
        }
    }
]
export default routes;