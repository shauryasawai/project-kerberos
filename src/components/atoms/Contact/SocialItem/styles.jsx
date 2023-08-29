import { styled } from 'styled-components';
import { Heading4, Heading5 } from '../../../shared';

export const SocialItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const SocialItemText = styled(Heading4)``;

export const SocialItemDescription = styled(Heading5)``;

export const SocialLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: underline;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
