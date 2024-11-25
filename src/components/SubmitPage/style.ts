import styled from 'styled-components'

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
  padding: 20px 0;
`

export const SubmitTitle = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  padding: 0 20px;
`

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px - 29px);
  gap: 30px;
`

export const ProcessSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
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
  padding: 0 20px;
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
