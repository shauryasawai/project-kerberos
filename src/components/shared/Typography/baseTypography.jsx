import { css } from 'styled-components';

export const baseTypography = css`
  font-weight: ${props => (props.semibold ? '600' : '400')};
  font-size: ${props => (props.small ? '0.75rem' : '1rem')};
  color: ${props => (props.secondary ? props.theme.colors.secondary : props.theme.colors.primary)};
  margin: ${props => (props.margin ? props.margin : '0')};

  &:hover {
    color: ${props =>
      props.secondary ? props.theme.colors.secondaryHover || 'inherit' : props.theme.colors.primaryHover || 'inherit'};
  }

  text-transform: ${props => {
    switch (props.transform) {
      case 'uppercase':
        return 'uppercase';
      case 'lowercase':
        return 'lowercase';
      case 'capitalize':
        return 'capitalize';
      default:
        return 'none';
    }
  }};

  text-align: ${props => (props.textAlign ? props.textAlign : 'left')};

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: ${props => (props.small ? '0.875rem' : '1.125rem')};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => (props.small ? '1rem' : '1.25rem')};
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: ${props => (props.small ? '1.125rem' : '1.5rem')};
  }
`;
