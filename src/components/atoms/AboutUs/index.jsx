import styled from 'styled-components';

const AboutUsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(102, 255, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(102, 255, 0, 0.08) 0%, transparent 50%);
    animation: float 6s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 1200px) {
    min-height: auto;
  }

  @media (max-width: 968px) {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  }

  @media (max-width: 576px) {
    &::before {
      background: radial-gradient(circle at 50% 20%, rgba(102, 255, 0, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 50% 80%, rgba(102, 255, 0, 0.06) 0%, transparent 40%);
    }
  }
`;

const AboutUsSection = styled.section`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 60px;

  @media (max-width: 1400px) {
    max-width: 1200px;
    padding: 110px 50px;
  }

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 100px 40px;
  }

  @media (max-width: 968px) {
    padding: 80px 32px;
  }

  @media (max-width: 768px) {
    padding: 60px 24px;
  }

  @media (max-width: 576px) {
    padding: 48px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 24px;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 1200px) {
    margin-bottom: 70px;

    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 968px) {
    margin-bottom: 60px;

    h1 {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.15rem;
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.1rem;
      max-width: 450px;
    }
  }

  @media (max-width: 576px) {
    margin-bottom: 40px;

    h1 {
      font-size: 2.2rem;
      line-height: 1.2;
    }

    p {
      font-size: 1rem;
      max-width: 100%;
      padding: 0 10px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 80px;

  @media (max-width: 1200px) {
    gap: 70px;
  }

  @media (max-width: 968px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    gap: 50px;
  }

  @media (max-width: 576px) {
    gap: 40px;
  }
`;

const FeatureCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 80px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.3);
    border-color: rgba(102, 255, 0, 0.3);
  }

  &:nth-child(even) {
    direction: rtl;

    > * {
      direction: ltr;
    }
  }

  @media (max-width: 1400px) {
    gap: 70px;
    padding: 70px;
  }

  @media (max-width: 1200px) {
    gap: 60px;
    padding: 60px;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 50px 40px;
    direction: ltr;

    &:nth-child(even) {
      direction: ltr;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 32px;
    gap: 35px;
    border-radius: 20px;
  }

  @media (max-width: 576px) {
    padding: 32px 24px;
    gap: 30px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 28px 20px;
    gap: 24px;
    border-radius: 12px;
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 24px;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    margin-bottom: 32px;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.05rem;
    }
  }

  @media (max-width: 968px) {
    h2 {
      font-size: 2.1rem;
    }

    p {
      font-size: 1rem;
      margin-bottom: 28px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 0.98rem;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.8rem;
      line-height: 1.3;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
    z-index: 1;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${FeatureCard}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 1200px) {
    height: 380px;
  }

  @media (max-width: 968px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #66ff00 0%, #4dd100 100%);
  color: #1a1a2e;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(102, 255, 0, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(102, 255, 0, 0.6);
    background: linear-gradient(135deg, #4dd100 0%, #66ff00 100%);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    padding: 12px 24px;
    font-size: 0.9rem;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.85rem;
    border-radius: 30px;
  }
`;

const HighlightSection = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 80px 60px;
  margin-top: 80px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 24px;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.7;
    max-width: 800px;
    margin: 0 auto 40px;
  }

  @media (max-width: 1200px) {
    padding: 70px 50px;
    margin-top: 70px;

    h2 {
      font-size: 2.3rem;
    }

    p {
      font-size: 1.15rem;
      max-width: 700px;
    }
  }

  @media (max-width: 968px) {
    padding: 60px 40px;
    margin-top: 60px;

    h2 {
      font-size: 2.1rem;
    }

    p {
      font-size: 1.1rem;
      max-width: 600px;
    }
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
    margin-top: 50px;
    border-radius: 20px;

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.05rem;
      max-width: 100%;
      margin-bottom: 35px;
    }
  }

  @media (max-width: 576px) {
    padding: 40px 24px;
    margin-top: 40px;
    border-radius: 16px;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 480px) {
    padding: 32px 16px;
    border-radius: 12px;

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 35px;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 40px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 35px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
  }
