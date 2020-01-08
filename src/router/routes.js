const routes = [
  {
    path: '/',
    component: () => import('layouts/ToDoLayout.vue'),
    children: [{ path: '', component: () => import('pages/ToDo.vue') }],
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  })
}

export default routes
