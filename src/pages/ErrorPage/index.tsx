import { ErrorButton, ErrorContent, ErrorPageContainer } from './style'
import { useNavigate } from 'react-router-dom'
import ErrorImage from '@assets/character/character-worst.svg?react'

const ErrorPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <ErrorPageContainer>
      <ErrorContent>
        <h1>이런! 찾는 페이지가 없어요!</h1>
        <ErrorImage
          width={100}
          height={100}
        />
      </ErrorContent>
      <ErrorButton onClick={handleClick}>홈으로 돌아가기</ErrorButton>
    </ErrorPageContainer>
  )
}

export default ErrorPage
