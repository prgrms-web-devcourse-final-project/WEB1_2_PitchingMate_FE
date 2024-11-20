import styled from 'styled-components'

export const HeaderBox = styled.header`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.fontColor.white};
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  position: sticky;
  top: 0;
  left: 0;
`;

export const LogoWrap = styled.h1`
  font-size: 1em;
`;

export const AlarmWrap = styled.p`
  
`