import GoodsCard from '@components/GoodsCard'
import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ErrorPage from '@pages/ErrorPage'
import MatePostingPage from '@pages/MatePostingPage'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '@pages/LoginPage'
import SignupPage from '@pages/LoginPage/SignupPage'

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
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/login/signup'
          element={<SignupPage />}
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
