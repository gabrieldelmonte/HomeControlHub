import styled from "styled-components";

export const DetailsContainer = styled.div`
  margin-top: 2rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  color: #6c757d;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 2rem;

  &:hover {
    background: #e9ecef;
    border-color: #adb5bd;
    color: #495057;
    transform: translateY(-2px);
  }
`;

export const DeviceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }
`;

export const DeviceTitle = styled.h1`
  color: #333;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
`;

export const DeviceId = styled.p`
  color: #666;
  margin: 0.5rem 0 0 0;
  font-size: 1rem;
  font-weight: 500;
`;

export const StatusBadge = styled.span<{ status: "On" | "Off" }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  background-color: ${(props) =>
    props.status === "On" ? "#28a745" : "#dc3545"};
`;

export const ActionButton = styled.button<{ variant?: "success" | "cancel" | "danger" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${({ variant }) => 
    variant === "success" ? "#28a745" :
    variant === "cancel" ? "#28a745" :
    variant === "danger" ? "#dc3545" :
    "linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)"
  };
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  min-width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ControlsCard = styled(InfoCard)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

export const LogsCard = styled(InfoCard)`
  grid-column: 1 / -1;
`;

export const CardTitle = styled.h3`
  color: #333;
  margin: 0 0 1.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f1f3f4;
`;

export const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f1f3f4;

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.span`
  font-weight: 600;
  color: #666;
  min-width: 120px;
  font-size: 0.95rem;
`;

export const InfoValue = styled.span`
  color: #333;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
  word-break: break-word;
  font-weight: 500;
`;

export const EditableValue = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #333;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`;

export const ControlButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: white;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #ff7f50;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 127, 80, 0.2);
  }
`;

export const ToggleSwitch = styled.div<{ checked: boolean }>`
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background: ${({ checked }) => (checked ? "#28a745" : "#dc3545")};
  position: relative;
  cursor: pointer;
  transition: background 0.2s;

  &::before {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "26px" : "2px")};
    top: 2px;
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
    transition: left 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const StatusIndicator = styled.span<{ online: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ online }) => (online ? "#28a745" : "#dc3545")};
  font-weight: 600;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ online }) => (online ? "#28a745" : "#dc3545")};
  }
`;

export const LogEntry = styled.div<{ type: "info" | "warning" | "error" }>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  border-left: 4px solid ${({ type }) => 
    type === "error" ? "#dc3545" :
    type === "warning" ? "#ffc107" :
    "#007bff"
  };
  background: ${({ type }) => 
    type === "error" ? "#f8d7da" :
    type === "warning" ? "#fff3cd" :
    "#d1ecf1"
  };
  border-radius: 0 8px 8px 0;
  margin-bottom: 0.5rem;
`;

export const LogTime = styled.span`
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
`;

export const LogMessage = styled.span`
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #666;
`;

export const ErrorMessage = styled.div`
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

// MQTT Terminal and Automation Rules styles
export const MqttTerminalCard = styled(InfoCard)`
  grid-column: 1 / -1;
  background: white;
  border: 2px solid #e1e5e9;
`;

export const TerminalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const TerminalTabs = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TerminalTab = styled.button<{ active: boolean }>`
  background: ${({ active }) => active ? 'linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)' : '#f8f9fa'};
  color: ${({ active }) => active ? 'white' : '#666'};
  border: 2px solid ${({ active }) => active ? 'transparent' : '#e1e5e9'};
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ active }) => active ? 'linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%)' : '#e9ecef'};
    border-color: ${({ active }) => active ? 'transparent' : '#adb5bd'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const TerminalContent = styled.div`
  background: white;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  padding: 1.5rem;
  min-height: 300px;
`;

export const CommandInput = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const CommandField = styled.input`
  flex: 1;
  background: white;
  border: 2px solid #e1e5e9;
  color: #333;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;

  &::placeholder {
    color: #6c757d;
  }

  &:focus {
    outline: none;
    border-color: #ff7f50;
    box-shadow: 0 0 0 3px rgba(255, 127, 80, 0.1);
  }
`;

export const SendButton = styled.button`
  background: linear-gradient(135deg, #ff7f50 0%, rgb(255, 157, 53) 50%, #40e0d0 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #adb5bd;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const AutomationRules = styled.div`
  margin-top: 2rem;
`;

export const RulesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 200px;
  overflow-y: auto;
`;

export const RuleItem = styled.div`
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    border-color: #adb5bd;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const RuleInfo = styled.div`
  flex: 1;
`;

export const RuleName = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 0.25rem;
`;

export const RuleDetails = styled.div`
  font-size: 0.85rem;
  color: #666;
`;

export const DeleteRuleButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #c82333;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const CommandHistory = styled.div`
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 1rem;
  max-height: 150px;
  overflow-y: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
`;

export const CommandLine = styled.div<{ type?: 'sent' | 'received' | 'error' }>`
  margin-bottom: 0.5rem;
  color: ${({ type }) => 
    type === 'sent' ? '#28a745' :
    type === 'received' ? '#007bff' :
    type === 'error' ? '#dc3545' :
    '#333'
  };
  font-weight: 500;
  
  &::before {
    content: ${({ type }) => 
      type === 'sent' ? '"[SENT] "' :
      type === 'received' ? '"[RECV] "' :
      type === 'error' ? '"[ERROR] "' :
      '""'
    };
    font-weight: bold;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  color: #6c757d;
  font-style: italic;
  padding: 2rem;
`;

export const StatusIndicatorTerminal = styled.div<{ connected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  font-weight: 600;
  
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ connected }) => connected ? '#28a745' : '#dc3545'};
    animation: ${({ connected }) => connected ? 'pulse 2s infinite' : 'none'};
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
`;
