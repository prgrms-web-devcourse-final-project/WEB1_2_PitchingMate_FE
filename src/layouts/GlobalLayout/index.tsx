import Header from '@layouts/Header'
import GlobalNav from '@layouts/GlobalNav'
import { Outlet } from 'react-router-dom'
import { GlobalContainer } from '@styles/globalStyle'
import MateCard from '@components/MateCard'

const GlobalLayout = () => {
  return (
    <div>
      <Header />
      <GlobalContainer>
        <MateCard />
        <Outlet />
      </GlobalContainer>
      <GlobalNav />
    </div>
  )
}

export default GlobalLayout
