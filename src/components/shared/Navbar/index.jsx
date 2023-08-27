import { useState } from 'react';
import DropMenu from '../DropMenu';
// import { useContext } from 'react'
import { Link } from 'react-scroll';
import { Bar, Buttondiv, Contact, Content, Hamburger, List, Logo, NavChild, NavContainer, Services } from './styles';
import NavText from '../Typography/NavText';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [shown, setShown] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    if (shown === 0) {
      setShown(1);
      console.log('yes');
    } else {
      setShown(0);
      console.log('no');
    }

    setIsActive(!isActive);
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setShown(0);
  };

  return (
    <>
      <NavContainer>
        <NavChild>
          <Logo src='/images/Navbar/logo.png' alt='logo' />
          <Content>
            <List>
              <Link to='about' spy={true} smooth={true} offset={-100} duration={500}>
                <NavText>About Us</NavText>
              </Link>
            </List>
            <List>
              <Link to='team' spy={true} smooth={true} offset={-100} duration={500}>
                <NavText>Team</NavText>
              </Link>
            </List>
            <List>
              <Link to='resources' spy={true} smooth={true} offset={-100} duration={500}>
                <NavText>Resources</NavText>
              </Link>
            </List>
            <Services>
              <List>
                <Link to='faqs' spy={true} smooth={true} offset={-100} duration={500}>
                  <NavText>FAQs</NavText>
                </Link>
              </List>
            </Services>
          </Content>
          <Buttondiv>
            <Contact className='contact'>
              <NavText>Contact</NavText>
            </Contact>
            <Hamburger onClick={toggleMenu} toggleMenu={toggleMenu}>
              <Bar active={isActive} />
              <Bar active={isActive} />
              <Bar active={isActive} />
            </Hamburger>
          </Buttondiv>
        </NavChild>
      </NavContainer>

      {shown ? <DropMenu close={closeSidebar} shown={shown} toggleMenu={toggleMenu} /> : null}
    </>
  );
};

export default Navbar;
