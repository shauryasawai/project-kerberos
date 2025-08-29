import React from 'react';
import styled from 'styled-components';

const ResourceNavContainer = styled.div`
  position: sticky;
  z-index: 20;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  top: 20px;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 8px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(102, 255, 0, 0.2);
  }

  @media (min-width: 800px) {
    justify-content: center;
    gap: 8px;
    padding: 12px;
    border-radius: 20px;
  }

  @media (max-width: 800px) {
    gap: 4px;
    justify-content: center;
    width: 100%;
    padding: 6px;
    border-radius: 12px;
    top: 10px;
  }

  @media (max-width: 576px) {
    padding: 4px;
    gap: 2px;
    border-radius: 10px;
  }
`;

const ResourceNavItem = styled.button`
  background: ${({ isActive }) => (isActive ? 'linear-gradient(135deg, #66ff00 0%, #4dd100 100%)' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#1a1a2e' : 'rgba(255, 255, 255, 0.8)')};
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  flex: 1;
  max-width: 200px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: ${({ isActive }) => (isActive ? '0 4px 20px rgba(102, 255, 0, 0.3)' : 'none')};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, #66ff00, #4dd100);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${({ isActive }) => (isActive ? '#1a1a2e' : '#66ff00')};
    transform: translateY(-2px);

    &:not([data-active='true'])::before {
      opacity: 0.1;
    }

    ${({ isActive }) =>
      !isActive &&
      `
      background: rgba(102, 255, 0, 0.1);
      box-shadow: 0 4px 16px rgba(102, 255, 0, 0.2);
    `}
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 255, 0, 0.3);
  }

  @media (min-width: 800px) {
    font-size: 1.1rem;
    padding: 14px 28px;
    border-radius: 16px;

    &::before {
      border-radius: 16px;
    }
  }

  @media (max-width: 800px) {
    font-size: 0.95rem;
    padding: 10px 16px;
    letter-spacing: 0.3px;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
    padding: 8px 12px;
    border-radius: 8px;
    letter-spacing: 0.2px;

    &::before {
      border-radius: 8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 10px;
  }
`;

const NavItemCounter = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff6b6b;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  transition: all 0.3s ease;

  @media (max-width: 800px) {
    top: -6px;
    right: -6px;
    font-size: 0.65rem;
    min-width: 16px;
    height: 16px;
    padding: 1px 4px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const ResourceNavbar = ({ navItems, stage }) => {
  // Mock resource counts - in real app, these would come from props or context
  const getResourceCount = key => {
    return key === 'casebook' ? 2 : 1;
  };

  return (
    <ResourceNavContainer>
      {navItems.map(({ setStage, title, key }) => (
        <ResourceNavItem
          key={key}
          onClick={setStage}
          isActive={stage === key}
          data-active={stage === key}
          aria-pressed={stage === key}
          role='tab'
          aria-label={`Switch to ${title} resources`}>
          {title}
          <NavItemCounter isActive={stage === key}>{getResourceCount(key)}</NavItemCounter>
        </ResourceNavItem>
      ))}
    </ResourceNavContainer>
  );
};

export default ResourceNavbar;
