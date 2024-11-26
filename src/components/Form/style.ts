import styled from 'styled-components'
import { theme } from '@styles/theme'

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  min-width: 350px;
  padding: 1em 1.25em;
`

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};
`

export const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 1em;
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.regular};
  border: 1px solid ${theme.fontColor.cwhite};
  border-radius: 4px;

  &:focus {
    border: 1px solid ${theme.teams.kbo};
  }
`
