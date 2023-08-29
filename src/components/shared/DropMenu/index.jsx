import { Link } from 'react-scroll';
import { List, Navopen } from '../../marginals/Navbar/styles';
import { navItems } from '../../../data/navigation';

const DropMenu = props => {
  return (
    <Navopen style={{ color: '#6F0', fontFamily: 'Roboto,sans-serif' }}>
      {navItems.map(item => (
        <List style={{ marginTop: '10vh' }} key={item.title}>
          <Link
            to={item.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => {
              props.toggleMenu();
              props.close();
            }}>
            {item.title}
          </Link>
        </List>
      ))}
    </Navopen>
  );
};

export default DropMenu;
