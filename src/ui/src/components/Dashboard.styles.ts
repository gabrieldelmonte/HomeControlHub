import styled from "styled-components";

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

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const AddButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DevicesTable = styled.table`
  width: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f8f9fa;
`;

export const TableRow = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }

  &:hover {
    background-color: #f8f9fa;
  }
`;

export const TableCell = styled.td`
  padding: 1.25rem;
  text-align: center;
  color: #333;
  font-size: 0.875rem;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }

  &[as="th"] {
    font-weight: 600;
    color: #666;
    background-color: #f8f9fa;
    text-align: center;
  }
`;

export const StatusBadge = styled.span<{ status: "On" | "Off" }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  background-color: ${(props) =>
    props.status === "On" ? "#28a745" : "#dc3545"};
`;

export const DetailsButton = styled.button`
  background-color: #ff7f50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff6b35;
  }
`;

export const ToggleSwitch = styled.button<{ checked: boolean }>`
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background: ${({ checked }) => (checked ? "#28a745" : "#dc3545")};
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  outline: none;
  margin-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "22px" : "2px")};
    top: 2px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  }
`;
