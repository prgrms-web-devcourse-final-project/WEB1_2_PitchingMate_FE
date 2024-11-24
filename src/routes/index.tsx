import Alert from '@components/Alert'
import GoodsCard from '@components/GoodsCard'
import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
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
        <Route
          path='/alert'
          element={
            <Alert
              title='매칭취소'
              notice='매칭을 취소하시겠습니까?'
              actionText='취소하기'
              cancelText='이전'
            />
          }
        />
      </Route>
      <Route element={<SubLayout />}>
        <Route path='/sub' />
      </Route>
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Routes>
  )
}

export default AppRoutes
