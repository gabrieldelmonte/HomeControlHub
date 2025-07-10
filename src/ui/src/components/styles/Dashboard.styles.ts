import styled from "styled-components";

// Dashboard-specific components
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

// Loading, Error, and Empty State Components
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.125rem;
  color: #666;
  font-weight: 500;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #e9ecef;
    border-top: 2px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 0.75rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;

  div {
    text-align: center;
    max-width: 400px;

    h3 {
      color: #dc3545;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }

    p {
      color: #666;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }

    button {
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
    }
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 3rem 2rem;
  text-align: center;

  h3 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 400px;
  }

  ${AddButton} {
    margin-top: 0.5rem;
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &::before {
    content: "📱";
    font-size: 4rem;
    margin-bottom: 1.5rem;
    opacity: 0.6;
  }
`;

// Welcome Banner styles
export const WelcomeBanner = styled.div`
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 123, 255, 0.1);
`;

export const WelcomeBannerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WelcomeMessage = styled.div`
  flex: 1;
`;

export const WelcomeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: white;
`;

export const WelcomeText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`;

export const DismissButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    align-self: flex-end;
  }
`;
