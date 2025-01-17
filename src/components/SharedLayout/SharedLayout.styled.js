import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding-left: 32px;
  padding-right: 32px;
  background-color: ${p => p.theme.colors.dark};

  box-shadow: 0 0.1rem 0.15rem rgb(40 36 89 / 30%),
    0 0.25rem 0.4rem rgb(40 36 89 / 25%);
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding-top: 16px;
  padding-bottom: 16px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  :not(:last-child) {
    margin-right: 16px;
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus:not(.active) {
    color: ${p => p.theme.colors.accentLight};
  }
`;
