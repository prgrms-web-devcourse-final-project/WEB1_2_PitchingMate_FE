import { ErrorContent, ErrorPageContainer } from './style'
import ErrorImage from '@assets/character/character-worst.svg?react'
import GlobalButton from '@components/GlobalButton'

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorContent>
        <h1>이런! 찾는 페이지가 없어요!</h1>
        <ErrorImage
          width={100}
          height={100}
        />
      </ErrorContent>
      <GlobalButton />
    </ErrorPageContainer>
  )
}

export default ErrorPage
