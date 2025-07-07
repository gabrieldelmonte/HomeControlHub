import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaSave, FaTimes, FaWifi, FaExclamationTriangle } from "react-icons/fa";
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
  ControlsCard,
  ControlButton,
  ActionButton,
  ToggleSwitch,
  StatusIndicator,
  LogsCard,
  LogEntry,
  LogTime,
  LogMessage,
  LoadingSpinner,
  ErrorMessage,
} from "./styles/DeviceDetails.styles";

interface DeviceData {
  id: string;
  name: string;
  type: string;
  location: string;
  status: "On" | "Off";
  ipAddress: string;
  port?: string;
  description?: string;
  lastSeen: string;
  uptime: string;
  firmwareVersion: string;
  signalStrength: number;
}

interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: "info" | "warning" | "error";
}

const DeviceDetails: React.FC = () => {
  const navigate = useNavigate();
  const { deviceId } = useParams<{ deviceId: string }>();
  const [device, setDevice] = useState<DeviceData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<DeviceData>>({});
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to fetch device data
    const fetchDeviceData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Mock device data
        const mockDevice: DeviceData = {
          id: deviceId || "DEV-001",
          name: "Living Room Smart Light",
          type: "Smart Light",
          location: "Living Room",
          status: "On",
          ipAddress: "192.168.1.105",
          port: "8080",
          description: "Main lighting control for the living room area",
          lastSeen: "2 minutes ago",
          uptime: "5 days, 12 hours",
          firmwareVersion: "v2.1.4",
          signalStrength: 85,
        };

        // Mock logs
        const mockLogs: LogEntry[] = [
          {
            id: "1",
            timestamp: "2025-07-07 18:45:12",
            message: "Device status changed to ON",
            type: "info"
          },
          {
            id: "2",
            timestamp: "2025-07-07 15:30:45",
            message: "Firmware updated to v2.1.4",
            type: "info"
          },
          {
            id: "3",
            timestamp: "2025-07-07 12:15:20",
            message: "Connection timeout detected",
            type: "warning"
          },
          {
            id: "4",
            timestamp: "2025-07-07 09:00:10",
            message: "Device restarted",
            type: "info"
          },
        ];

        setDevice(mockDevice);
        setEditData(mockDevice);
        setLogs(mockLogs);
      } catch (err) {
        setError("Failed to load device data");
      } finally {
        setLoading(false);
      }
    };

    fetchDeviceData();
  }, [deviceId]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDevice(prev => prev ? { ...prev, ...editData } : null);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to save changes");
    }
  };

  const handleCancel = () => {
    setEditData(device || {});
    setIsEditing(false);
  };

  const handleToggleStatus = async () => {
    if (!device) return;
    
    try {
      const newStatus = device.status === "On" ? "Off" : "On";
      setDevice(prev => prev ? { ...prev, status: newStatus } : null);
      
      // Add log entry
      const newLog: LogEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        message: `Device status changed to ${newStatus}`,
        type: "info"
      };
      setLogs(prev => [newLog, ...prev]);
    } catch (err) {
      setError("Failed to toggle device status");
    }
  };

  const handleInputChange = (field: keyof DeviceData, value: string) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handleInputEvent = (field: keyof DeviceData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    handleInputChange(field, e.target.value);
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
            <StatusBadge status={device.status}>{device.status}</StatusBadge>
            {!isEditing ? (
              <ActionButton onClick={handleEdit}>
                <FaEdit /> Edit
              </ActionButton>
            ) : (
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <ActionButton onClick={handleSave} variant="success">
                  <FaSave /> Save
                </ActionButton>
                <ActionButton onClick={handleCancel} variant="cancel">
                  <FaTimes /> Cancel
                </ActionButton>
              </div>
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
                    {isEditing ? (
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
                    {isEditing ? (
                      <EditableValue
                        value={editData.location || ""}
                        onChange={handleInputEvent("location")}
                      />
                    ) : device.location}
                  </InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>IP Address:</InfoLabel>
                  <InfoValue>
                    {isEditing ? (
                      <EditableValue
                        value={editData.ipAddress || ""}
                        onChange={handleInputEvent("ipAddress")}
                      />
                    ) : device.ipAddress}
                  </InfoValue>
                </InfoRow>
                {device.port && (
                  <InfoRow>
                    <InfoLabel>Port:</InfoLabel>
                    <InfoValue>
                      {isEditing ? (
                        <EditableValue
                          value={editData.port || ""}
                          onChange={handleInputEvent("port")}
                        />
                      ) : device.port}
                    </InfoValue>
                  </InfoRow>
                )}
                <InfoRow>
                  <InfoLabel>Description:</InfoLabel>
                  <InfoValue>
                    {isEditing ? (
                      <EditableValue
                        value={editData.description || ""}
                        onChange={handleInputEvent("description")}
                        as="textarea"
                        rows={3}
                      />
                    ) : (device.description || "No description")}
                  </InfoValue>
                </InfoRow>
              </InfoTable>
            </InfoCard>

            <ControlsCard>
              <CardTitle>Device Controls</CardTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <ControlButton onClick={handleToggleStatus}>
                  <span>⚡</span>
                  <span>Turn {device.status === "On" ? "Off" : "On"}</span>
                  <ToggleSwitch checked={device.status === "On"} />
                </ControlButton>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#f8f9fa", borderRadius: "8px" }}>
                  <FaWifi />
                  <div>
                    <div style={{ fontWeight: "600", color: "#333" }}>Signal Strength</div>
                    <div style={{ color: "#666", fontSize: "0.9rem" }}>{device.signalStrength}%</div>
                  </div>
                  <div style={{ marginLeft: "auto", width: "100px", height: "8px", background: "#e0e0e0", borderRadius: "4px", overflow: "hidden" }}>
                    <div style={{ 
                      width: `${device.signalStrength}%`, 
                      height: "100%", 
                      background: device.signalStrength > 70 ? "#28a745" : device.signalStrength > 40 ? "#ffc107" : "#dc3545",
                      transition: "width 0.3s"
                    }} />
                  </div>
                </div>
              </div>
            </ControlsCard>

            <InfoCard>
              <CardTitle>System Information</CardTitle>
              <InfoTable>
                <InfoRow>
                  <InfoLabel>Last Seen:</InfoLabel>
                  <InfoValue>{device.lastSeen}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Uptime:</InfoLabel>
                  <InfoValue>{device.uptime}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Firmware:</InfoLabel>
                  <InfoValue>{device.firmwareVersion}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Status:</InfoLabel>
                  <InfoValue>
                    <StatusIndicator online={device.status === "On"}>
                      {device.status === "On" ? "Online" : "Offline"}
                    </StatusIndicator>
                  </InfoValue>
                </InfoRow>
              </InfoTable>
            </InfoCard>

            <LogsCard>
              <CardTitle>Recent Activity</CardTitle>
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                {logs.map(log => (
                  <LogEntry key={log.id} type={log.type}>
                    <LogTime>{log.timestamp}</LogTime>
                    <LogMessage>
                      {log.type === "warning" && <FaExclamationTriangle />}
                      {log.message}
                    </LogMessage>
                  </LogEntry>
                ))}
              </div>
            </LogsCard>
          </DetailsGrid>
        </DetailsContainer>
      </MainContent>
    </Container>
  );
};

export default DeviceDetails;
