import Form from '@components/Form'
import {
  SignupPageContainer,
  StyledForm,
  StyledLabel,
  GlobalButtonWrapper,
  FieldWrapper,
} from './style'
import TeamSelectModal from '@components/TeamSelectModal'
import GlobalButton from '@components/GlobalButton'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate()

  const infoFieldList = [
    { name: '닉네임', placeholder: '닉네임을 입력해주세요.' },
  ]

  return (
    <SignupPageContainer>
      <FieldWrapper>
        <StyledLabel>연령대 / 성별</StyledLabel>
        <p>20대 / 남</p>
      </FieldWrapper>

      <StyledForm>
        <Form fieldList={infoFieldList} />
        <FieldWrapper>
          <StyledLabel>마이팀</StyledLabel>
          <TeamSelectModal />
        </FieldWrapper>
      </StyledForm>

      <GlobalButtonWrapper>
        <GlobalButton
          text='회원가입'
          $isNavy={true}
          onClick={() => {
            navigate('/')
          }}
        />
      </GlobalButtonWrapper>
    </SignupPageContainer>
  )
}

export default SignupPage
