import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625em; /* 버튼 간격 */
  align-items: center;
  justify-content: flex-start;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  gap: 0.625em;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex-shrink: 0;
  }
`;
