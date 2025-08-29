import React, { useState } from 'react';
import Body2 from '../../shared/Typography/Body2.jsx';
import styled from 'styled-components';
import { Heading4 } from '../../shared/index.js';

const ResourceContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  overflow: hidden;
  line-height: 1;
  height: 120px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;

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
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    border-radius: 16px;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(102, 255, 0, 0.3);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(102, 255, 0, 0.15);

    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 780px) {
    width: 90%;
    flex-direction: row;
    gap: 24px;
    height: 280px;
    padding: 24px;
    border-radius: 20px;

    &:hover {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 780px) {
    width: 100%;
    gap: 12px;
    height: 140px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    height: 120px;
    padding: 14px;
    border-radius: 12px;
  }
`;

const ResourceImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(135deg, #66ff00 0%, #4dd100 100%);
  padding: 2px;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #66ff00, #4dd100, #66ff00);
    animation: rotate 3s linear infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${ResourceContainer}:hover & {
    transform: scale(1.05);

    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 780px) {
    width: 256px;
    height: 232px;
    border-radius: 16px;

    &::before {
      border-radius: 16px;
    }
  }

  @media (max-width: 780px) {
    width: 108px;
    height: 108px;
  }

  @media (max-width: 480px) {
    width: 92px;
    height: 92px;
    border-radius: 10px;

    &::before {
      border-radius: 10px;
    }
  }
`;

const ResourceImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  object-fit: cover;
  border-radius: 10px;
  background: #1a1a2e;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${ResourceContainer}:hover & {
    transform: scale(1.02);
  }

  @media (min-width: 780px) {
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;

const ResourceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: auto 0;
  flex: 1;
  min-width: 0;

  @media (min-width: 780px) {
    gap: 20px;
    justify-content: center;
  }

  @media (max-width: 780px) {
    gap: 8px;
  }

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin: 0;
  line-height: 1.2;
  transition: all 0.3s ease;

  .category {
    color: #66ff00;
    text-shadow: 0 1px 2px rgba(102, 255, 0, 0.2);
  }

  .divider {
    color: rgba(255, 255, 255, 0.6);
    margin: 0 4px;
  }

  .subcategory {
    color: rgba(255, 255, 255, 0.8);
  }

  ${ResourceContainer}:hover & {
    .category {
      color: #4dd100;
      text-shadow: 0 2px 4px rgba(102, 255, 0, 0.4);
    }

    .subcategory {
      color: rgba(255, 255, 255, 0.95);
    }
  }

  @media (min-width: 980px) {
    font-size: 0.9rem;
  }

  @media (max-width: 780px) {
    font-size: 0.7rem;
    letter-spacing: 0.6px;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    letter-spacing: 0.4px;
  }
`;

const StyledHeading4 = styled(Heading4)`
  cursor: pointer;
  margin: 0;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.3;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #66ff00;
    text-shadow: 0 0 10px rgba(102, 255, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 780px) {
    font-size: 1.5rem;
    -webkit-line-clamp: 3;
  }

  @media (max-width: 780px) {
    font-size: 1.1rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    -webkit-line-clamp: 2;
  }
`;

const StyledBody2 = styled(Body2)`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  transition: all 0.3s ease;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;

  ${ResourceContainer}:hover & {
    color: rgba(255, 255, 255, 0.9);
  }

  @media (min-width: 780px) {
    font-size: 1rem;
    -webkit-line-clamp: 4;
  }

  @media (max-width: 780px) {
    font-size: 0.85rem;
    line-height: 1.4;
    -webkit-line-clamp: 2;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.3;
    -webkit-line-clamp: 2;
  }
`;

const ExternalLinkIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background: rgba(102, 255, 0, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(-10px) scale(0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '↗';
    color: #1a1a2e;
    font-weight: 700;
    font-size: 0.8rem;
  }

  ${ResourceContainer}:hover & {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  @media (max-width: 780px) {
    width: 20px;
    height: 20px;
    top: 12px;
    right: 12px;

    &::before {
      font-size: 0.7rem;
    }
  }
`;

const handleClick = link => {
  return e => {
    e.preventDefault();
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };
};

const ResourceCard = ({ title, subtitle1, subtitle2, image, alt, description, link }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = text => {
    if (!text) return 'RC';
    return text
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <ResourceContainer onClick={handleClick(link)}>
      <ExternalLinkIcon />
      <ResourceImageContainer>
        {!imageError && image ? (
          <ResourceImage src={image} alt={alt || title || 'Resource image'} onError={handleImageError} />
        ) : (
          <ResourceImage
            as='div'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#66ff00',
              background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            }}>
            {getInitials(title)}
          </ResourceImage>
        )}
      </ResourceImageContainer>
      <ResourceContent>
        <Subtitle>
          <span className='category'>{subtitle1}</span>
          <span className='divider'>/</span>
          <span className='subcategory'>{subtitle2}</span>
        </Subtitle>
        <StyledHeading4 onClick={handleClick(link)}>{title}</StyledHeading4>
        <StyledBody2>{description}</StyledBody2>
      </ResourceContent>
    </ResourceContainer>
  );
};

export default ResourceCard;
