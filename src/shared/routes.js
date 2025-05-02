import Home from './Home'
import Grid from './Grid'
import { fetchPopularRepos } from './api'
import Items from './Items'
import Orders from './Orders'
import User from './User'

const routes =  [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(path.split('/').pop())
  },
  {
    path: '/items',
    component: Items
  },
  {
    path: '/cart',
    component: Items
  },
  {
    path: '/order',
    component: Orders
  },
  {
    path: '/user',
    component: User
  }
]

export default routes