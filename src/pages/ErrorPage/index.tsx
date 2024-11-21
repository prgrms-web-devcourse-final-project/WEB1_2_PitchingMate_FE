import { ErrorContent, ErrorPageContainer } from './style'
import ErrorImage from '@assets/character/character-worst.svg?react'
import GlobalButton from '@components/GlobalButton'
import { useNavigate } from 'react-router-dom'

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
      <GlobalButton
        $isNavy
        text='홈으로 돌아가기'
        onClick={handleClick}
      />
    </ErrorPageContainer>
  )
}

export default ErrorPage
