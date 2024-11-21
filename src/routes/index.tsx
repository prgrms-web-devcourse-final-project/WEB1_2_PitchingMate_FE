import GoodsCard from '@components/GoodsCard'
import GlobalLayout from '@layouts/GlobalLayout'
import ErrorPage from '@pages/ErrorPage'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path='/' />
        <Route
          path='/goods'
          element={<GoodsCard />}
        />
      </Route>
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Routes>
  )
}

export default AppRoutes
