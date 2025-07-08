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
  EmptyState
} from "./styles/Dashboard.styles";

interface Device {
  id: string;
  name: string;
  type: string;
  status: boolean;
  aesKey?: string;
  lastKnownState?: any;
  firmwareVersion?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Remove auth-page class when dashboard loads
  useEffect(() => {
    document.body.classList.remove("auth-page");
  }, []);

  // Fetch user's devices
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch("http://localhost:8080/api/v1/devices", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          // Token is invalid, redirect to login
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setDevices(data);
      } catch (err) {
        console.error("Error fetching devices:", err);
        setError("Failed to load devices. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, [navigate]);

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
    } catch (err) {
      console.error("Error toggling device status:", err);
      // The optimistic update has already been reverted above
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
        {devices.length === 0 ? (
          <>
            <SectionHeader>
              <SectionTitle>Interactive dashboard</SectionTitle>
              {/* No button */}
            </SectionHeader>

            <EmptyState>
              <h3>No devices found</h3>
              <p>You haven't added any devices yet. Get started by adding your first smart device!</p>
              <AddButton onClick={handleAddDevice}>Add your first device</AddButton>
            </EmptyState>
          </>
        ) : (
          <DevicesTable>
            <TableHeader>
              <TableRow>
                <TableCell as="th">Device name</TableCell>
                <TableCell as="th">ID</TableCell>
                <TableCell as="th">Type</TableCell>
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
                  <TableCell>
                    <ToggleSwitch
                      checked={device.status}
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
