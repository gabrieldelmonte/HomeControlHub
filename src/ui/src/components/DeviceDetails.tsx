import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaSave, FaTimes, FaExclamationTriangle, FaSync, FaPaperPlane, FaTrash, FaPlus } from "react-icons/fa";
import {
  Container,
  Header,
  HeaderLeft,
  AppTitle,
  HouseIcon,
  HeaderNav,
  NavItem,
  LogoutButton,
  MainContent,
} from "./styles/Common.styles";
import { ToggleSwitch } from "./styles/Dashboard.styles"
import {
  DetailsContainer,
  BackButton,
  DeviceHeader,
  DeviceTitle,
  DeviceId,
  StatusBadge,
  DetailsGrid,
  InfoCard,
  CardTitle,
  InfoTable,
  InfoRow,
  InfoLabel,
  InfoValue,
  EditableValue,
  ControlButton,
  ActionButton,
  StatusIndicator,
  LogsCard,
  LogEntry,
  LogTime,
  LogMessage,
  LoadingSpinner,
  ErrorMessage,
  MqttTerminalCard,
  TerminalHeader,
  TerminalTabs,
  TerminalTab,
  TerminalContent,
  CommandInput,
  CommandField,
  SendButton,
  AutomationRules,
  RulesList,
  RuleItem,
  RuleInfo,
  RuleName,
  RuleDetails,
  DeleteRuleButton,
  CommandHistory,
  CommandLine,
  EmptyState,
  StatusIndicatorTerminal,
} from "./styles/DeviceDetails.styles";

interface DeviceData {
  id: string;
  name: string;
  type: string;
  status: boolean;
  description?: string;
  location: string;
  mqttTopic: string;
  aesKey?: string;
  userId: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}

interface LogEntry {
  id: string;
  message: string;
  type: "INFO" | "WARNING" | "ERROR";
  source: string;
  createdAt: string;
  user?: {
    username: string;
    email: string;
  };
}

interface AutomationRule {
  id: string;
  name: string;
  triggerCondition: string;
  action: string;
  deviceId: string;
  createdAt: string;
}

interface CommandHistory {
  id: string;
  timestamp: string;
  type: 'sent' | 'received' | 'error';
  content: string;
}

