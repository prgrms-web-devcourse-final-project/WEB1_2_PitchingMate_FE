import GoodsCard from '@components/GoodsCard'
import TeamSelectModal from '@components/TeamSelectModal'
import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ErrorPage from '@pages/ErrorPage'
import ProfileMain from '@pages/ProfilePage/ProfileMain'
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
          path='/profile'
          element={<ProfileMain />}
        />
        <Route path='/profile/edit' />
      </Route>
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Routes>
  )
}

export default AppRoutes
