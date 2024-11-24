import styled from 'styled-components'
import { theme } from '@styles/theme'

// `<dialog>` 스타일
export const AlertDialog = styled.dialog`
  position: fixed; /* 화면 고정 */
  bottom: 0; /* 하단에 배치 */
  left: 0; /* 가로 중앙 정렬 */

  width: 100%;
  max-width: 300px;

  outline: none;
  border: none;
  border-radius: 1em;
  margin: auto;
  padding: 1.25em;
  z-index: 1000;

  /* 백드롭 스타일 */
  &::backdrop {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 100%;
    max-width: 480px;
    min-width: 350px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-size: ${theme.fontSize.xlarge};
    margin-bottom: 0.625em;
    color: ${theme.fontColor.black};
    font-weight: ${theme.fontWeight.bold};
  }
`

export const AlertNotice = styled.p`
  font-size: ${theme.fontSize.medium};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.fontColor.black};
`

export const AlertButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1.25em;
`
