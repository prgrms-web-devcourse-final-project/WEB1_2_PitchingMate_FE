import Header from '@layouts/Header'
import GlobalNav from '@layouts/GlobalNav'
import { Outlet } from 'react-router-dom'
import { GlobalContainer } from '@styles/globalStyle'
import ProfileBedge from '@components/ProfileBedge'

const GlobalLayout = () => {
  return (
    <div>
      <Header />
      <GlobalContainer>
        <Outlet />
        <ProfileBedge
          width={100}
          height={100}
          myTeam='LG'
        />
      </GlobalContainer>
      <GlobalNav />
    </div>
  )
}

export default GlobalLayout
