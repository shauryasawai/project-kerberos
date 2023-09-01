import styled from 'styled-components';
import Heading2 from '../../shared/Typography/Heading2.jsx';
import HeroData from '../../../data/HeroData.js';
import { Body3, Button, Heading1, Heading3 } from '../../shared/index.js';
import React from 'react';

const HeroSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${HeroData.backgroundImage});
  object-fit: contain;
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
  @media (min-width: 768px) {
    align-items: center;
  }
`;
const MainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  @media (min-width: 768px) {
    width: 72%;
    gap: 20px;
    margin: auto;
    align-items: center;
  }
`;

const SubContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  @media (min-width: 768px) {
    gap: 64px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

const UpperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  margin-top: 5%;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const LowerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  @media (min-width: 768px) {
    align-items: center;
    gap: 24px;
  }
`;
const Head1 = styled(Heading1)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #fff;
  text-align: left;
  font-size: 40px;
  @media (min-width: 768px) {
    text-align: center;
    font-size: 56px;
    line-height: 72px;
  }
`;

const Head2 = styled(Heading2)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #fff;
  text-align: left;
  font-size: 40px;
  line-height: 60px;
  @media (min-width: 768px) {
    font-size: 48px;
    line-height: 56px;
    text-align: center;
  }
`;
const Head3 = styled(Heading3)`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #fff;
  text-align: left;
  @media (min-width: 768px) {
    text-align: center;
  }
`;
const Body = styled(Body3)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #fff;
  text-align: left;
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 2px;
  @media (max-width: 768px) {
    margin: 6px 2px;
    width: 5px;
    height: 5px;
  }
`;
export default function HeroSection() {
  return (
    <HeroSectionContainer>
      <MainContainer>
        <UpperContainer>
          <Head2>{HeroData.heading1}</Head2>
          <Head1>
            <span style={{ color: '#52CD00', lineHeight: '60px' }}>{HeroData.heading2}</span>
            {HeroData.heading3}
            <span style={{ color: '#52CD00', lineHeight: '60px' }}>{HeroData.heading4}</span>
            <span style={{ lineHeight: '60px' }}>{HeroData.heading5}</span>
          </Head1>
        </UpperContainer>
        <LowerContainer>
          <Body>
            {HeroData.subtitle1}
            <span style={{ color: '#52CD00' }}>{HeroData.subtitle2}</span>
            {HeroData.subtitle3}
            <span style={{ color: '#52CD00' }}>{HeroData.subtitle4}</span>
            {HeroData.subtitle5}
          </Body>
          <SubContainer>
            {HeroData.sub.map((item, index) => (
              <React.Fragment key={item.id}>
                <Head3 semibold>{item.text}</Head3>
                {index !== HeroData.sub.length - 1 && <Circle />}
              </React.Fragment>
            ))}
          </SubContainer>
          <Button variant='primary' text={HeroData.buttonText} style={{ fontSize: '24px', padding: '16px 24px' }} />
        </LowerContainer>
      </MainContainer>
    </HeroSectionContainer>
  );
}
