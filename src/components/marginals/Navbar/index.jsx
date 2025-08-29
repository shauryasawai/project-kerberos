import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { DropMenu } from '../../shared';
import { navItems } from '../../../data/navigation';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => (props.scrolled ? 'rgba(26, 26, 46, 0.95)' : 'rgba(26, 26, 46, 0.8)')};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${props => (props.scrolled ? 'rgba(102, 255, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)')};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${props => (props.scrolled ? '12px 0' : '20px 0')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(102, 255, 0, 0.05) 0%,
      transparent 20%,
      transparent 80%,
      rgba(102, 255, 0, 0.05) 100%
    );
    opacity: ${props => (props.scrolled ? 1 : 0)};
    transition: opacity 0.4s ease;
  }

  @media (max-width: 968px) {
    padding: ${props => (props.scrolled ? '10px 0' : '16px 0')};
  }
`;

const NavChild = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Logo = styled.img`
  height: 55px;
  width: auto;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1.2) contrast(1.1);

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.3) contrast(1.2) drop-shadow(0 0 12px rgba(102, 255, 0, 0.4));
  }

  @media (max-width: 1200px) {
    height: 52px;
  }

  @media (max-width: 968px) {
    height: 48px;
  }

  @media (max-width: 576px) {
    height: 44px;
  }
`;

const Content = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 32px;
  }

  @media (max-width: 968px) {
    display: none;
  }
`;

const List = styled.li`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #66ff00, #4dd100);
    border-radius: 2px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  a {
    color: rgba(255, 255, 255, 0.95);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    padding: 12px 8px;
    display: block;
    letter-spacing: 0.3px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

    &:hover {
      color: #66ff00;
      transform: translateY(-1px);
      text-shadow: 0 2px 4px rgba(102, 255, 0, 0.2);
    }

    &.active {
      color: #66ff00;
      text-shadow: 0 2px 4px rgba(102, 255, 0, 0.3);
    }
  }

  @media (max-width: 1200px) {
    a {
      font-size: 1.05rem;
      padding: 10px 6px;
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 968px) {
    gap: 20px;
  }
`;

const Contact = styled.button`
  background: linear-gradient(135deg, #66ff00 0%, #4dd100 100%);
  color: #1a1a2e;
  border: none;
  padding: 14px 28px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(102, 255, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  text-shadow: 0 1px 2px rgba(26, 26, 46, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(102, 255, 0, 0.5);
    background: linear-gradient(135deg, #4dd100 0%, #66ff00 100%);
  }

  &:active {
    transform: translateY(0);
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-weight: inherit;
  }

  @media (max-width: 968px) {
    display: none;
  }

  @media (max-width: 576px) {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  gap: 4px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 255, 0, 0.1);
  }

  @media (max-width: 968px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 28px;
  height: 3.5px;
  background: ${props => (props.active ? '#66ff00' : 'rgba(255, 255, 255, 0.95)')};
  border-radius: 2px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &:nth-child(1) {
    transform: ${props => (props.active ? 'translateY(7.5px) rotate(45deg)' : 'translateY(0) rotate(0)')};
  }

  &:nth-child(2) {
    opacity: ${props => (props.active ? 0 : 1)};
    transform: ${props => (props.active ? 'scale(0)' : 'scale(1)')};
  }

  &:nth-child(3) {
    transform: ${props => (props.active ? 'translateY(-7.5px) rotate(-45deg)' : 'translateY(0) rotate(0)')};
  }
`;

const MobileContact = styled(Contact)`
  display: none;

  @media (max-width: 968px) {
    display: block;
    padding: 12px 24px;
    font-size: 0.95rem;
    font-weight: 700;
  }

  @media (max-width: 576px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, #66ff00, #4dd100);
  transform-origin: left;
  transform: scaleX(${props => props.scrollProgress});
  transition: transform 0.1s ease;
`;

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [shown, setShown] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      setScrolled(scrollTop > 50);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968 && shown) {
        setShown(0);
        setIsActive(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [shown]);

  const toggleMenu = () => {
    if (shown === 0) {
      setShown(1);
      console.log('Menu opened');
    } else {
      setShown(0);
      console.log('Menu closed');
    }

    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setShown(0);
    setIsActive(false);
    setIsOpen(false);
  };

  return (
    <>
      <NavContainer scrolled={scrolled}>
        <NavChild>
          <Link to='home' spy={true} smooth={true} offset={-100} duration={500}>
            <Logo
              src='data:image/jpeg;base64,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'
              alt='Analytics & Consulting Club Logo'
            />
          </Link>

          <Content>
            {navItems.map(item => (
              <List key={item.title}>
                <Link to={item.link} spy={true} smooth={true} offset={-100} duration={500} activeClass='active'>
                  {item.title}
                </Link>
              </List>
            ))}
          </Content>

          <ButtonDiv>
            <Contact className='contact'>
              <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                Contact
              </Link>
            </Contact>

            <MobileContact className='mobile-contact'>
              <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={closeSidebar}>
                Contact
              </Link>
            </MobileContact>

            <Hamburger onClick={toggleMenu}>
              <Bar active={isActive} />
              <Bar active={isActive} />
              <Bar active={isActive} />
            </Hamburger>
          </ButtonDiv>
        </NavChild>

        <ScrollIndicator scrollProgress={scrollProgress} />
      </NavContainer>

      {shown ? <DropMenu close={closeSidebar} shown={shown} toggleMenu={toggleMenu} /> : null}
    </>
  );
};

export default Navbar;
