import GoodsCard from '@components/GoodsCard'
import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ErrorPage from '@pages/ErrorPage'
import MatePostingPage from '@pages/MatePostingPage'
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
      <Route element={<SubLayout />}>
        <Route
          path='/mate-posting'
          element={<MatePostingPage />}
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
