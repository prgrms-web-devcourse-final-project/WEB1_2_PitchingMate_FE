import Header from '@layouts/Header'
import GlobalNav from '@layouts/GlobalNav'
import { Outlet } from 'react-router-dom'
import {
  GlobalContainer,
  GlobalFloatAside,
  GlobalFloatButton,
} from '@styles/globalStyle'

import Write from '@assets/icon/write.svg?react'

const GlobalLayout = () => {
  return (
    <div>
      <Header />
      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
      <GlobalFloatAside>
        <GlobalFloatButton>
          <Write />
        </GlobalFloatButton>
      </GlobalFloatAside>
      <GlobalNav />
    </div>
  )
}

export default GlobalLayout
