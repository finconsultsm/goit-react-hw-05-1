import styled from 'styled-components';

export const TrendingContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: calc(-1 * 16px);
  margin-left: calc(-1 * 16px);
`;

export const TrendingItem = styled.li`
  margin-top: 32px;
  margin-left: 16px;
  flex-basis: calc(100% / 5 - 16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
