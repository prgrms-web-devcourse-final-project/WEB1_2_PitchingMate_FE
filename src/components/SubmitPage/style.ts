import styled from 'styled-components'

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

export const SubmitTitle = styled.h1`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
`

export const SubmitForm = styled.form``

export const ProcessSection = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ProcessBar = styled.div<{ $isActive?: boolean }>`
  width: 30%;
  height: 4px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.navy : theme.fontColor.cwhite};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Button = styled.button<{ $isPrevious?: boolean }>`
  width: ${({ $isPrevious }) => ($isPrevious ? '65%' : '100%')};
  padding: 20px 0;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.semi};

  background-color: ${({ theme }) => theme.fontColor.navy};
  color: ${({ theme }) => theme.fontColor.cwhite};
`
export const PreviousButton = styled(Button)`
  width: 30%;
  background-color: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
`
