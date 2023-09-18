import { Link } from 'react-router-dom';
import { FooterContainer, FooterCopyright, FooterImage, FooterInsights, FooterLinks, FooterSocials, FooterText } from './styles';
import { Icon } from '@iconify/react';
import { footerData } from '../../../data/footer';
import { Body3 } from '../../shared';

const Footer = () => {
  const { imageLink, siteLinks, socialLinks, alt } = footerData;

  return (
    <div>
      <FooterContainer>
        <FooterInsights>
          <FooterImage src={imageLink} alt={alt} />
          <FooterLinks>
            {siteLinks.map(item => (
              <FooterText key={item.Id}>
                <Link to={item.link} spy={true} smooth={true} offset={-100} duration={500}>
                  {item.title}
                </Link>
              </FooterText>
            ))}
          </FooterLinks>
        </FooterInsights>
        <hr style={{ width: '100%', margin: '80px 0 25px 0' }} />
        <FooterCopyright>
          <Body3 style={{ cursor: 'pointer', color: '#6c757d', fontWeight: '500', textAlign: 'left' }}>
            Architected with 💙 by{' '}
            <Link
              to='https://www.instagram.com/opencode.nitr/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline', fontWeight: '700' }}>
              OpenCode
            </Link>
          </Body3>
          <FooterSocials>
            {socialLinks.map(socialLink => (
              <Link key={socialLink.Id} href={socialLink.link}>
                {socialLink.name === 'ri:twitter-x-fill' ? (
                  <Icon icon={socialLink.name} width='25' height='25' color='#6c757d' />
                ) : (
                  <Icon icon={`mdi:${socialLink.name}`} width='30' height='30' color='#6c757d' />
                )}
              </Link>
            ))}
          </FooterSocials>
        </FooterCopyright>
      </FooterContainer>
    </div>
  );
};

export default Footer;
