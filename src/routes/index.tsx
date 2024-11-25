import GoodsCard from '@components/GoodsCard'
import TeamSelectModal from '@components/TeamSelectModal'
import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ErrorPage from '@pages/ErrorPage'
import FollowPage from '@pages/FollowPage'
import GoodsRecordPage from '@pages/GoodsRecordPage'
import ProfileEdit from '@pages/ProfilePage/ProfileEdit'
import ProfileMain from '@pages/ProfilePage/ProfileMain'
import ReviewPage from '@pages/ProfilePage/ReviewPage'
import TimelinePage from '@pages/TimelinePage'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path='/' />
      </Route>
      <Route element={<SubLayout />}></Route>
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Routes>
  )
}

export default AppRoutes