// Helper function to format dates safely
const formatDate = (dateString: string | Date | undefined | null): string => {
  if (!dateString || dateString === null || dateString === undefined) {
    return 'Unknown';
  }
  
  try {
    // Parse the date - handle both string and Date objects
    const date = dateString instanceof Date ? dateString : new Date(dateString);
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Unknown';
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (error) {
    return 'Unknown';
  }
};

const DeviceDetails: React.FC = () => {
  const navigate = useNavigate();
  const { deviceId } = useParams<{ deviceId: string }>();
  const [device, setDevice] = useState<DeviceData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<DeviceData>>({});
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [previousStatus, setPreviousStatus] = useState<boolean | null>(null);
  const [logsInitialized, setLogsInitialized] = useState(false);
  
  // MQTT Terminal state
  const [activeTab, setActiveTab] = useState<'terminal' | 'rules'>('terminal');
  const [commandName, setCommandName] = useState('');
  const [commandPayload, setCommandPayload] = useState('');
  const [commandHistory, setCommandHistory] = useState<CommandHistory[]>([]);
  const [automationRules, setAutomationRules] = useState<AutomationRule[]>([]);
  const [ruleName, setRuleName] = useState('');
  const [ruleTrigger, setRuleTrigger] = useState('');
  const [ruleAction, setRuleAction] = useState('');
  const [sendingCommand, setSendingCommand] = useState(false);
  const [savingRule, setSavingRule] = useState(false);

  useEffect(() => {
    // Get user role from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserRole(user.role);
        setCurrentUser(user);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const fetchDeviceLogs = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !deviceId) return;

      const response = await fetch(`http://localhost:8080/api/v1/devices/${deviceId}/logs?limit=20`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const logs = await response.json();
        // Transform backend logs to frontend format
        const transformedLogs: LogEntry[] = logs.map((log: any) => ({
          id: log.id,
          message: log.message,
          type: log.type,
          source: log.source,
          createdAt: log.createdAt,
          user: log.user
        }));
        setLogs(transformedLogs);
        setLogsInitialized(true);
      }
    } catch (error) {
      console.error("Error fetching device logs:", error);
    }
  };

  const fetchDeviceData = async (showLoadingSpinner: boolean = true, preserveLogs: boolean = false) => {
    try {
      if (showLoadingSpinner) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Fetch device details
      const response = await fetch(`http://localhost:8080/api/v1/devices/${deviceId}`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      if (response.status === 404) {
        setError("Device not found");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const deviceData = await response.json();
      
      setDevice(deviceData);
      setEditData(deviceData);
      setPreviousStatus(deviceData.status);
      
      // Fetch logs from backend if this is the first load
      if (!logsInitialized && !preserveLogs) {
        await fetchDeviceLogs();
      }
      
      // Fetch automation rules
      await fetchAutomationRules();
      
      // Update last updated timestamp
      if (!showLoadingSpinner) {
        setLastUpdated(new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.error("Error fetching device data:", err);
      if (showLoadingSpinner) {
        setError("Failed to load device data");
      }
    } finally {
      if (showLoadingSpinner) {
        setLoading(false);
      } else {
        setRefreshing(false);
      }
    }
  };

  useEffect(() => {
    if (deviceId) {
      fetchDeviceData(); // First load - will initialize logs since preserveLogs defaults to false
    }
  }, [deviceId, navigate]);

  // Add polling to refresh device data every 5 seconds (more responsive)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (deviceId && !isEditing) {
        fetchDeviceData(false, true); // Don't show loading spinner for background updates, preserve logs
      }
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId);
  }, [deviceId, isEditing]);

  // Add focus event listener to refresh data when user returns to the page
  useEffect(() => {
    const handleFocus = () => {
      if (deviceId && !isEditing) {
        fetchDeviceData(false, true);
      }
    };

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === `device_updated_${deviceId}` && deviceId && !isEditing) {
        // Device was updated from another page, refresh immediately
        setTimeout(() => fetchDeviceData(false, true), 100); // Small delay to ensure backend is updated
      }
    };

    window.addEventListener('focus', handleFocus);
    window.addEventListener('storage', handleStorageChange);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && deviceId && !isEditing) {
        fetchDeviceData(false, true);
      }
    });

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('storage', handleStorageChange);
      document.removeEventListener('visibilitychange', handleFocus);
    };
  }, [deviceId, isEditing]);

  const handleRefresh = () => {
    fetchDeviceData(false, true); // false = don't show loading spinner, true = preserve logs
    fetchDeviceLogs(); // Refresh logs from backend
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleEdit = () => {
    // Only allow non-admin users to edit devices
    if (userRole !== 'ADMIN') {
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // API call to update device
      const response = await fetch(`http://localhost:8080/api/v1/devices/${deviceId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editData.name,
          type: editData.type,
          description: editData.description,
          location: editData.location,
          mqttTopic: editData.mqttTopic,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update device");
      }

      const updatedDevice = await response.json();
      setDevice(updatedDevice);
      setIsEditing(false);
      
      // Add log entry with device name and user attribution
      //const userInfo = currentUser ? currentUser.email || currentUser.username : 'Unknown User';
      const userInfo = currentUser.username;
      const newLog: LogEntry = {
        id: Date.now().toString(),
        message: `Device '${updatedDevice.name}' information updated by ${userInfo}`,
        type: "INFO",
        source: "DEVICE",
        createdAt: new Date().toISOString()
      };
      setLogs(prev => [newLog, ...prev]);
    } catch (err) {
      console.error("Error saving device:", err);
      setError("Failed to save changes");
    }
  };

  const handleCancel = () => {
    setEditData(device || {});
    setIsEditing(false);
  };

  const handleToggleStatus = async () => {
    if (!device || userRole === 'ADMIN') return; // Admins cannot toggle device status
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const newStatus = !device.status;
      
      // Optimistically update the UI
      setDevice(prev => prev ? { ...prev, status: newStatus } : null);
      
      // API call to update device status
      const response = await fetch(`http://localhost:8080/api/v1/devices/${deviceId}/status`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        // Revert the optimistic update on error
        setDevice(prev => prev ? { ...prev, status: !newStatus } : null);
        throw new Error("Failed to update device status");
      }
      
      // Add log entry with user-friendly format matching Dashboard
      const userInfo = currentUser.username;
      const newLog: LogEntry = {
        id: Date.now().toString(),
        message: `Device '${device.name}' status changed to ${newStatus ? 'ON' : 'OFF'} by ${userInfo}`,
        type: "INFO",
        source: "DEVICE",
        createdAt: new Date().toISOString()
      };
      setLogs(prev => [newLog, ...prev]);

      // Notify other pages about device update
      localStorage.setItem(`device_updated_${deviceId}`, Date.now().toString());
      setTimeout(() => {
        localStorage.removeItem(`device_updated_${deviceId}`);
      }, 1000);
    } catch (err) {
      console.error("Error toggling device status:", err);
      setError("Failed to toggle device status");
    }
  };

  const handleInputChange = (field: keyof DeviceData, value: string) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputEvent = (field: keyof DeviceData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInputChange(field, e.target.value);
  };

  // MQTT Terminal and Automation Rules functions
  const fetchAutomationRules = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token || !deviceId) return;

      const response = await fetch(`http://localhost:8080/api/v1/automation/devices/${deviceId}/rules`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const rules = await response.json();
        setAutomationRules(rules);
      }
    } catch (error) {
      console.error("Error fetching automation rules:", error);
    }
  };

  const sendMQTTCommand = async () => {
    if (!commandName.trim() || !deviceId || sendingCommand) return;

    setSendingCommand(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      let payload;
      try {
        payload = commandPayload.trim() ? JSON.parse(commandPayload) : {};
      } catch (error) {
        // If not valid JSON, treat as string
        payload = { value: commandPayload };
      }

      const response = await fetch(`http://localhost:8080/api/v1/automation/devices/${deviceId}/commands`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          command: {
            name: commandName,
            payload: payload
          }
        }),
      });

      if (response.ok) {
        const result = await response.json();
        
        // Add to command history
        const newCommand: CommandHistory = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          type: 'sent',
          content: `${commandName}: ${JSON.stringify(payload)}`
        };
        setCommandHistory(prev => [newCommand, ...prev.slice(0, 49)]); // Keep last 50 commands

        // Clear input fields
        setCommandName('');
        setCommandPayload('');

        // Add log entry
        const userInfo = currentUser?.username || 'Unknown User';
        const newLog: LogEntry = {
          id: Date.now().toString(),
          message: `MQTT command '${commandName}' sent to device '${device?.name}' by ${userInfo}`,
          type: "INFO",
          source: "MQTT",
          createdAt: new Date().toISOString()
        };
        setLogs(prev => [newLog, ...prev]);
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error("Error sending MQTT command:", error);
      
      // Add error to command history
      const errorCommand: CommandHistory = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        type: 'error',
        content: `Failed to send ${commandName}: ${error}`
      };
      setCommandHistory(prev => [errorCommand, ...prev.slice(0, 49)]);
    } finally {
      setSendingCommand(false);
    }
  };

  const createAutomationRule = async () => {
    if (!ruleName.trim() || !ruleTrigger.trim() || !ruleAction.trim() || !deviceId || savingRule) return;

    setSavingRule(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(`http://localhost:8080/api/v1/automation/devices/${deviceId}/rules`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: ruleName,
          triggerCondition: ruleTrigger,
          action: ruleAction
        }),
      });

      if (response.ok) {
        const newRule = await response.json();
        setAutomationRules(prev => [newRule, ...prev]);
        
        // Clear input fields
        setRuleName('');
        setRuleTrigger('');
        setRuleAction('');

        // Add log entry
        const userInfo = currentUser?.username || 'Unknown User';
        const newLog: LogEntry = {
          id: Date.now().toString(),
          message: `Automation rule '${newRule.name}' created for device '${device?.name}' by ${userInfo}`,
          type: "INFO",
          source: "AUTOMATION",
          createdAt: new Date().toISOString()
        };
        setLogs(prev => [newLog, ...prev]);
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error("Error creating automation rule:", error);
      setError("Failed to create automation rule");
    } finally {
      setSavingRule(false);
    }
  };

  const deleteAutomationRule = async (ruleId: string, ruleName: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch(`http://localhost:8080/api/v1/automation/rules/${ruleId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setAutomationRules(prev => prev.filter(rule => rule.id !== ruleId));

        // Add log entry
        const userInfo = currentUser?.username || 'Unknown User';
        const newLog: LogEntry = {
          id: Date.now().toString(),
          message: `Automation rule '${ruleName}' deleted from device '${device?.name}' by ${userInfo}`,
          type: "INFO",
          source: "AUTOMATION",
          createdAt: new Date().toISOString()
        };
        setLogs(prev => [newLog, ...prev]);
      } else {
        const error = await response.text();
        throw new Error(error);
      }
    } catch (error) {
      console.error("Error deleting automation rule:", error);
      setError("Failed to delete automation rule");
    }
  };

  if (loading) {
    return (
      <Container>
        <Header>
          <HeaderLeft>
            <HouseIcon>🏠</HouseIcon>
            <AppTitle>Home Control Hub</AppTitle>
          </HeaderLeft>
          <HeaderNav>
            <NavItem onClick={() => navigate("/profile")}>Profile</NavItem>
            <NavItem onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
            <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
            <NavItem onClick={() => navigate("/support")}>Support</NavItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </HeaderNav>
        </Header>
        <MainContent>
          <LoadingSpinner>Loading device details...</LoadingSpinner>
        </MainContent>
      </Container>
    );
  }

  if (error || !device) {
    return (
      <Container>
        <Header>
          <HeaderLeft>
            <HouseIcon>🏠</HouseIcon>
            <AppTitle>Home Control Hub</AppTitle>
          </HeaderLeft>
          <HeaderNav>
            <NavItem onClick={() => navigate("/profile")}>Profile</NavItem>
            <NavItem onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
            <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
            <NavItem onClick={() => navigate("/support")}>Support</NavItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </HeaderNav>
        </Header>
        <MainContent>
          <ErrorMessage>{error || "Device not found"}</ErrorMessage>
          <BackButton onClick={handleBack}>
            <FaArrowLeft /> Back to Dashboard
          </BackButton>
        </MainContent>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <HouseIcon>🏠</HouseIcon>
          <AppTitle>Home Control Hub</AppTitle>
        </HeaderLeft>
        <HeaderNav>
          <NavItem onClick={() => navigate("/profile")}>Profile</NavItem>
          <NavItem onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
          <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
          <NavItem onClick={() => navigate("/support")}>Support</NavItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderNav>
      </Header>

      <MainContent>
        <BackButton onClick={handleBack}>
          <FaArrowLeft /> Back to Dashboard
        </BackButton>

        <DeviceHeader>
          <div>
            <DeviceTitle>{isEditing ? (
              <EditableValue
                value={editData.name || ""}
                onChange={handleInputEvent("name")}
              />
            ) : device.name}</DeviceTitle>
            <DeviceId>Device ID: {device.id}</DeviceId>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <StatusBadge status={device.status ? "On" : "Off"}>{device.status ? "On" : "Off"}</StatusBadge>
            {!isEditing && userRole !== 'ADMIN' ? (
              <ActionButton onClick={handleEdit}>
                <FaEdit /> Edit
              </ActionButton>
            ) : isEditing ? (
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <ActionButton onClick={handleSave} variant="success">
                  <FaSave /> Save
                </ActionButton>
                <ActionButton onClick={handleCancel} variant="cancel">
                  <FaTimes /> Cancel
                </ActionButton>
              </div>
            ) : (
              <span style={{ color: "#666", fontSize: "0.9rem" }}>
                {userRole === 'ADMIN' ? 'View Only' : ''}
              </span>
            )}
          </div>
        </DeviceHeader>

        <DetailsContainer>
          <DetailsGrid>
            <InfoCard>
              <CardTitle>Device Information</CardTitle>
              <InfoTable>
                <InfoRow>
                  <InfoLabel>Type:</InfoLabel>
                  <InfoValue>
                    {isEditing && userRole !== 'ADMIN' ? (
                      <EditableValue
                        value={editData.type || ""}
                        onChange={handleInputEvent("type")}
                      />
                    ) : device.type}
                  </InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Location:</InfoLabel>
                  <InfoValue>
                    {isEditing && userRole !== 'ADMIN' ? (
                      <EditableValue
                        value={editData.location || ""}
                        onChange={handleInputEvent("location")}
                      />
                    ) : device.location}
                  </InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>MQTT Topic:</InfoLabel>
                  <InfoValue>
                    {isEditing && userRole !== 'ADMIN' ? (
                      <EditableValue
                        value={editData.mqttTopic || ""}
                        onChange={handleInputEvent("mqttTopic")}
                      />
                    ) : device.mqttTopic}
                  </InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Description:</InfoLabel>
                  <InfoValue>
                    {isEditing && userRole !== 'ADMIN' ? (
                      <EditableValue
                        value={editData.description || ""}
                        onChange={handleInputEvent("description")}
                        as="textarea"
                        rows={3}
                      />
                    ) : (device.description || "No description")}
                  </InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Status Control:</InfoLabel>
                  <InfoValue style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    {userRole === 'ADMIN' ? (
                      // Admins can only view status, not change it
                      <span style={{ 
                        color: device.status ? "#4CAF50" : "#f44336",
                        fontWeight: "bold"
                      }}>
                        {device.status ? "ON" : "OFF"}
                      </span>
                    ) : (
                      // Regular users can toggle status
                      <ToggleSwitch
                        checked={device.status}
                        onClick={handleToggleStatus}
                        aria-label={`Toggle ${device.name}`}
                      />
                    )}
                  </InfoValue>
                </InfoRow>
              </InfoTable>
            </InfoCard>

            <InfoCard>
              <CardTitle>System Information</CardTitle>
              <InfoTable>
                <InfoRow>
                  <InfoLabel>Device ID:</InfoLabel>
                  <InfoValue>{device.id}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Owner:</InfoLabel>
                  <InfoValue>
                    {currentUser ? `${currentUser.username} (${currentUser.email})` : 'Unknown User'}
                  </InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Created:</InfoLabel>
                  <InfoValue>{formatDate(device.createdAt)}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Last Updated:</InfoLabel>
                  <InfoValue>
                    {device.updatedAt && device.createdAt && 
                     new Date(device.updatedAt).getTime() !== new Date(device.createdAt).getTime() ? 
                      formatDate(device.updatedAt) : 
                      'Never edited'
                    }
                  </InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Connection Status:</InfoLabel>
                  <InfoValue>
                    <StatusIndicator online={device.status}>
                      {device.status ? "Online" : "Offline"}
                    </StatusIndicator>
                  </InfoValue>
                </InfoRow>
              </InfoTable>
            </InfoCard>

            <LogsCard>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <CardTitle>Recent Activity</CardTitle>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {lastUpdated && (
                    <span style={{ fontSize: '0.7rem', color: '#666' }}>
                      Last updated: {lastUpdated}
                    </span>
                  )}
                  <ActionButton onClick={handleRefresh} style={{ fontSize: '0.8rem', padding: '0.5rem' }} disabled={refreshing}>
                    <FaSync style={{ 
                      animation: refreshing ? 'spin 1s linear infinite' : 'none',
                      marginRight: '0.5rem'
                    }} /> 
                    {refreshing ? 'Refreshing...' : 'Refresh'}
                  </ActionButton>
                </div>
              </div>
              <style>
                {`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}
              </style>
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                {logs.map(log => (
                  <LogEntry key={log.id} type={log.type.toLowerCase() as "info" | "warning" | "error"}>
                    <LogTime>{formatDate(log.createdAt)}</LogTime>
                    <LogMessage>
                      {log.type === "WARNING" && <FaExclamationTriangle />}
                      {log.message}
                      {log.user && (
                        <span style={{ marginLeft: '0.5rem' }}>
                          by {log.user.username}
                        </span>
                      )}
                    </LogMessage>
                  </LogEntry>
                ))}
              </div>
            </LogsCard>

            <MqttTerminalCard>
              <CardTitle>
                MQTT Terminal & Automation
              </CardTitle>
              <TerminalHeader>
            <TerminalTabs>
              <TerminalTab active={activeTab === 'terminal'} onClick={() => setActiveTab('terminal')}>
                Terminal
              </TerminalTab>
              <TerminalTab active={activeTab === 'rules'} onClick={() => setActiveTab('rules')}>
                Automation Rules {automationRules.length > 0 && `(${automationRules.length})`}
              </TerminalTab>
            </TerminalTabs>
            <StatusIndicatorTerminal connected={device?.status || false}>
              MQTT: {device?.status ? 'Connected' : 'Disconnected'}
            </StatusIndicatorTerminal>
          </TerminalHeader>
          <TerminalContent>
            {activeTab === 'terminal' ? (
              <div>
                <CommandInput>
                  <CommandField
                    value={commandName}
                    onChange={(e) => setCommandName(e.target.value)}
                    placeholder="Command Name (e.g., turnOn, setColor)"
                    disabled={sendingCommand}
                  />
                  <CommandField
                    value={commandPayload}
                    onChange={(e) => setCommandPayload(e.target.value)}
                    placeholder="Payload (JSON or string)"
                    disabled={sendingCommand}
                  />
                  <SendButton onClick={sendMQTTCommand} disabled={sendingCommand}>
                    <FaPaperPlane /> {sendingCommand ? 'Sending...' : 'Send Command'}
                  </SendButton>
                </CommandInput>
                
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 600 }}>Command History</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.8rem' }}>
                      Topic: {device?.mqttTopic}
                    </span>
                  </div>
                  <CommandHistory>
                    {commandHistory.length === 0 ? (
                      <EmptyState>No commands sent yet. Start by sending a command above.</EmptyState>
                    ) : (
                      commandHistory.map((cmd) => (
                        <CommandLine key={cmd.id} type={cmd.type}>
                          {formatDate(cmd.timestamp)} - {cmd.content}
                        </CommandLine>
                      ))
                    )}
                  </CommandHistory>
                </div>
              </div>
            ) : (
              <div>
                <CardTitle>Automation Rules</CardTitle>
                <AutomationRules>
                  <RulesList>
                    {automationRules.length === 0 ? (
                      <EmptyState>No automation rules found.</EmptyState>
                    ) : (
                      automationRules.map((rule) => (
                        <RuleItem key={rule.id}>
                          <RuleInfo>
                            <RuleName>{rule.name}</RuleName>
                            <RuleDetails>{rule.triggerCondition} → {rule.action}</RuleDetails>
                          </RuleInfo>
                          <DeleteRuleButton onClick={() => deleteAutomationRule(rule.id, rule.name)}>
                            <FaTrash />
                          </DeleteRuleButton>
                        </RuleItem>
                      ))
                    )}
                  </RulesList>
                  
                  <div style={{ marginTop: '1.5rem' }}>
                    <CardTitle>Create New Rule</CardTitle>
                    <CommandInput>
                      <CommandField
                        value={ruleName}
                        onChange={(e) => setRuleName(e.target.value)}
                        placeholder="Rule Name"
                        disabled={savingRule}
                      />
                    </CommandInput>
                    <CommandInput>
                      <CommandField
                        value={ruleTrigger}
                        onChange={(e) => setRuleTrigger(e.target.value)}
                        placeholder="Trigger Condition (e.g., status == true)"
                        disabled={savingRule}
                      />
                    </CommandInput>
                    <CommandInput>
                      <CommandField
                        value={ruleAction}
                        onChange={(e) => setRuleAction(e.target.value)}
                        placeholder="Action (e.g., {command: 'turnOn', payload: {}})"
                        disabled={savingRule}
                      />
                      <SendButton onClick={createAutomationRule} disabled={savingRule || !ruleName.trim() || !ruleTrigger.trim() || !ruleAction.trim()}>
                        <FaPlus /> {savingRule ? 'Creating...' : 'Create Rule'}
                      </SendButton>
                    </CommandInput>
                  </div>
                </AutomationRules>
              </div>
            )}
          </TerminalContent>
        </MqttTerminalCard>
          </DetailsGrid>
        </DetailsContainer>
      </MainContent>
    </Container>
  );
};

export default DeviceDetails;
