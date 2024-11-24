import styled from 'styled-components'
import { theme } from '@styles/theme'

// `<dialog>` 스타일
export const ModalDialog = styled.dialog`
  position: fixed; /* 화면 고정 */
  bottom: 0; /* 하단에 배치 */
  left: 50%; /* 가로 중앙 정렬 */
  transform: translateX(-50%); /* 정렬 보정 */

  width: 100%;
  max-width: 480px;
  min-width: 350px;

  border: none;
  border-radius: 1em 1em 0 0;
  outline: none;
  padding: 2.5em 1.25em 0.75em;
  margin: auto 0 0 0;
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
`
