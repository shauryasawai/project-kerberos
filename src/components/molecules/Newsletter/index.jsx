import React from 'react';
import styled from 'styled-components';
import { Container, Content, TitleContainer } from './styles';
import { Heading2, Heading4 } from '../../shared';
import { featuredData } from '../../../data/featured';
import Swiper from '../../atoms/Newsletter/Swiper';

// Wrapper to add dark theme background
const NewsLetterWrapper = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  padding: 120px 0;
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
      radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 100px 0;
  }

  @media (max-width: 968px) {
    padding: 80px 0;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 576px) {
    padding: 50px 0;

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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;

  @media (max-width: 1400px) {
    max-width: 1200px;
    padding: 0 50px;
  }

  @media (max-width: 1200px) {
    padding: 0 40px;
  }

  @media (max-width: 968px) {
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

// Enhanced version of your existing TitleContainer
const StyledTitleContainer = styled(TitleContainer)`
  text-align: center;
  margin-bottom: 60px;
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

  @media (max-width: 1200px) {
    margin-bottom: 50px;
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
    margin-bottom: 30px;

    &::after {
      width: 50px;
      bottom: -12px;
    }
  }
`;

const StyledHeading4 = styled(Heading4)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 12px;
  position: relative;

  span {
    color: #66ff00;
    text-shadow: 0 0 10px rgba(102, 255, 0, 0.3);
    font-weight: 700;
  }

  @media (max-width: 968px) {
    font-size: 0.9rem;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
`;

const StyledHeading2 = styled(Heading2)`
  color: white;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
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
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Enhanced version of your existing Content
const StyledContent = styled(Content)`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  margin-top: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(102, 255, 0, 0.03) 0%,
      transparent 30%,
      transparent 70%,
      rgba(102, 255, 0, 0.03) 100%
    );
    border-radius: 24px;
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 32px;
    border-radius: 20px;

    &::before {
      border-radius: 20px;
    }
  }

  @media (max-width: 968px) {
    padding: 24px;
    border-radius: 16px;
    margin-top: 30px;

    &::before {
      border-radius: 16px;
    }
  }

  @media (max-width: 576px) {
    padding: 20px;
    border-radius: 12px;
    margin-top: 24px;

    &::before {
      border-radius: 12px;
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
    content: 'âš ï¸';
    font-size: 2rem;
    margin-bottom: 16px;
  }
`;

const _FeaturedStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  padding: 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 30px;
    padding: 24px 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
    margin-top: 24px;
    padding: 20px 0;
  }
`;

const _StatItem = styled.div`
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

const NewsLetterSection = () => {
  // Mock states - in real app, these would be managed properly
  const isLoading = false;
  const error = null;
  const _featuredCount = featuredData?.length || 0;

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState>Loading featured content...</LoadingState>;
    }

    if (error) {
      return <ErrorState>Failed to load featured content</ErrorState>;
    }

    if (!featuredData || featuredData.length === 0) {
      return <ErrorState>No featured content available</ErrorState>;
    }

    return <Swiper data={featuredData} />;
  };

  return (
    <NewsLetterWrapper>
      <StyledContainer id='news'>
        <StyledTitleContainer>
          <StyledHeading4 transform='uppercase'>
            Featured <span>This Week</span>
          </StyledHeading4>
          <StyledHeading2>New and Noteworthy</StyledHeading2>
        </StyledTitleContainer>

        <StyledContent>{renderContent()}</StyledContent>
      </StyledContainer>
    </NewsLetterWrapper>
  );
};

export default NewsLetterSection;
