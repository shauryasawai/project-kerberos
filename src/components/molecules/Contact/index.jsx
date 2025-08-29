import React, { useState } from 'react';
import styled from 'styled-components';
import { contactData } from '../../../data/contact';
import { MapContainer } from '../../atoms/Contact/Map';
import { SocialItem } from '../../atoms/Contact/SocialItem';
import { Body2, Heading2 } from '../../shared';
import { Container, Content, SocialItemContainer } from './styles';

// Wrapper for dark theme background
const ContactWrapper = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 25% 25%, rgba(102, 255, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(102, 255, 0, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 70px 0;
  }

  @media (max-width: 968px) {
    padding: 60px 0;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }

  @media (max-width: 768px) {
    padding: 50px 0;
  }

  @media (max-width: 576px) {
    padding: 40px 0;

    &::before {
      background: radial-gradient(circle at 50% 30%, rgba(102, 255, 0, 0.06) 0%, transparent 40%),
        radial-gradient(circle at 50% 70%, rgba(102, 255, 0, 0.04) 0%, transparent 40%);
    }
  }
`;

// Enhanced version of your existing Container
const StyledContainer = styled(Container)`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1200px) {
    max-width: 900px;
    padding: 0 35px;
  }

  @media (max-width: 1000px) {
    max-width: 800px;
    padding: 0 32px;
  }

  @media (max-width: 968px) {
    max-width: 100%;
    padding: 0 28px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #66ff00, #4dd100);
    border-radius: 2px;
  }

  @media (max-width: 968px) {
    margin-bottom: 40px;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -15px;
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 32px;

    &::after {
      width: 50px;
      bottom: -12px;
    }
  }
`;

const StyledHeading2 = styled(Heading2)`
  color: white;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 20px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(102, 255, 0, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }

  @media (max-width: 1200px) {
    font-size: 2.8rem;
  }

  @media (max-width: 968px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const StyledBody2 = styled(Body2)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  letter-spacing: 0.2px;

  @media (max-width: 1200px) {
    font-size: 1.15rem;
    max-width: 550px;
  }

  @media (max-width: 968px) {
    font-size: 1.1rem;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
    max-width: 450px;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    max-width: 100%;
    padding: 0 10px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

// Enhanced version of your existing Content
const StyledContent = styled(Content)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 30px;

  @media (min-width: 968px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }

  @media (max-width: 768px) {
    gap: 32px;
    margin-top: 24px;
  }

  @media (max-width: 576px) {
    gap: 28px;
    margin-top: 20px;
  }
`;

// Enhanced version of your existing SocialItemContainer
const StyledSocialItemContainer = styled(SocialItemContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 32px;
  flex: 1;

  /* Ensure all text inside is white */
  color: white;

  /* Style all headings and text inside */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white !important;
  }

  p,
  span,
  div,
  a {
    color: rgba(255, 255, 255, 0.9) !important;
  }

  /* Style links specifically */
  a {
    color: #66ff00 !important;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4dd100 !important;
      text-shadow: 0 0 8px rgba(102, 255, 0, 0.4);
    }
  }

  /* Style icons */
  svg,
  i,
  .icon {
    color: #66ff00 !important;
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(102, 255, 0, 0.05) 0%,
      transparent 30%,
      transparent 70%,
      rgba(102, 255, 0, 0.05) 100%
    );
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 28px;
    border-radius: 18px;
    gap: 18px;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 968px) {
    padding: 24px;
    border-radius: 16px;
    gap: 16px;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 576px) {
    padding: 20px;
    border-radius: 12px;
    gap: 14px;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const MapContainerWrapper = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 18px;
    border-radius: 18px;
  }

  @media (max-width: 968px) {
    padding: 16px;
    border-radius: 16px;
  }

  @media (max-width: 576px) {
    padding: 14px;
    border-radius: 12px;
  }
`;

const ContactStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 40px;
    padding: 24px 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 32px;
    padding: 20px 0;
    text-align: center;
  }
`;

const StatItem = styled.div`
  text-align: center;

  .number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: #66ff00;
    margin-bottom: 4px;
    text-shadow: 0 2px 4px rgba(102, 255, 0, 0.3);
  }

  .label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    .number {
      font-size: 1.8rem;
    }

    .label {
      font-size: 0.8rem;
    }
  }
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid rgba(102, 255, 0, 0.3);
    border-top: 2px solid #66ff00;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 12px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ErrorState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: #ff6b6b;
  font-size: 1.1rem;
  text-align: center;

  &::before {
    content: '⚠️';
    font-size: 2rem;
    margin-bottom: 16px;
  }
`;

const ContactSection = () => {
  const [isLoading, _setIsLoading] = useState(false);
  const [error, _setError] = useState(null);

  if (isLoading) {
    return (
      <ContactWrapper>
        <StyledContainer id='contact'>
          <LoadingState>Loading contact information...</LoadingState>
        </StyledContainer>
      </ContactWrapper>
    );
  }

  if (error) {
    return (
      <ContactWrapper>
        <StyledContainer id='contact'>
          <ErrorState>Failed to load contact information</ErrorState>
        </StyledContainer>
      </ContactWrapper>
    );
  }

  if (!contactData) {
    return (
      <ContactWrapper>
        <StyledContainer id='contact'>
          <ErrorState>No contact information available</ErrorState>
        </StyledContainer>
      </ContactWrapper>
    );
  }

  const socialCount = Object.keys(contactData.socials || {}).length;

  return (
    <ContactWrapper>
      <StyledContainer id='contact'>
        <HeaderSection>
          <StyledHeading2>{contactData.title}</StyledHeading2>
          <StyledBody2>{contactData.description}</StyledBody2>
        </HeaderSection>

        <StyledContent>
          <StyledSocialItemContainer>
            {Object.entries(contactData.socials).map(([key, value]) => (
              <SocialItem key={key} {...value} />
            ))}
          </StyledSocialItemContainer>

          <MapContainerWrapper>
            <MapContainer />
          </MapContainerWrapper>
        </StyledContent>

        <ContactStats>
          <StatItem>
            <span className='number'>{socialCount}</span>
            <span className='label'>Contact Methods</span>
          </StatItem>
          <StatItem>
            <span className='number'>24/7</span>
            <span className='label'>Available</span>
          </StatItem>
          <StatItem>
            <span className='number'>Quick</span>
            <span className='label'>Response</span>
          </StatItem>
        </ContactStats>
      </StyledContainer>
    </ContactWrapper>
  );
};

export default ContactSection;
