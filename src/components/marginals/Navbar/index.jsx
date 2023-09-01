import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bar, Buttondiv, Contact, Content, Hamburger, List, Logo, NavChild, NavContainer } from './styles';
import { DropMenu, NavText } from '../../shared';
import { navItems } from '../../../data/navigation';

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
          <Link href='/'>
            <Logo src='https://res.cloudinary.com/dhnkuonev/image/upload/v1693384151/updated_2x_uj3s2i.png' alt='logo' />
          </Link>
          <Content>
            {navItems.map(item => (
              <List key={item.title}>
                <Link to={item.link} spy={true} smooth={true} offset={-100} duration={500}>
                  <NavText>{item.title}</NavText>
                </Link>
              </List>
            ))}
          </Content>
          <Buttondiv>
            <Contact className='contact'>
              <Link to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                <NavText>Contact</NavText>
              </Link>
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
