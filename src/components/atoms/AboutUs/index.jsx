import Heading2 from '../../shared/Typography/Heading2';
import styled from 'styled-components';

import { AboutContent } from '../../../data/About';
import { Body2 } from '../../shared/index.js';

const AboutUsContainer = styled.div`
  padding-top: 128px;
  width: 100%;
  background-color: #f8f8f8;

  @media (max-width: 968px) {
    padding-top: 64px;
  }
`;
const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  overflow: hidden;
  width: 85%;
  margin: auto;
  @media (max-width: 968px) {
    width: 100%;
  }
`;

const AboutUsRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 128px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    gap: 24px;
    flex-direction: column;
    margin-bottom: 64px;
    text-align: center;
    align-items: flex-start;
  }
`;

const ImageContainer = styled.div`
  order: ${({ reverse }) => (reverse ? 2 : 1)};
  background-color: #fff;
  border-radius: 6px;
  @media (max-width: 968px) {
    width: 100%;
    background-color: transparent;
  }
`;
const AboutUsImage = styled.img`
  height: 400px;
  width: 400px;
  padding: 6px;
  @media (max-width: 968px) {
    width: 80%;
    height: auto;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 968px) {
    align-items: flex-start;
    margin: auto;
    width: 82%;
  }
`;
const AboutUsText = styled.div`
  width: 52%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: 24px;
  order: ${({ reverse }) => (reverse ? 1 : 2)};

  @media (max-height: 968px) {
    width: 100%;
  }
`;

const AboutUsBox1 = styled.div`
  text-align: left;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  width: 60%;

  @media (max-width: 968px) {
    width: 100%;
  }
`;

const AboutUsBox3 = styled.div`
  text-align: left;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 968px) {
    width: 100%;
  }
`;

const DomainContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 128px;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  @media (max-width: 968px) {
    gap: 24px;
    flex-direction: column;
    margin-bottom: 64px;
    text-align: center;
    align-items: flex-start;
  }
`;

const DomainImage = styled.div`
  background-color: #fff;
  border-radius: 6px;
  @media (max-width: 968px) {
    width: 100%;
    background-color: transparent;
  }
`;
const AboutUs = () => {
  return (
    <AboutUsContainer id='about'>
      <AboutUsSection>
        {AboutContent.map(item => (
          <AboutUsRow key={item.id}>
            <AboutUsBox1>
              <TextContainer>
                <AboutUsText reverse={item.id % 2 === 0}>
                  <Heading2 textAlign='left'>{item.heading}</Heading2>
                  <Body2 style={{ color: '#6C757D' }}>{item.content}</Body2>
                </AboutUsText>
              </TextContainer>
            </AboutUsBox1>
            <ImageContainer reverse={!(item.id % 2 === 0)}>
              <AboutUsImage src={item.image} alt={item.heading} />
            </ImageContainer>
          </AboutUsRow>
        ))}

        <DomainContainer>
          <AboutUsBox3>
            <TextContainer>
              <AboutUsText>
                <Heading2 textAlign='left'>Learn by Practice </Heading2>
                <Body2 style={{ color: '#6C757D' }}>
                  AnC through its main divisions in Consulting and Data analytics encourages students to follow a
                  learn-by-practice regimen, and for the same, the club supports and organises a wide range of initiatives and
                  events like ideathons throughout the year.
                </Body2>
              </AboutUsText>
            </TextContainer>
          </AboutUsBox3>
          <DomainImage>
            <AboutUsImage
              src='https://res.cloudinary.com/dafdencvh/image/upload/v1693048472/kerbero%20project/image_3_qyip8s.png '
              alt='Team Photo'
            />
          </DomainImage>
        </DomainContainer>
      </AboutUsSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
