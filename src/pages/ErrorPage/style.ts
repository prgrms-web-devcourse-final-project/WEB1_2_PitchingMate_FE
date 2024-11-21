import styled from 'styled-components'

export const ErrorPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`
export const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ErrorButton = styled.button`
  width: 100%;
  padding: 0.94em 0;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.fontColor.navy};
  color: ${({ theme }) => theme.fontColor.cwhite};
`
