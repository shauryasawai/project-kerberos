//import AboutUs from '../../components/atoms/AboutUs';
import { Footer, NavBar } from '../../components/marginals';
import { Contact, FAQ, HeroSection, MentorCarousel, Newsletter, ResourceSection, TeamCard } from '../../components/molecules';
import { Container } from './styles';
import AboutUsSection from '../../components/molecules/AboutSection/AboutUs.jsx';

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <HeroSection />
        <AboutUsSection />
        <MentorCarousel />
        <TeamCard />
        <ResourceSection />
        <Newsletter />
        <FAQ />
        <Contact />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
