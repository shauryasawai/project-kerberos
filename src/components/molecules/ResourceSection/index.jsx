import { useState } from 'react';
import Heading1 from '../../shared/Typography/Heading1.jsx';
import styled from 'styled-components';
import ResourceNavbar from './ResourceNavbar.jsx';
import Casebook from './Casebook.jsx';
import Casedesk from './Casedesk.jsx';

const ResourceSectionContainer = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 120px 24px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(102, 255, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(102, 255, 0, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 10%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (min-width: ${props => props.theme?.breakpoints?.md || '768px'}) {
    padding: 100px 32px;
    gap: 30px;
  }

  @media (min-width: ${props => props.theme?.breakpoints?.lg || '1024px'}) {
    gap: 40px;
    padding: 120px 48px;
  }

  @media (min-width: ${props => props.theme?.breakpoints?.xl || '1280px'}) {
    padding: 140px 64px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: 80px 18px;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }

  @media (max-width: 576px) {
    padding: 60px 16px;
    gap: 16px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${props => props.theme?.breakpoints?.sm || '640px'}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme?.breakpoints?.md || '768px'}) {
    gap: 50px;
  }

  @media (min-width: ${props => props.theme?.breakpoints?.xl || '1280px'}) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 576px) {
    gap: 24px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
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

  @media (min-width: 920px) {
    text-align: left;

    &::after {
      left: 0;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    &::after {
      width: 60px;
      height: 3px;
      bottom: -15px;
    }
  }
`;

const SectionHeading = styled(Heading1)`
  color: white;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: ${props => (props.centered ? '50%' : '0')};
    transform: ${props => (props.centered ? 'translateX(-50%)' : 'none')};
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(102, 255, 0, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }

  @media (min-width: 920px) {
    font-size: 3.5rem;
    line-height: 1.2;
    text-align: left;

    &::before {
      left: 0;
      transform: none;
    }
  }

  @media (max-width: 920px) {
    text-align: center;
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 920px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 24px;
  }
`;

const ItemsContainer = styled.div`
  width: 100%;
  max-height: 900px;
  overflow-y: auto;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 24px;

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #66ff00, #4dd100);
    border-radius: 4px;

    &:hover {
      background: linear-gradient(180deg, #4dd100, #66ff00);
    }
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #66ff00 rgba(255, 255, 255, 0.05);

  @media (min-width: 920px) {
    max-height: 800px;
    padding: 32px;
  }

  @media (max-width: 768px) {
    max-height: 600px;
    padding: 20px;
    border-radius: 16px;
  }

  @media (max-width: 576px) {
    max-height: 500px;
    padding: 16px;
    border-radius: 12px;
  }

  @media (max-width: 524px) {
    max-height: 400px;
  }
`;

const ResourceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;

  @media (min-width: 920px) {
    gap: 40px;
    min-width: 600px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 576px) {
    gap: 16px;
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

const _StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;

  @media (max-width: 768px) {
    gap: 30px;
    margin-top: 30px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
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

const STAGES = {
  casebook: 'casebook',
  casedesk: 'casedesk',
};

export default function ResourceSection() {
  const [stage, setStage] = useState(STAGES.casebook);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Stage Handlers with loading states
  const setStageToCasebook = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading
      setStage(STAGES.casebook);
    } catch (err) {
      setError('Failed to load consulting resources');
    } finally {
      setIsLoading(false);
    }
  };

  const setStageToCasedesk = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading
      setStage(STAGES.casedesk);
    } catch (err) {
      setError('Failed to load analytics resources');
    } finally {
      setIsLoading(false);
    }
  };

  const navItems = [
    {
      title: 'Consulting',
      setStage: setStageToCasebook,
      key: STAGES.casebook,
    },
    {
      title: 'Analytics',
      setStage: setStageToCasedesk,
      key: STAGES.casedesk,
    },
  ];

  const renderItems = stage => {
    if (isLoading) {
      return <LoadingState>Loading resources...</LoadingState>;
    }

    if (error) {
      return <ErrorState>{error}</ErrorState>;
    }

    switch (stage) {
      case STAGES.casedesk:
        return <Casedesk />;
      default:
        return <Casebook />;
    }
  };

  const _getResourceCount = () => {
    return stage === STAGES.casebook ? 50 : 35; // Example counts
  };

  const isWindowSmall = typeof window !== 'undefined' && window.innerWidth < 920;

  return (
    <ResourceSectionContainer id='resources'>
      <MainContainer>
        <SectionHeader>
          <SectionHeading centered={isWindowSmall}>Resources</SectionHeading>
        </SectionHeader>

        <ContentContainer>
          <ResourceNavbar navItems={navItems} stage={stage} />

          <ItemsContainer>
            <ResourceItem>{renderItems(stage)}</ResourceItem>
          </ItemsContainer>
        </ContentContainer>
      </MainContainer>
    </ResourceSectionContainer>
  );
}
