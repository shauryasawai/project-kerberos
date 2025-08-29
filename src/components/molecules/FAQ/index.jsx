import React, { useState } from 'react';
import styled from 'styled-components';
import faqData from '../../../data/faq';
import FaqItem from '../../atoms/FAQ';
import { Button } from '../../shared';
import { FaqContainer, FaqHeading, Caption, FaqLayout, Caption2, Caption3 } from './style';

// Wrapper for dark theme background
const FaqWrapper = styled.section`
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
    background: radial-gradient(circle at 30% 20%, rgba(102, 255, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(102, 255, 0, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
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
  }
`;

// Enhanced version of your existing FaqContainer
const StyledFaqContainer = styled(FaqContainer)`
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
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #66ff00, #4dd100);
    border-radius: 2px;
  }

  @media (max-width: 968px) {
    margin-bottom: 35px;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -12px;
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 30px;

    &::after {
      width: 50px;
      bottom: -10px;
    }
  }
`;

const StyledFaqHeading = styled(FaqHeading)`
  color: white;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 16px 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
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
    margin-bottom: 14px;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const StyledCaption = styled(Caption)`
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

const StyledFaqLayout = styled(FaqLayout)`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 40px auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 24px;

  /* Ensure all text inside FAQ items is visible */
  color: white;

  /* Style FAQ questions and answers */
  * {
    color: white !important;
  }

  /* Style FAQ question headers */
  button,
  .faq-question {
    color: white !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  /* Style FAQ answer content */
  .faq-answer,
  .faq-content,
  p,
  div {
    color: rgba(255, 255, 255, 0.9) !important;
    background: transparent !important;
  }

  /* Style any links in FAQ content */
  a {
    color: #66ff00 !important;

    &:hover {
      color: #4dd100 !important;
    }
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
      rgba(102, 255, 0, 0.02) 0%,
      transparent 30%,
      transparent 70%,
      rgba(102, 255, 0, 0.02) 100%
    );
    border-radius: 20px;
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 20px;
    border-radius: 18px;
    margin-bottom: 35px;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 968px) {
    padding: 18px;
    border-radius: 16px;
    margin-bottom: 30px;
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 576px) {
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 24px;
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ContactSection = styled.div`
  text-align: center;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 32px 0;
    margin-top: 16px;
  }

  @media (max-width: 576px) {
    padding: 24px 0;
    margin-top: 12px;
  }
`;

const StyledCaption2 = styled(Caption2)`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;

  @media (max-width: 968px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

const StyledCaption3 = styled(Caption3)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0 0 30px 0;

  @media (max-width: 968px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 24px;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #66ff00 0%, #4dd100 100%);
  color: #1a1a2e;
  border: none;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 8px 32px rgba(102, 255, 0, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(102, 255, 0, 0.5);
    background: linear-gradient(135deg, #4dd100 0%, #66ff00 100%);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    padding: 10px 24px;
    font-size: 0.9rem;
    letter-spacing: 0.6px;
  }
`;

const FaqStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 32px;
    padding: 24px 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 24px;
    padding: 20px 0;
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

const FaqComponent = () => {
  const [isLoading, _setIsLoading] = useState(false);
  const faqs = Object.values(faqData);
  const email = 'anc.nitr@gmail.com';
  const subject = 'Inquiry from Website';

  const handleClick = () => {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  if (isLoading) {
    return (
      <FaqWrapper>
        <StyledFaqContainer id='faqs'>
          <LoadingState>Loading FAQs...</LoadingState>
        </StyledFaqContainer>
      </FaqWrapper>
    );
  }

  return (
    <FaqWrapper>
      <StyledFaqContainer id='faqs'>
        <HeaderSection>
          <StyledFaqHeading>FAQs</StyledFaqHeading>
          <StyledCaption>Find answers to community asked questions about the club and its service</StyledCaption>
        </HeaderSection>

        <StyledFaqLayout>
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </StyledFaqLayout>

        <ContactSection>
          <StyledCaption2>Still Have Questions?</StyledCaption2>
          <StyledCaption3>Feel free to reach out to us for more information.</StyledCaption3>
          <StyledButton text={'Contact Us'} variant={'outline'} onClick={handleClick} />
        </ContactSection>

        <FaqStats>
          <StatItem>
            <span className='number'>{faqs.length}+</span>
            <span className='label'>FAQs Answered</span>
          </StatItem>
          <StatItem>
            <span className='number'>24/7</span>
            <span className='label'>Support</span>
          </StatItem>
          <StatItem>
            <span className='number'>Quick</span>
            <span className='label'>Response</span>
          </StatItem>
        </FaqStats>
      </StyledFaqContainer>
    </FaqWrapper>
  );
};

export default FaqComponent;
