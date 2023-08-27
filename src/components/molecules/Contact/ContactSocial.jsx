import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20rem;
  color: #39ff14; /* Fluorescent green */
  font-size: 36px; /* Increase the font size for larger icons */
`;

const SocialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem; /* Adjust the gap as needed */
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #39ff14; /* Fluorescent green */
`;

const IconText = styled.p`
  margin: 0; /* Remove default margin */
  font-size: 14px; /* Set a smaller font size for the text */
  color: green; /* Fluorescent green */
`;

const ContactSocial = () => {
  return (
    <SocialWrapper>
      <SocialItem>
        <Icon>
          <FaInstagram />
        </Icon>
        <IconText>Instagram</IconText>
      </SocialItem>
      <SocialItem>
        <Icon>
          <FaTwitter />
        </Icon>
        <IconText>Twitter</IconText>
      </SocialItem>
      <SocialItem>
        <Icon>
          <FaLinkedin />
        </Icon>
        <IconText>LinkedIn</IconText>
      </SocialItem>
    </SocialWrapper>
  );
};

export default ContactSocial;