`;

const StatItem = styled.div`
  text-align: center;

  .number {
    font-size: 3rem;
    font-weight: 800;
    color: #66ff00;
    margin-bottom: 8px;
    display: block;
  }

  .label {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
  }

  @media (max-width: 968px) {
    .number {
      font-size: 2.8rem;
    }

    .label {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 768px) {
    .number {
      font-size: 2.5rem;
      margin-bottom: 6px;
    }

    .label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    .number {
      font-size: 2.2rem;
    }

    .label {
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }

  @media (max-width: 480px) {
    .number {
      font-size: 2rem;
    }

    .label {
      font-size: 0.8rem;
    }
  }
`;

// Updated content data to match AnC theme
const modernAboutContent = [
  {
    id: 1,
    heading: 'Decode Complex Challenges',
    content:
      'Transform intricate business problems into clear, actionable insights through advanced analytics and strategic thinking. Our systematic approach to problem-solving combines cutting-edge data science with proven consulting methodologies.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D12AQG_MPqk4nDpGg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690880550339?e=2147483647&v=beta&t=LLE40WKoR1Hrw5yKCb2m3zMQG-6ITlV6IZorCkpZyk8',
    action: 'Explore Analytics',
  },
  {
    id: 2,
    heading: 'Analyze with Precision',
    content:
      'Harness the power of data-driven decision making with our comprehensive analytical framework. We turn raw information into strategic advantages that drive sustainable growth and competitive positioning in your market.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBsDU6M_BH7fAjepx0AioCCV0_71Vlls79rQ&s',
    action: 'Learn Consulting',
  },
  {
    id: 2,
    heading: 'Strategic Consulting Reimagined',
    content:
      'Navigate complex business challenges with our next-generation consulting framework. We blend human expertise with AI-powered insights to accelerate decision-making and drive sustainable growth in an ever-evolving digital landscape.',
    image: 'https://cdn.smartrecruiters.com/blog/wp-content/uploads/2024/04/Management-Consulting-Recruitment-1200x900.jpg',
    action: 'Learn More',
  },
];

const AboutUs = () => {
  return (
    <AboutUsContainer id='about'>
      <AboutUsSection>
        <SectionHeader>
          <h1>Welcome to our Analytics and Consulting Club</h1>
          <p>
            Follow us for domain expertise in the analytics and consulting sector. Where strategic thinking meets cutting-edge
            technology to create solutions that drive real-world impact.
          </p>
        </SectionHeader>

        <ContentGrid>
          {modernAboutContent.map(item => (
            <FeatureCard key={item.id}>
              <TextContent>
                <h2>{item.heading}</h2>
                <p>{item.content}</p>
                <ActionButton>{item.action}</ActionButton>
              </TextContent>
              <ImageContainer>
                <StyledImage src={item.image} alt={item.heading} />
              </ImageContainer>
            </FeatureCard>
          ))}
        </ContentGrid>

        <HighlightSection>
          <h2>Learn by Practice - Thrive Through Experience</h2>
          <p>
            AnC through its main divisions in Consulting and Data analytics encourages students to follow a learn-by-practice
            regimen. The club supports and organises a wide range of initiatives and events like ideathons throughout the year,
            fostering hands-on learning and real-world application of analytical and consulting skills.
          </p>

          <StatsGrid>
            <StatItem>
              <span className='number'>100+</span>
              <span className='label'>Active Members</span>
            </StatItem>
            <StatItem>
              <span className='number'>50+</span>
              <span className='label'>Projects Completed</span>
            </StatItem>
            <StatItem>
              <span className='number'>25+</span>
              <span className='label'>Industry Partners</span>
            </StatItem>
            <StatItem>
              <span className='number'>10+</span>
              <span className='label'>Annual Events</span>
            </StatItem>
          </StatsGrid>
        </HighlightSection>
      </AboutUsSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
