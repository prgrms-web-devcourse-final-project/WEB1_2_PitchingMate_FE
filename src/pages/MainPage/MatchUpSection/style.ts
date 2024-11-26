import styled from 'styled-components';

export const MatchUpContainer = styled.div<{ homeColor: string; awayColor: string }>`
  padding: 1.25em;
  background: ${({ homeColor, awayColor }) =>
    `linear-gradient(135deg, ${homeColor} 0%, ${awayColor} 100%)`};
  color: white; /* 텍스트가 잘 보이도록 설정 */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const GameDatetimeLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  color: white; /* 배경과 대비되는 색상 */
`;

export const TeamVersus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 18px;
  font-weight: bold;

  & > div {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    background-color: white; /* 로고 배경을 흰색으로 설정 */
  }

  & > div > svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const LocationWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  font-size: 14px;
`;

export const UpdateInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white; /* 텍스트 색상 */
`;

export const Weather = styled.div`
  font-size: 14px;
  color: white;
`;
