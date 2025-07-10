import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaSave, FaTimes, FaExclamationTriangle } from "react-icons/fa";
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
  timestamp: string;
  message: string;
  type: "info" | "warning" | "error";
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
  const [error, setError] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

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

  useEffect(() => {
    const fetchDeviceData = async () => {
      try {
        setLoading(true);
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
        
        // Mock logs for now - in a real app, these would come from another API endpoint
        const mockLogs: LogEntry[] = [
          {
            id: "1",
            timestamp: new Date(Date.now() - 1000 * 60 * 15).toLocaleString(),
            message: `Device status changed to ${deviceData.status ? 'ON' : 'OFF'}`,
            type: "info"
          },
          {
            id: "2",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toLocaleString(),
            message: "Device connected successfully",
            type: "info"
          },
          {
            id: "3",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8).toLocaleString(),
            message: "Connection timeout detected",
            type: "warning"
          },
          {
            id: "4",
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleString(),
            message: "Device registered in system",
            type: "info"
          },
        ];

        setDevice(deviceData);
        setEditData(deviceData);
        setLogs(mockLogs);
      } catch (err) {
        console.error("Error fetching device data:", err);
        setError("Failed to load device data");
      } finally {
        setLoading(false);
      }
    };

    if (deviceId) {
      fetchDeviceData();
    }
  }, [deviceId, navigate]);

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
      
      // Add log entry
      const newLog: LogEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        message: "Device information updated",
        type: "info"
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
      
      // Add log entry
      const newLog: LogEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        message: `Device status changed to ${newStatus ? 'ON' : 'OFF'}`,
        type: "info"
      };
      setLogs(prev => [newLog, ...prev]);
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
