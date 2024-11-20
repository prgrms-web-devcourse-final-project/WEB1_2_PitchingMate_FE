import GlobalLayout from '@layouts/GlobalLayout'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path='/' />
      </Route>
    </Routes>
  )
}

export default AppRoutes
