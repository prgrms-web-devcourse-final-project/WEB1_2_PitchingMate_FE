import Header from '@layouts/Header'
import GlobalNav from '@layouts/GlobalNav'
import { Outlet } from 'react-router-dom'
import { GlobalContainer } from '@styles/globalStyle'

const GlobalLayout = () => {
  return (
    <div>
      <Header />
      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
      <GlobalNav />
    </div>
  )
}

export default GlobalLayout
