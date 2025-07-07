import styled from "styled-components";

// Common components used across multiple pages
export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Header = styled.header`
  background: linear-gradient(270deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const HouseIcon = styled.span`
  font-size: 1.5rem;
`;

export const AppTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const NavItem = styled.button<{ selected?: boolean }>`
  background: ${({ selected }) => (selected ? 'rgba(255,255,255,0.2)' : 'none')};
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.5s, box-shadow 1s cubic-bezier(.4,2,.3,1), transform 1s cubic-bezier(.4,2,.3,1);
  box-shadow: ${({ selected }) => (selected ? '0 4px 16px 0 rgba(0,0,0,0.10)' : 'none')};
  z-index: 1;

  &:hover {
    background-color: ${({ selected }) => (selected ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.15)')};
    box-shadow: ${({ selected }) => (selected ? '0 4px 16px 0 rgba(0,0,0,0.10)' : '0 8px 24px 0 rgba(0,0,0,0.18)')};
    transform: ${({ selected }) => (selected ? 'none' : 'translateY(-4px) scale(1.04)')};
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
  }
`;

export const MainContent = styled.main`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #333;
  font-weight: 600;
`;
