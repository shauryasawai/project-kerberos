import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading4, Body3, Body4 } from '../../shared/Typography';
import { Icon } from '@iconify/react';

const TeamCards = styled.div`
  perspective: 1000px;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 320px;
  }

  @media (max-width: 968px) {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 32px 24px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
  text-align: center;

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
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(102, 255, 0, 0.3);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.3),
      0 0 30px rgba(102, 255, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 968px) {
    padding: 28px 20px;
    border-radius: 20px;

    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }

  @media (max-width: 576px) {
    padding: 24px 18px;
    border-radius: 16px;

    &:hover {
      transform: translateY(-6px);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 24px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #66ff00 0%, #4dd100 100%);
  padding: 4px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, #66ff00, #4dd100, #66ff00);
    animation: rotate 3s linear infinite;
    z-index: -1;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  ${Wrapper}:hover & {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(102, 255, 0, 0.4);
  }

  @media (max-width: 968px) {
    width: 110px;
    height: 110px;
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-bottom: 18px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: #1a1a2e;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Name = styled(Heading4)`
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;

  ${Wrapper}:hover & {
    color: #66ff00;
    text-shadow: 0 0 10px rgba(102, 255, 0, 0.3);
  }

  @media (max-width: 968px) {
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 6px;
  }
`;

const Position = styled(Body3)`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  transition: all 0.3s ease;

  ${Wrapper}:hover & {
    color: rgba(102, 255, 0, 0.9);
  }

  @media (max-width: 968px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
`;

const Achievements = styled(Body4)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 20px;
  font-weight: 400;
  transition: all 0.3s ease;

  ${Wrapper}:hover & {
    color: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 968px) {
    font-size: 0.85rem;
    margin-bottom: 18px;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 16px;
    line-height: 1.4;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: auto;

  @media (max-width: 576px) {
    gap: 14px;
  }
`;

const Links = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  color: #666666;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, #66ff00 0%, #4dd100 100%);
    color: #ffffff;
    border-color: #66ff00;
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 8px 25px rgba(102, 255, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media (max-width: 968px) {
    width: 42px;
    height: 42px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: linear-gradient(135deg, #66ff00 0%, #4dd100 100%);
  color: #1a1a2e;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${Wrapper}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 576px) {
    top: 12px;
    right: 12px;
    padding: 4px 8px;
    font-size: 0.65rem;
  }
`;

const TeamCard = ({ TeamMember }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = name => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <TeamCards>
      <Wrapper>
        <Badge>Team</Badge>
        <ImageContainer>
          {!imageError && TeamMember.imagesrc ? (
            <Image src={TeamMember.imagesrc} alt={`${TeamMember.name} - ${TeamMember.Position}`} onError={handleImageError} />
          ) : (
            <Image
              as='div'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: '700',
                color: '#66ff00',
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e9e9e9 100%)',
              }}>
              {getInitials(TeamMember.name)}
            </Image>
          )}
        </ImageContainer>

        <ContentWrapper>
          <Name>{TeamMember.name}</Name>
          <Position>{TeamMember.Position}</Position>
          {TeamMember.achievements && <Achievements>{TeamMember.achievements}</Achievements>}

          <Socials>
            {TeamMember.LinkedIn && (
              <Links
                href={TeamMember.LinkedIn}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${TeamMember.name}'s LinkedIn profile`}>
                <Icon icon='mdi:linkedin' />
              </Links>
            )}
            {TeamMember.Instagram && (
              <Links
                href={TeamMember.Instagram}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${TeamMember.name}'s Instagram profile`}>
                <Icon icon='mdi:instagram' />
              </Links>
            )}
            {TeamMember.Twitter && (
              <Links
                href={TeamMember.Twitter}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`${TeamMember.name}'s Twitter profile`}>
                <Icon icon='ri:twitter-x-fill' />
              </Links>
            )}
            {TeamMember.Email && (
              <Links href={`mailto:${TeamMember.Email}`} aria-label={`Email ${TeamMember.name}`}>
                <Icon icon='mdi:email' />
              </Links>
            )}
          </Socials>
        </ContentWrapper>
      </Wrapper>
    </TeamCards>
  );
};

export default TeamCard;
