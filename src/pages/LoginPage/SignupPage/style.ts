import styled from 'styled-components'
import { theme } from '@styles/theme'
export const SignupPageContainer = styled.div``

export const StyledForm = styled.form``

export const FieldWrapper = styled.div`
  margin-bottom: 1em;

  p {
    padding: 0 1.25em;
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.regular};
  }
`

export const StyledLabel = styled.label`
  padding: 0 1em;
  margin-top: 1em;
  margin-bottom: 8px;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};
`

export const GlobalButtonWrapper = styled.div`
  margin: 0 1.25em;
`
