import Heading1 from '../../shared/Typography/Heading1.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import ResourceNavbar from './ResourceNavbar.jsx';
import Casebook from './Casebook.jsx';
import Casedesk from './Casedesk.jsx';

const SectionHeading = styled(Heading1)`
  @media (min-width: 920px) {
    text-align: left;
    color: #1b1b1b;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 72.905px;
  }
  text-align: center;
  color: #1b1b1b;
  font-size: 27.423px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ItemsContainer = styled.div`
  width: 100%;
  max-height: 800px;
  overflow-y: scroll;
  position: relative;
`;

const ResourceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: relative;

  @media (min-width: 920px) {
    gap: 64px;
    min-width: 600px;
    //max-height: 600px;
  }
`;

const ResourceSectionContainer = styled.div`
  width: 100%;
  background: #cdcdcd;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px 18px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 20px 32px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    gap: 40px;
    padding: 24px 48px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 32px 64px;
    margin: 0 auto;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  max-height: 1200px;
  overflow: hidden;
  position: relative;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 625px;
    margin: 0 auto;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 1440px;
  }

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 32px 64px;
    margin: 0 auto;
  }

  @media (max-width: 524px) {
    max-height: 325px;
  }
`;

const STAGES = {
  casebook: 'casebook',
  casedesk: 'casedesk',
};
export default function ResourceSection() {
  const [stage, setStage] = useState(STAGES.casebook);

  // Stage Handlers
  const setStageToCasebook = () => setStage(STAGES.casebook);
  const setStageToCasedesk = () => setStage(STAGES.casedesk);

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
    switch (stage) {
      case STAGES.casedesk:
        return <Casedesk />;

      default:
        return <Casebook />;
    }
  };

  return (
    <ResourceSectionContainer id='resources'>
      <MainContainer>
        <SectionHeading>Resources</SectionHeading>
        <ResourceNavbar navItems={navItems} stage={stage} />
        <ItemsContainer>
          <ResourceItem>{renderItems(stage)}</ResourceItem>
        </ItemsContainer>
      </MainContainer>
    </ResourceSectionContainer>
  );
}
