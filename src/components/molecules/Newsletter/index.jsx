import { Container, Content, TitleContainer } from './styles';
import { Heading2, Heading4 } from '../../shared';
import { featuredData } from '../../../data/featured';
import Swiper from '../../atoms/newsletter/Swiper';

const NewsLetterSection = () => {
  return (
    <Container>
      <TitleContainer>
        <Heading4 transform='uppercase'>
          Featured <span>This Week</span>
        </Heading4>
        <Heading2>New and Noteworthy</Heading2>
      </TitleContainer>
      <Content>
        <Swiper data={featuredData} />
      </Content>
    </Container>
  );
};

export default NewsLetterSection;
