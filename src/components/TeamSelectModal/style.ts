import styled from 'styled-components'
import { theme } from '@styles/theme'

export const TeamSelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  text-align: left;
  font-size: 1em;

  width: calc(100% - 2.5em);
  
  padding: 1em;
  margin: 0 1.25em;
  border-radius: 0.5em;
  background-color: ${theme.fontColor.cwhite};

`

// `<dialog>` 스타일
export const TeamDialog = styled.dialog`
  position: fixed; /* 화면 고정 */
  bottom: 0; /* 하단에 배치 */
  left: 50%; /* 가로 중앙 정렬 */
  transform: translateX(-50%); /* 정렬 보정 */

  width: 100%;
  max-width: 480px;
  min-width: 350px;

  border: none;
  border-radius: 1em 1em 0 0;
  padding: 1.25em;
  margin: auto 0 0 0;
  text-align: center;
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
    font-size: 1.25em;
    margin-bottom: 1em;
    color: ${theme.fontColor.black};
    font-weight: ${theme.fontWeight.bold};
  }
`

// 전체 팀 선택 버튼 스타일
export const AllButton = styled.button`
  width: 100%;
  background-color: ${theme.fontColor.cwhite};
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 0;
  margin-bottom: 1em;
  color: ${theme.fontColor.black};
  font-weight: bold;
  font-size: 1em;

  &:hover {
    background-color: #bfbfbf;
  }
`

// 팀 리스트 래퍼
export const TeamList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.875em;
  margin-bottom: 1em;
`

// 팀 버튼 스타일
export const TeamButton = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 0.5em;
  padding: 0.75em 0;
  color: #fff;
  font-weight: bold;
  font-size: 1em;

  &:hover {
    opacity: 0.8;
  }
`
