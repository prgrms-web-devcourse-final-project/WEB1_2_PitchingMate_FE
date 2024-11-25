import GoodsCard from '@components/GoodsCard'
import TeamSelectModal from '@components/TeamSelectModal'
import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ErrorPage from '@pages/ErrorPage'
import NotificationPage from '@pages/NotificationPage'
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
        <Route path='/sub' />
      </Route>
      <Route
        path='*'
        element={<ErrorPage />}
      />
      <Route
        path='/notification'
        element={<NotificationPage />}
      />
    </Routes>
  )
}

export default AppRoutes
