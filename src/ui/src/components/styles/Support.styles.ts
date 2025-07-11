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

// Ticket Panel Styles
export const TicketPanel = styled.div`
  max-width: 800px;
  margin: 2rem auto 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
`;

export const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
`;

export const TicketTitle = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const TicketStats = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

export const StatItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ color }) => color}15;
  border-radius: 20px;
  color: ${({ color }) => color};
  font-weight: 600;
`;

export const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TicketItem = styled.div<{ status: string }>`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 4px solid ${({ status }) => {
    switch (status) {
      case 'OPEN': return '#ffc107';
      case 'IN_PROGRESS': return '#17a2b8';
      case 'RESOLVED': return '#28a745';
      case 'CLOSED': return '#6c757d';
      default: return '#e0e0e0';
    }
  }};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const TicketSubject = styled.h4`
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const TicketMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

export const TicketPriority = styled.span<{ priority: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({ priority }) => {
    switch (priority) {
      case 'LOW': return '#e3f2fd';
      case 'MEDIUM': return '#fff3e0';
      case 'HIGH': return '#ffebee';
      case 'URGENT': return '#fce4ec';
      default: return '#f5f5f5';
    }
  }};
  color: ${({ priority }) => {
    switch (priority) {
      case 'LOW': return '#1976d2';
      case 'MEDIUM': return '#f57c00';
      case 'HIGH': return '#d32f2f';
      case 'URGENT': return '#c2185b';
      default: return '#666';
    }
  }};
`;

export const TicketStatus = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({ status }) => {
    switch (status) {
      case 'OPEN': return '#fff3cd';
      case 'IN_PROGRESS': return '#d1ecf1';
      case 'RESOLVED': return '#d4edda';
      case 'CLOSED': return '#e2e3e5';
      default: return '#f5f5f5';
    }
  }};
  color: ${({ status }) => {
    switch (status) {
      case 'OPEN': return '#856404';
      case 'IN_PROGRESS': return '#0c5460';
      case 'RESOLVED': return '#155724';
      case 'CLOSED': return '#383d41';
      default: return '#666';
    }
  }};
`;

export const TicketMessage = styled.p`
  margin: 0.5rem 0 0 0;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TicketDate = styled.span`
  color: #999;
  font-size: 0.85rem;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
`;

export const EmptyStateIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

export const EmptyStateText = styled.p`
  margin: 0;
  font-size: 1.1rem;
  color: #999;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #666;
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  padding: 1rem;
  background-color: #f8d7da;
  border-radius: 6px;
  border: 1px solid #f5c6cb;
`;

export const PrioritySelect = styled.select`
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

export const StatusSelect = styled.select`
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

export const AdminNotes = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #e3f2fd;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #1976d2;
`;

export const AdminNotesTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
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

export const UpdateButton = styled.button<{ disabled: boolean }>`
  background: ${({ disabled }) => 
    disabled 
      ? "#ccc" 
      : "linear-gradient(135deg, #28a745 0%, #20c997 50%, #17a2b8 100%)"
  };
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  transition: all 0.2s;

  &:hover {
    transform: ${({ disabled }) => disabled ? "none" : "translateY(-2px)"};
    box-shadow: ${({ disabled }) => disabled ? "none" : "0 4px 12px rgba(0, 0, 0, 0.2)"};
  }

  &:active {
    transform: ${({ disabled }) => disabled ? "none" : "translateY(0)"};
  }
`;
