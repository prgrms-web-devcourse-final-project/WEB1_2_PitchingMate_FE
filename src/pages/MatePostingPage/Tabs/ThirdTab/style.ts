import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ImgLabel = styled.label`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.fontColor.cwhite};
  border: 1px solid ${({ theme }) => theme.fontColor.navy};

  & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input[type='file'] {
    display: none;
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`

export const Input = styled.input`
  border: none;
  outline: 1px solid ${({ theme }) => theme.fontColor.cwhite};

  &:focus {
    border: none;
    outline: 1px solid ${({ theme }) => theme.fontColor.navy};
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  outline: 1px solid ${({ theme }) => theme.fontColor.cwhite};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.fontColor.navy};
  }
`
