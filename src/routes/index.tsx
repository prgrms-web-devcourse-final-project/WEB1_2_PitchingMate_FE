import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ChatPage from '@pages/ChatPage'
import ErrorPage from '@pages/ErrorPage'
import GoodsPostingPage from '@pages/GoodsPostingPage'
import MatePostingPage from '@pages/MatePostingPage'
import { Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route element={<GlobalLayout />}>
        <Route path='/' />
        <Route
          path='/chat'
          element={<ChatPage />}
        />
      </Route>
      
      <Route element={<SubLayout />}>
        <Route
          path='/goods-posting'
          element={<GoodsPostingPage />}
        />
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
