import GoodsCard from '@components/GoodsCard'
import GlobalLayout from '@layouts/GlobalLayout'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path='/' />
      </Route>
      <Route element={<GlobalLayout />}>
        <Route
          path='/goods'
          element={<GoodsCard />}
        />
      </Route>
    </Routes>
  )
}

export default AppRoutes
