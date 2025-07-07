import styled from "styled-components";

export const SupportForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
  color: #333;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  margin-top: 8px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`;

export const FileInput = styled.input`
  font-size: 1rem;
  color: #333;

  &::-webkit-file-upload-button {
    background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
`;

export const FileList = styled.ul`
  margin-top: 8px;
  font-size: 0.95rem;
  color: #555;
  list-style-type: disc;
  padding-left: 1.5rem;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  background: ${({ disabled }) => 
    disabled 
      ? "#ccc" 
      : "linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"
  };
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.9rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  margin-top: 8px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    transform: ${({ disabled }) => disabled ? "none" : "translateY(-2px)"};
  }

  &:active {
    transform: ${({ disabled }) => disabled ? "none" : "translateY(0)"};
  }
`;

export const SuccessMessage = styled.div`
  color: #28a745;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 1rem;
  background-color: #d4edda;
  border-radius: 6px;
  border: 1px solid #c3e6cb;
`;
