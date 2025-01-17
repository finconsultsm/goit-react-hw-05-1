import styled from 'styled-components';
import { Link as LinkRRD } from 'react-router-dom';

export const Link = styled(LinkRRD)`
  padding: ${p => p.theme.space[2]}px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100px;

  border-radius: ${p => p.theme.radii.normal};

  text-decoration: none;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.dark};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
