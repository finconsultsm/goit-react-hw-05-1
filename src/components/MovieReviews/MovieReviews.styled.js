import styled from 'styled-components';

export const ReviewsList = styled.ul`
  list-style: unset;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px; ;
`;

export const ReviewsItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
