import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Body3 } from '../../shared';

const SocialWrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
  color: #245f02;
  font-size: 36px;
  border-radius: 10px;
  @media (max-width: 768px) {
    gap: 8%;
    font-size: 20px;
  }
`;

const SocialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.a`
  display: flex;
  align-items: center;
  color: #245f02;
  cursor: pointer;
`;

const IconText = styled(Body3)`
  margin: 0;
  color: green;
`;

const ContactSocial = () => {
  return (
    <SocialWrapper>
      <SocialItem>
        <Icon href='/'>
          <FaInstagram />
        </Icon>
        <IconText>Instagram</IconText>
      </SocialItem>
      <SocialItem>
        <Icon href='/'>
          <FaTwitter />
        </Icon>
        <IconText>Twitter</IconText>
      </SocialItem>
      <SocialItem>
        <Icon href='/'>
          <FaLinkedin />
        </Icon>
        <IconText>LinkedIn</IconText>
      </SocialItem>
    </SocialWrapper>
  );
};

export default ContactSocial;
