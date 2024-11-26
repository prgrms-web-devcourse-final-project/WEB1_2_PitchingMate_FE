import { StyledButton } from './style'
import NaverButton from '@assets/icon/naver_login.png'
import { useNavigate } from 'react-router-dom'

const NaverLoginButton = () => {
  const navigate = useNavigate()

  return (
    <StyledButton onClick={() => navigate('/login/signup')}>
      <img
        src={NaverButton}
        alt='네이버 로그인'
      />
    </StyledButton>
  )
}

export default NaverLoginButton
