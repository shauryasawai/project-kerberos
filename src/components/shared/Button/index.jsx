import { styled } from 'styled-components';
import { ButtonMeta } from '../Typography';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.button`
  color: ${({ color, variant } = {}) => color || (variant !== 'primary' ? '#fff' : '#000')};
  background-color: ${({ backgroundColor, variant } = {}) => backgroundColor || (variant !== 'primary' ? '#000' : '#fff')};
  border: ${({ variant } = {}) => (variant === 'primary' ? '1px solid #000' : '1px solid #fff')};
  padding: ${({ padding } = {}) => padding || '15px 25px'};
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.9);
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
