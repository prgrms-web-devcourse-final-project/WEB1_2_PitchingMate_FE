import styled, { css } from 'styled-components'
import { theme } from '@styles/theme'

export const ButtonWrapper = styled.button<{ $isSelected: boolean }>`
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 9999px;
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.semi};
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  ${(props) =>
    props.$isSelected
      ? css`
          background-color: ${theme.teams.kbo};
          color: ${theme.fontColor.white};
          &:hover {
            background-color: ${theme.teams.kbo}D9;
          }
        `
      : css`
          background-color: ${theme.fontColor.cwhite};
          color: ${theme.fontColor.black};
          &:hover {
            background-color: #d6d6d6;
          }
        `};

  ${(props) =>
    props.disabled &&
    css`
      background-color: #d9d9d9;
      color: ${theme.fontColor.black}80;
      cursor: not-allowed;
    `};
`
