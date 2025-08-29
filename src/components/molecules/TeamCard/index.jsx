import styled from 'styled-components';
import { MeetTheTeam, Headline } from '../../molecules/TeamCard/styles';
import { Heading4, Heading1 } from '../../shared/Typography';
import TeamCard from '../../atoms/TeamCard';
import { TeamData } from '../../../data/TeamData';
import { TeamCards } from '../../atoms/TeamCard/styles';

// Wrapper to add the background and modern styling while using your existing structure
const TeamSectionWrapper = styled.section`
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
    background: radial-gradient(circle at 15% 30%, rgba(102, 255, 0, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 85% 70%, rgba(102, 255, 0, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
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
      background: radial-gradient(circle at 50% 20%, rgba(102, 255, 0, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 50% 80%, rgba(102, 255, 0, 0.06) 0%, transparent 40%);
    }
  }
`;

// Enhanced version of your existing MeetTheTeam component
const StyledMeetTheTeam = styled(MeetTheTeam)`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  background: transparent;
`;

// Enhanced version of your existing Headline component
const StyledHeadline = styled(Headline)`
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
    &::after {
      width: 60px;
      height: 3px;
      bottom: -12px;
    }
  }

  @media (max-width: 576px) {
    &::after {
      width: 50px;
      bottom: -10px;
    }
  }
`;

const MainTitle = styled(Heading1)`
  color: white;
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.1;
  position: relative;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(102, 255, 0, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }

  @media (max-width: 1200px) {
    font-size: 3.2rem;
  }

  @media (max-width: 968px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2.2rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(Heading4)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
  letter-spacing: 0.2px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 1.2rem;
    max-width: 550px;
  }

  @media (max-width: 968px) {
    font-size: 1.15rem;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
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

// Enhanced version of your existing TeamCards component
const StyledTeamCards = styled(TeamCards)`
  padding: 20px 0;

  @media (max-width: 1200px) {
    column-gap: 50px;
    row-gap: 35px;
  }

  @media (max-width: 968px) {
    column-gap: 40px;
    row-gap: 30px;
  }

  @media (max-width: 768px) {
    column-gap: 30px;
    row-gap: 25px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
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

const TeamSection = () => {
  const TeamDatas = TeamData;

  // Handle loading state
  if (!TeamDatas) {
    return (
      <TeamSectionWrapper>
        <StyledMeetTheTeam id='team'>
          <StyledHeadline>
            <MainTitle>Meet The Team</MainTitle>
            <Subtitle>Get to Know the talented individuals behind our club</Subtitle>
          </StyledHeadline>
          <LoadingState>Loading team members...</LoadingState>
        </StyledMeetTheTeam>
      </TeamSectionWrapper>
    );
  }

  // Handle empty state
  if (TeamDatas.length === 0) {
    return (
      <TeamSectionWrapper>
        <StyledMeetTheTeam id='team'>
          <StyledHeadline>
            <MainTitle>Meet The Team</MainTitle>
            <Subtitle>Get to Know the talented individuals behind our club</Subtitle>
          </StyledHeadline>
          <ErrorState>No team members found</ErrorState>
        </StyledMeetTheTeam>
      </TeamSectionWrapper>
    );
  }

  return (
    <TeamSectionWrapper>
      <StyledMeetTheTeam id='team'>
        <StyledHeadline>
          <MainTitle>Meet The Team</MainTitle>
          <Subtitle>Get to Know the talented individuals behind our club</Subtitle>
        </StyledHeadline>

        <StyledTeamCards>
          {TeamDatas.map((TeamMember, index) => (
            <TeamCard key={TeamMember.id || TeamMember.name || index} TeamMember={TeamMember} />
          ))}
        </StyledTeamCards>
      </StyledMeetTheTeam>
    </TeamSectionWrapper>
  );
};

export default TeamSection;
