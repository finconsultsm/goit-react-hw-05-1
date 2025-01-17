import styled from 'styled-components';

export const Title = styled.h4`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const LinkList = styled.ul`
  padding-left: ${p => p.theme.space[5]}px;
  list-style: inside;
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
