import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  SectionHeader,
  SectionTitle,
  AddButton,
  DevicesTable,
  TableHeader,
  TableRow,
  TableCell,
  DetailsButton,
  ToggleSwitch,
  LoadingContainer,
  ErrorContainer,
  EmptyState,
  WelcomeBanner,
  WelcomeBannerContent,
  WelcomeMessage,
  WelcomeTitle,
  WelcomeText,
  DismissButton
} from "./styles/Dashboard.styles";

interface Device {
  id: string;
  name: string;
  type: string;
  status: boolean;
  description?: string;
  location: string;
  mqttTopic: string;
  aesKey?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface Notification {
  id: string;
  message: string;
  type: string;
  userId: string;
  read: boolean;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState<Device[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Remove auth-page class when dashboard loads
  useEffect(() => {
    document.body.classList.remove("auth-page");
    
    // Get user role from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUserRole(user.role);
        setCurrentUser(user);
        
        // Check if user should see welcome banner (first time login detection)
        // Show welcome banner if user doesn't have the "welcomed" flag in localStorage
        const hasBeenWelcomed = localStorage.getItem(`welcomed_${user.id}`);
        if (!hasBeenWelcomed && user.role === 'STANDARD_USER') {
          setShowWelcomeBanner(true);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  // Fetch user's devices
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // Fetch devices
        const devicesResponse = await fetch("http://localhost:8080/api/v1/devices", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (devicesResponse.status === 401) {
          // Token is invalid, redirect to login
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }

        if (!devicesResponse.ok) {
          throw new Error(`HTTP error! status: ${devicesResponse.status}`);
        }

        const devicesData = await devicesResponse.json();
        setDevices(devicesData);

        // Fetch notifications only for standard users
        if (userRole === 'STANDARD_USER') {
          const notificationsResponse = await fetch("http://localhost:8080/api/v1/notifications", {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (notificationsResponse.ok) {
            const notificationsData = await notificationsResponse.json();
            setNotifications(notificationsData);
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (userRole !== null) {
      fetchData();
    }
  }, [navigate, userRole]);

  const isAdmin = userRole === 'ADMIN';

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleAddDevice = () => {
    navigate("/add-device");
  };

  const handleDetails = (deviceId: string) => {
    navigate(`/device/${deviceId}`);
  };

  const handleToggleStatus = async (deviceId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const device = devices.find(d => d.id === deviceId);
      if (!device) return;

      const newStatus = !device.status;

      // Optimistically update the UI
      setDevices((prevDevices) =>
        prevDevices.map((device) =>
          device.id === deviceId
            ? { ...device, status: newStatus }
            : device
        )
      );

      // Make API call to update device status
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
        setDevices((prevDevices) =>
          prevDevices.map((device) =>
            device.id === deviceId
              ? { ...device, status: !newStatus }
              : device
          )
        );
        throw new Error("Failed to update device status");
      }

      // Notify other pages about device update
      localStorage.setItem(`device_updated_${deviceId}`, Date.now().toString());
      // Remove the item after a short delay to allow other pages to detect the change
      setTimeout(() => {
        localStorage.removeItem(`device_updated_${deviceId}`);
      }, 1000);
    } catch (err) {
      console.error("Error toggling device status:", err);
      // The optimistic update has already been reverted above
    }
  };

  const handleMarkNotificationAsRead = async (notificationId: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Optimistically update the UI
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, read: true }
            : notification
        )
      );

      // Make API call to mark notification as read
      const response = await fetch(`http://localhost:8080/api/v1/notifications/${notificationId}/read`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        // Revert the optimistic update on error
        setNotifications((prevNotifications) =>
          prevNotifications.map((notification) =>
            notification.id === notificationId
              ? { ...notification, read: false }
              : notification
          )
        );
        throw new Error("Failed to mark notification as read");
      }
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  const handleDismissWelcome = () => {
    if (currentUser) {
      // Mark user as welcomed so banner doesn't show again
      localStorage.setItem(`welcomed_${currentUser.id}`, 'true');
      setShowWelcomeBanner(false);
    }
  };

  const formatNotificationType = (type: string): string => {
    if (!type) return 'Unknown';
    
    switch (type) {
      case 'DEVICE_ADDED':
        return 'Device added';
      case 'WELCOME':
        return 'Welcome';
      case 'CRITICAL':
        return 'Critical';
      case 'SYSTEM':
        return 'System';
      case 'ADMIN':
        return 'Admin';
      default:
        return type.toLowerCase().replace(/_/g, ' ');
    }
  };

  const formatNotificationDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return "Just now";
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
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
            <NavItem selected onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
            <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
            <NavItem onClick={() => navigate("/support")}>Support</NavItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </HeaderNav>
        </Header>
        <LoadingContainer>Loading your devices...</LoadingContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Header>
          <HeaderLeft>
            <HouseIcon>🏠</HouseIcon>
            <AppTitle>Home Control Hub</AppTitle>
          </HeaderLeft>
          <HeaderNav>
            <NavItem onClick={() => navigate("/profile")}>Profile</NavItem>
            <NavItem selected onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
            <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
            <NavItem onClick={() => navigate("/support")}>Support</NavItem>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </HeaderNav>
        </Header>
        <ErrorContainer>
          <div>
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </ErrorContainer>
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
          <NavItem selected onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
          <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
          <NavItem onClick={() => navigate("/support")}>Support</NavItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderNav>
      </Header>

      <MainContent>
        {/* Welcome Banner for new users */}
        {showWelcomeBanner && currentUser && (
          <WelcomeBanner>
            <WelcomeBannerContent>
              <WelcomeMessage>
                <WelcomeTitle>Welcome to Home Control Hub, {currentUser.username}! 🎉</WelcomeTitle>
                <WelcomeText>
                  You can now manage and monitor all your smart devices from this dashboard. 
                  Add your devices, check their status, and receive important notifications all in one place.
                </WelcomeText>
              </WelcomeMessage>
              <DismissButton onClick={handleDismissWelcome}>
                Got it, thanks!
              </DismissButton>
            </WelcomeBannerContent>
          </WelcomeBanner>
        )}

        {devices.length === 0 ? (
          <>
            <SectionHeader>
              <SectionTitle>
                {isAdmin ? "System Overview" : "Interactive dashboard"}
              </SectionTitle>
              {/* Only show Add Device button for non-admin users */}
              {!isAdmin && <div>{/* No button for empty state when admin */}</div>}
            </SectionHeader>

            <EmptyState>
              {isAdmin ? (
                <>
                  <h3>No devices in the system</h3>
                  <p>There are currently no devices registered in the Home Control Hub system. Users can add devices to start monitoring and controlling them.</p>
                </>
              ) : (
                <>
                  <h3>No devices found</h3>
                  <p>You haven't added any devices yet. Get started by adding your first smart device!</p>
                  <AddButton onClick={handleAddDevice}>Add your first device</AddButton>
                </>
              )}
            </EmptyState>
          </>
        ) : (
          <>
            <SectionHeader>
              <SectionTitle>
                {isAdmin ? "All System Devices" : "Your Devices"}
              </SectionTitle>
              {/* Only show Add Device button for non-admin users */}
              {!isAdmin && <AddButton onClick={handleAddDevice}>Add Device</AddButton>}
            </SectionHeader>

            <DevicesTable>
            <TableHeader>
              <TableRow>
                <TableCell as="th">Device name</TableCell>
                <TableCell as="th">ID</TableCell>
                <TableCell as="th">Type</TableCell>
                <TableCell as="th">Location</TableCell>
                <TableCell as="th">Status</TableCell>
                <TableCell as="th">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell>{device.name}</TableCell>
                  <TableCell>{device.id}</TableCell>
                  <TableCell>{device.type}</TableCell>
                  <TableCell>{device.location}</TableCell>
                  <TableCell>
                    {isAdmin ? (
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
                        onClick={() => handleToggleStatus(device.id)}
                        aria-label={`Toggle ${device.name}`}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <DetailsButton onClick={() => handleDetails(device.id)}>
                      {isAdmin ? "View Details" : "Details"}
                    </DetailsButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
            </DevicesTable>
          </>
        )}

        {/* Notifications section - only for standard users */}
        {!isAdmin && (
          <>
            <SectionHeader style={{ marginTop: '3rem' }}>
              <SectionTitle>Your notifications</SectionTitle>
            </SectionHeader>

            <DevicesTable>
              <TableHeader>
                <TableRow>
                  <TableCell as="th">Message</TableCell>
                  <TableCell as="th">Type</TableCell>
                  <TableCell as="th">Time</TableCell>
                  <TableCell as="th">Status</TableCell>
                  <TableCell as="th">Actions</TableCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {notifications.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                      No notifications yet. You'll see important updates about your devices here.
                    </TableCell>
                  </TableRow>
                ) : (
                  notifications.map((notification) => (
                  <TableRow key={notification.id}>
                    <TableCell style={{ 
                      fontWeight: notification.read ? 'normal' : 'bold',
                      color: notification.read ? '#666' : '#333'
                    }}>
                      {notification.message}
                    </TableCell>
                    <TableCell style={{ textTransform: 'capitalize' }}>
                      {formatNotificationType(notification.type)}
                    </TableCell>
                    <TableCell>
                      {formatNotificationDate(notification.createdAt)}
                    </TableCell>
                    <TableCell>
                      <span style={{
                        color: notification.read ? "#4CAF50" : "#ff9800",
                        fontWeight: "bold",
                        fontSize: "0.8rem"
                      }}>
                        {notification.read ? "READ" : "UNREAD"}
                      </span>
                    </TableCell>
                    <TableCell>
                      {!notification.read && (
                        <DetailsButton onClick={() => handleMarkNotificationAsRead(notification.id)}>
                          Mark as Read
                        </DetailsButton>
                      )}
                    </TableCell>
                  </TableRow>
                  ))
                )}
              </tbody>
            </DevicesTable>
          </>
        )}
      </MainContent>
    </Container>
  );
};

export default Dashboard;

/*
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  SectionHeader,
  SectionTitle,
  AddButton,
  DevicesTable,
  TableHeader,
  TableRow,
  TableCell,
  DetailsButton,
  ToggleSwitch,
} from "./styles/Dashboard.styles";

interface Device {
  id: string;
  name: string;
  type: string;
  status: "On" | "Off";
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState<Device[]>([
    {
      id: "849084302",
      name: "Termostato Quarto",
      type: "THERMOSTAT",
      status: "On",
    },
    {
      id: "849067677",
      name: "Luz sala principal",
      type: "SMART_LIGHT",
      status: "Off",
    },
    {
      id: "849067645",
      name: "Device 3",
      type: "SMART_LIGHT",
      status: "On",
    },
    {
      id: "849086789",
      name: "Device 4",
      type: "THERMOSTAT",
      status: "Off",
    },
  ]);

  // Remove auth-page class when dashboard loads
  useEffect(() => {
    document.body.classList.remove("auth-page");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleAddDevice = () => {
    navigate("/add-device");
  };

  const handleDetails = (deviceId: string) => {
    navigate(`/device/${deviceId}`);
  };

  const handleToggleStatus = (deviceId: string) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === deviceId
          ? { ...device, status: device.status === "On" ? "Off" : "On" }
          : device
      )
    );
  };

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <HouseIcon>🏠</HouseIcon>
          <AppTitle>Home Control Hub</AppTitle>
        </HeaderLeft>
        <HeaderNav>
          <NavItem onClick={() => navigate("/profile")}>Profile</NavItem>
          <NavItem selected onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
          <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
          <NavItem onClick={() => navigate("/support")}>Support</NavItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderNav>
      </Header>

      <MainContent>
        <SectionHeader>
          <SectionTitle>Interactive dashboard</SectionTitle>
          <AddButton onClick={handleAddDevice}>Add a device</AddButton>
        </SectionHeader>

        <DevicesTable>
          <TableHeader>
            <TableRow>
              <TableCell as="th">Device name</TableCell>
              <TableCell as="th">ID</TableCell>
              <TableCell as="th">Type</TableCell>
              <TableCell as="th">Status</TableCell>
              <TableCell as="th"></TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell>{device.name}</TableCell>
                <TableCell>{device.id}</TableCell>
                <TableCell>{device.type}</TableCell>
                <TableCell>
                  <ToggleSwitch
                    checked={device.status === "On"}
                    onClick={() => handleToggleStatus(device.id)}
                    aria-label={`Toggle ${device.name}`}
                  />
                </TableCell>
                <TableCell>
                  <DetailsButton onClick={() => handleDetails(device.id)}>
                    Details
                  </DetailsButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </DevicesTable>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
*/
