import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path='/' />
      </Route>
      <Route element={<SubLayout />}>
        <Route path='/sub' />
      </Route>
    </Routes>
  )
}

export default AppRoutes
