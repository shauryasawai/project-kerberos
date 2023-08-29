import { styled } from 'styled-components';
import { ButtonMeta } from '../Typography';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.button`
  background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'outline':
        return 'transparent';
      default:
        return props.theme.colors.primary;
    }
  }};

  border: ${props => {
    switch (props.variant) {
      case 'outline':
        return `2px solid ${props.theme.colors.primary}`;
      default:
        return 'none';
    }
  }};

  color: ${props => {
    switch (props.variant) {
      case 'primary':
        return props.theme.colors.secondary;
      case 'secondary':
        return props.theme.colors.primary;
      case 'outline':
        return props.theme.colors.primary;
      default:
        return props.theme.colors.secondary;
    }
  }};

  border-radius: 0.25rem;
  padding: 16px 24px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  &:focus {
    outline: none;
    box-shadow: ${props => {
      switch (props.variant) {
        case 'primary':
          return props.theme.boxShadow.primary;
        case 'secondary':
          return props.theme.boxShadow.secondary;
        case 'outline':
          return props.theme.boxShadow.outline;
        default:
          return props.theme.boxShadow.primary;
      }
    }};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.secondaryLighter};
    color: ${props => props.theme.colors.secondaryLight};
    cursor: not-allowed;
  }

  ${props => props.css}

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0.75rem 1.25rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 1.25rem 1.75rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 1.5rem 2rem;
  }
`;

const Button = ({ children, link, variant, text, ...buttonProps }) => {
  return link ? (
    <Link href={link}>
      <ButtonContainer variant={variant} {...buttonProps}>
        <ButtonMeta>{text}</ButtonMeta>
        {children}
      </ButtonContainer>
    </Link>
  ) : (
    <ButtonContainer variant={variant} {...buttonProps}>
      <ButtonMeta>{text}</ButtonMeta>
      {children}
    </ButtonContainer>
  );
};

export default Button;
