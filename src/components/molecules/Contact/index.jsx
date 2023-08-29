import { contactData } from '../../../data/contact';
import { MapContainer } from '../../atoms/Contact/Map';
import { SocialItem } from '../../atoms/Contact/SocialItem';
import { Body2, Heading2 } from '../../shared';
import { Container, Content, SocialItemContainer } from './styles';

const ContactSection = () => {
  return (
    <Container id='contact'>
      <Heading2>{contactData.title}</Heading2>
      <Body2>{contactData.description}</Body2>

      <Content>
        <SocialItemContainer>
          {Object.entries(contactData.socials).map(([key, value]) => (
            <SocialItem key={key} {...value} />
          ))}
        </SocialItemContainer>
        <MapContainer />
      </Content>
    </Container>
  );
};

export default ContactSection;
