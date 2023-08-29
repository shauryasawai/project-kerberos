import { Icon } from '@iconify/react';
import { SocialItemContainer, SocialItemDescription, SocialItemText, SocialLink } from './styles';

export const SocialItem = ({ icon, link, text, description }) => {
  return (
    <SocialItemContainer>
      <Icon icon={icon} width={24} height={24} />
      <SocialItemText>{text}</SocialItemText>
      <SocialItemDescription>{description}</SocialItemDescription>
      <SocialLink href={link}>{link}</SocialLink>
    </SocialItemContainer>
  );
};
