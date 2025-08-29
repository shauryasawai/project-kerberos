import { Link } from 'react-router-dom';
import { FooterContainer, FooterCopyright, FooterImage, FooterInsights, FooterLinks, FooterSocials, FooterText } from './styles';
import { Icon } from '@iconify/react';
import { footerData } from '../../../data/footer';
import { Body3 } from '../../shared';
import styled from 'styled-components';

// Only styling the text elements for visibility
const WhiteFooterText = styled(FooterText)`
  a {
    color: white !important;
    font-weight: bold !important;
  }
`;

const WhiteBody3 = styled(Body3)`
  color: white !important;
  font-weight: bold !important;

  a {
    color: #66ff00 !important;
    font-weight: bold !important;
  }
`;

const WhiteIcon = styled(Icon)`
  color: white !important;
`;

const Footer = () => {
  const { imageLink, siteLinks, socialLinks, alt } = footerData;

  return (
    <div>
      <FooterContainer>
        <FooterInsights>
          <FooterImage src={imageLink} alt={alt} />
          <FooterLinks>
            {siteLinks.map(item => (
              <WhiteFooterText key={item.Id}>
                <Link to={item.link} spy={true} smooth={true} offset={-100} duration={500}>
                  {item.title}
                </Link>
              </WhiteFooterText>
            ))}
          </FooterLinks>
        </FooterInsights>
        <hr style={{ width: '100%', margin: '80px 0 25px 0' }} />
        <FooterCopyright>
          <WhiteBody3 style={{ cursor: 'pointer', textAlign: 'left' }}>
            Architected with 💙 by{' '}
            <Link
              to='https://www.linkedin.com/in/shauryaman-sawai-1a4969289/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ textDecoration: 'underline' }}>
              Director of Analytics
            </Link>
          </WhiteBody3>
          <FooterSocials>
            {socialLinks.map(socialLink => (
              <Link key={socialLink.Id} href={socialLink.link}>
                {socialLink.name === 'ri:twitter-x-fill' ? (
                  <WhiteIcon icon={socialLink.name} width='25' height='25' />
                ) : (
                  <WhiteIcon icon={`mdi:${socialLink.name}`} width='30' height='30' />
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
