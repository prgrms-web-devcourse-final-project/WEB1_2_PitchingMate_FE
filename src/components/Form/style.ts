import styled from 'styled-components';
import { theme } from '@styles/theme';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  min-width: 350px;
  padding: 1em 1.25em;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 1em;
  font-size: ${theme.fontSize.large};
  border: 2px solid ${theme.border};
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border: 2px solid ${theme.teams.kbo};
  }
`;
