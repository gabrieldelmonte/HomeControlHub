import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(315deg, #ff7f50 0%, #ff6b35 50%, #40e0d0 100%);
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  height: 100vh;
`;

export const LeftPanel = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AppTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  white-space: nowrap;
`;

export const HouseIcon = styled.span`
  font-size: 3rem;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 500px;
`;

export const RightPanel = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

export const FormCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
  }

  &::placeholder {
    color: #999;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;

  &:hover {
    color: #333;
  }
`;

export const SubmitButton = styled.button<{ isComplete: boolean }>`
  width: 100%;
  padding: 0.875rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 1rem;

  background-color: ${(props) => (props.isComplete ? "#ff7f50" : "#999")};
  color: white;

  &:hover {
    background-color: ${(props) => (props.isComplete ? "#ff6b35" : "#888")};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ForgotLink = styled.button`
  background: none;
  border: none;
  color: #666;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.875rem;
  display: block;
  margin: 0 auto;

  &:hover {
    color: #333;
  }
`;

export const CreateAccountButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 0.875rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: white;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    border-color 0.2s,
    background-color 0.2s;

  &:hover {
    border-color: #ccc;
    background-color: #f9f9f9;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`;

export const SuccessMessage = styled.div`
  background-color: #efe;
  color: #3c3;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
`;
