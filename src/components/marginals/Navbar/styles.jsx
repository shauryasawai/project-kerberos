import styled from 'styled-components';
// import Link from 'next/link';

export const NavContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  height: 80px;
  background: #fff;
  z-index: 100;
  box-shadow:
    1px 12px 16px 0px rgba(0, 0, 0, 0.25) inset,
    11px -10px 25px 10px rgba(255, 255, 255, 0.3) inset;
  backdrop-filter: blur(25px);
  align-items: center;
  display: flex;
  padding: 0 4vw 0 1vw;
  font-family: Roboto, sans-serif;
  font-weight: 400;

  @media only screen and (max-width: 520px) {
    box-shadow:
      0px 11px 12px 0px rgba(0, 0, 0, 0.15) inset,
      11px -10px 25px 10px rgba(255, 255, 255, 0.3) inset;
    padding-right: 4vw;
  }
`;
export const Logo = styled.img`
  width: 400px;
  @media (max-width: 913px) {
    width: 200px;
    height: auto;
  }
`;
export const NavChild = styled.nav`
  width: 100%;
  height: 135;
  background: rgba(217, 217, 217, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
`;

export const List = styled.li`
  list-style: none;
  margin-left: 44px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 40%;
  height: 40%;
`;

export const Content = styled.nav`
  display: flex;

  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    display: none;
    position: absolute;
    background-size: cover;
    height: 16px;
    width: 16px;
  }
`;

export const Services = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Contact = styled.button`
  background-color: #66ff00;
  font-family: Roboto, sans-serif;
  border: none;
  padding: 12px 32px;

  cursor: pointer;
  &:hover {
    background-color: #245f02;
    transition: background-color 0.5s ease;
  }
  @media only screen and (max-width: 913px) {
    font-size: 12px;
  }
`;

export const Buttondiv = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const Navopen = styled.div`
  z-index: 10000;
  position: fixed;
  top: 100px;
  height: calc(100vh - 100px);
  font-family: Roboto, sans-serif;
  font-size: 2.5vh;
  width: 100vw;
  padding-right: 7vh;
  background-color: #2a2a2a;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  align-items: center;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  opacity: 1;
  transition: all 2s ease-in;
  @media all and (min-width: 913px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: inline-block;
  cursor: pointer;
  @media all and (min-width: 1200px) {
    display: none;
  }
`;

export const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px 0;
  transition: 0.7s;
  margin-left: 3vh;

  &:nth-child(1) {
    transform: ${({ active }) => (active ? 'rotate(-45deg) translate(-5px, 6px)' : 'none')};
  }

  &:nth-child(2) {
    opacity: ${({ active }) => (active ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ active }) => (active ? 'rotate(45deg) translate(-5px, -6px)' : 'none')};
  }
`;
