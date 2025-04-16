import Home from './Home'
import Grid from './Grid'
import { fetchPopularRepos } from './api'
import Items from './Items'

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
  }
]

export default routes