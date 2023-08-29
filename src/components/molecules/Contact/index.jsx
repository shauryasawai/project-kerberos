import { Button, ButtonMeta, Heading2, Heading4 } from '../../shared';
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactSocial from './ContactSocial';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
  gap: 24px;
`;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  margin-top: 128px;
  width: 100%;
  @media (max-width: 950px) {
    margin-top: 64px;
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

const LeftSide = styled.a`
  width: max-content;
  border-radius: 10px;
  border: 4px solid black;
  img {
    height: 450px;
    aspect-ratio: 4/3;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    margin-top: 32px;
    img {
      height: 200px;
    }
  }
  @media (max-width: 420px) {
    img {
      height: 180px;
    }
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6rem;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  margin-top: 0.5rem;
`;

const SocialBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid black;
  border-radius: 10px;
  padding: 1rem;
  width: 70%;
`;

const LargerContactSocial = styled(ContactSocial)`
  font-size: 36px;
`;

const ResponsiveStyles = styled.div`
  margin: 4em;
`;

const ContactSection = () => {
  return (
    <ResponsiveStyles>
      <TitleWrapper>
        <Heading2 color='black'>Still have questions?</Heading2>
        <Heading4 style={{ color: '#484848', paddingTop: '24px' }}>Feel free to reach out to us for more information.</Heading4>
        <Button
          style={{
            background: 'transparent',
            border: '2px solid #39ff14',
            padding: '16px 24px',
            color: '#50c300',
            marginTop: '48px',
          }}>
          <ButtonMeta>Contact</ButtonMeta>
        </Button>
      </TitleWrapper>
      <ContactSectionWrapper>
        <LeftSide href='https://goo.gl/maps/8kwRDWcG228GXnGc6'>
          <img src='https://res.cloudinary.com/dhnkuonev/image/upload/v1693235517/map_pjjqfk.jpg' alt='map' />
        </LeftSide>
        <RightSide>
          <ContactInfoItem title='Address' text='Address text' />
          <ContactInfoItem icon={<MdLocalPhone />} title='Phone' text='Phone text' />
          <ContactInfoItem icon={<MdEmail />} title='Email' text='Email text' />
        </RightSide>
      </ContactSectionWrapper>
      <SocialWrapper>
        <SocialBox>
          <LargerContactSocial />
        </SocialBox>
      </SocialWrapper>
    </ResponsiveStyles>
  );
};

export default ContactSection;
