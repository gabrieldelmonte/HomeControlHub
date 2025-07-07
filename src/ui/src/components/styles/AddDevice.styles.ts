import styled from "styled-components";

export const AddDeviceForm = styled.form`
  flex: 2;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FormSection = styled.div`
  margin-bottom: 2rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

export const Input = styled.input`
  padding: 0.875rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const Select = styled.select`
  padding: 0.875rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e1e5e9;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => 
    disabled 
      ? "#ccc" 
      : "linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"
  };
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  transition: all 0.2s;
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};

  &:hover {
    transform: ${({ disabled }) => disabled ? "none" : "translateY(-2px)"};
    box-shadow: ${({ disabled }) => disabled ? "none" : "0 4px 12px rgba(255, 127, 80, 0.3)"};
  }

  &:active {
    transform: ${({ disabled }) => disabled ? "none" : "translateY(0)"};
  }
`;

export const SecondaryButton = styled.button`
  background: #f8f9fa;
  color: #6c757d;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
    color: #495057;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DevicePreview = styled.div`
  flex: 1;
  min-width: 300px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const PreviewCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
`;

export const PreviewTitle = styled.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`;

export const PreviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`;

export const PreviewLabel = styled.span`
  font-weight: 600;
  color: #666;
  min-width: 80px;
  font-size: 0.9rem;
`;

export const PreviewValue = styled.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`;

export const SuccessMessage = styled.div`
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`;

export const ErrorMessage = styled.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
`;
