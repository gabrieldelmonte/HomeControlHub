import styled from "styled-components";

// Profile-specific components
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

export const ProfileCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ProfileTitle = styled.h2`
  text-align: left;
  margin-bottom: 2.5rem;
  font-weight: 700;
  font-size: 2.1rem;
  color: #222;
`;

export const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  /* Remove border from last row */
  tr:last-child td {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.td<{ disabled?: boolean }>`
  font-weight: 600;
  color: ${({ disabled }) => (disabled ? '#888' : '#222')};
  width: 160px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e9ecef;
  background: ${({ disabled }) => (disabled ? '#f8f9fa' : 'white')};
`;

export const InfoValue = styled.td<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#888' : '#222')};
  background: ${({ disabled }) => (disabled ? '#f8f9fa' : 'white')};
  padding: 1rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  border-bottom: 1px solid #e9ecef;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  font-size: 1.05rem;
  color: #222;
  font-weight: 500;
`;

export const Button = styled.button<{ isEnabled?: boolean }>`
  background: ${({ isEnabled = true }) => 
    isEnabled 
      ? 'linear-gradient(135deg, #ff7f50 0%, #ff6b35 50%, #40e0d0 100%)' 
      : '#999'
  };
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: ${({ isEnabled = true }) => isEnabled ? 'pointer' : 'not-allowed'};
  margin-top: 18px;
  align-self: flex-end;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  opacity: ${({ isEnabled = true }) => isEnabled ? 1 : 0.7};

  &:hover {
    background: ${({ isEnabled = true }) => 
      isEnabled 
        ? 'linear-gradient(135deg, #ff6b35 0%, #ff5722 50%, #39d3c7 100%)' 
        : '#888'
    };
  }
`;

export const SmallButton = styled.button`
  background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 12px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  }
`;

export const PasswordFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const PasswordToggleButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: #333;
    background-color: #f5f5f5;
  }
`;

export const UserInfoSection = styled.div`
  width: 100%;
  margin: 0 auto 2rem auto;
  text-align: left;
`;

export const UserName = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
`;

export const UserEmail = styled.div`
  color: #888;
  font-size: 1.05rem;
  font-weight: 500;
`;

export const ProfileForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export const PasswordDisplay = styled.span<{ isVisible: boolean }>`
  letter-spacing: ${({ isVisible }) => isVisible ? 'normal' : '2px'};
  color: #222;
  font-weight: 500;
  flex: 1;
  font-family: ${({ isVisible }) => isVisible ? 'inherit' : 'monospace'};
`;

export const PasswordWarning = styled.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  color: #856404;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ShowPasswordButton = styled.button`
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  color: #6c757d;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 12px;
  transition: all 0.2s;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
    color: #495057;
  }
`;
