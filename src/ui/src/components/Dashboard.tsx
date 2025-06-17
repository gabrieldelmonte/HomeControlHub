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
  SectionHeader,
  SectionTitle,
  AddButton,
  DevicesTable,
  TableHeader,
  TableRow,
  TableCell,
  StatusBadge,
  DetailsButton,
  ToggleSwitch, // <-- import the new styled component
} from "./Dashboard.styles";

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
    // TODO: Implement add device functionality
    alert("Add device functionality coming soon!");
  };

  const handleDetails = (deviceId: string) => {
    // TODO: Implement device details functionality
    alert(`Device details for ${deviceId} coming soon!`);
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
