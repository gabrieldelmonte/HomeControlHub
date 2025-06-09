import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, var(--primary-orange) 0%, var(--primary-orange-light) 100%);
`;

export const FormCard = styled.div`
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-orange) 0%, var(--secondary-cyan) 100%);
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const Logo = styled.h1`
  color: var(--primary-orange);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(45deg, var(--primary-orange), var(--secondary-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  color: var(--gray-600);
  font-size: 0.95rem;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  background: var(--gray-100);
  border-radius: 8px;
  padding: 4px;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px 16px;
  border: none;
  background: ${props => props.active ? 'var(--white)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-orange)' : 'var(--gray-600)'};
  font-weight: ${props => props.active ? '600' : '400'};
  border-radius: 6px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.95rem;

  &:hover {
    background: ${props => props.active ? 'var(--white)' : 'var(--gray-200)'};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  color: var(--gray-700);
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid var(--gray-200);
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition);
  background: var(--white);

  &:focus {
    outline: none;
    border-color: var(--primary-orange);
    box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
  }

  &::placeholder {
    color: var(--gray-400);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(45deg, var(--primary-orange), var(--primary-orange-light));
  color: var(--white);
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 10px;

  &:hover {
    background: linear-gradient(45deg, var(--primary-orange-dark), var(--primary-orange));
    transform: translateY(-2px);
    box-shadow: var(--shadow);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  padding: 14px;
  background: transparent;
  color: var(--secondary-cyan);
  border: 2px solid var(--secondary-cyan);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 10px;

  &:hover {
    background: var(--secondary-cyan);
    color: var(--white);
    transform: translateY(-1px);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--gray-300);
  }

  span {
    padding: 0 16px;
    color: var(--gray-500);
    font-size: 0.85rem;
  }
`;

export const ErrorMessage = styled.div`
  background: #fee;
  color: #c53030;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  border-left: 4px solid #c53030;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.div`
  background: #f0fff4;
  color: #38a169;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  border-left: 4px solid #38a169;
  margin-bottom: 20px;
`;
