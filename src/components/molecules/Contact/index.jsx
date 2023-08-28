import { Heading1, Heading3 } from '../../shared';
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactSocial from './ContactSocial';
import styled from 'styled-components';
import Map from './Map';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
`;

const LeftSide = styled.div`
  flex: 7;
`;

const RightSide = styled.div`
  flex: 3;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  margin-top: 0.5rem; /* Adjust the margin to make it closer */
`;

const SocialBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 2px solid black;
  padding: 1rem;
`;

const LargerContactSocial = styled(ContactSocial)`
  font-size: 36px;
`;

const Button = styled.button`
  border: 2px solid #39ff14; /* Fluorescent green */
  color: #39ff14; /* Fluorescent green */
  background-color: transparent;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;
const ResponsiveStyles = styled.div`
  @media screen and (max-width: 768px) {
    ${ContentWrapper} {
      flex-direction: column;
      align-items: flex-start; /* Align items to the left */
    }

    ${LeftSide}, ${RightSide} {
      width: 100%;
      text-align: left; /* Align text to the left */
    }

    ${RightSide} {
      margin-top: 1rem;
    }

    ${SocialWrapper} {
      display: none;
    }
    ${TitleWrapper} {
      display: none;
    }
  }
`;

const ContactSection = () => {
  return (
    <ResponsiveStyles>
      <Container>
        <div className='container'>
          <TitleWrapper>
            <Heading3 color='black'>Still have questions?</Heading3>
            <p color='gray'>Feel free to reach out to us for more information.</p>
            <Button type='button'>Contact</Button>
          </TitleWrapper>
        </div>
        <ContactSectionWrapper>
          <ContentWrapper>
            <LeftSide>
              <Heading1>Get in Touch</Heading1>
            </LeftSide>
            <RightSide>
              <ContactInfoItem title='Address' text='Address text' />
              <ContactInfoItem icon={<MdLocalPhone />} title='Phone' text='Phone text' />
              <ContactInfoItem icon={<MdEmail />} title='Email' text='Email text' />
            </RightSide>
          </ContentWrapper>
        </ContactSectionWrapper>
        <SocialWrapper>
          <SocialBox>
            <LargerContactSocial />
          </SocialBox>
        </SocialWrapper>
        <div style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Map />
        </div>
      </Container>
    </ResponsiveStyles>
  );
};

export default ContactSection;
