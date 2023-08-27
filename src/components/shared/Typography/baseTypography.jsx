import { css } from 'styled-components';

export const baseTypography = css`
  font-weight: ${props => (props.semibold ? '700' : '500')};
  color: ${props => (props.primary ? props.theme.colors.primary : props.theme.colors.secondary)};
  margin: ${props => (props.margin ? props.margin : '0')};
  font-family: 'Roboto', sans-serif;


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
`;
