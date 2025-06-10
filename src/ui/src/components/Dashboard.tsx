import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPowerOff, FaCog, FaTrash } from 'react-icons/fa';

interface Device {
  id: string;
  name: string;
  type: string;
  status: boolean;
  lastKnownState: any;
  firmwareVersion?: string;
}

const DashboardContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const AddDeviceButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-weight: 600;
`;

const StatusBadge = styled.span<{ status: boolean }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  background-color: ${props => props.status ? '#4CAF50' : '#f44336'};
  color: white;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }

  &.delete:hover {
    color: #f44336;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Dashboard: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/devices', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch devices');
      }

      const data = await response.json();
      setDevices(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleDeviceStatus = async (deviceId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/devices/${deviceId}/toggle`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: !currentStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to toggle device status');
      }

      // Update local state
      setDevices(devices.map(device => 
        device.id === deviceId 
          ? { ...device, status: !currentStatus }
          : device
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const deleteDevice = async (deviceId: string) => {
    if (!window.confirm('Are you sure you want to delete this device?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/v1/devices/${deviceId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete device');
      }

      // Update local state
      setDevices(devices.filter(device => device.id !== deviceId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <DashboardContainer>
      <Header>
        <Title>Device Dashboard</Title>
        <AddDeviceButton>
          Add New Device
        </AddDeviceButton>
      </Header>

      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Firmware Version</TableHeaderCell>
            <TableHeaderCell>Last Known State</TableHeaderCell>
            <TableHeaderCell>Actions</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {devices.map((device) => (
            <TableRow key={device.id}>
              <TableCell>{device.name}</TableCell>
              <TableCell>{device.type}</TableCell>
              <TableCell>
                <StatusBadge status={device.status}>
                  {device.status ? 'Online' : 'Offline'}
                </StatusBadge>
              </TableCell>
              <TableCell>{device.firmwareVersion || 'N/A'}</TableCell>
              <TableCell>
                {JSON.stringify(device.lastKnownState)}
              </TableCell>
              <TableCell>
                <ActionButtons>
                  <ActionButton
                    onClick={() => toggleDeviceStatus(device.id, device.status)}
                    title="Toggle Status"
                  >
                    <FaPowerOff />
                  </ActionButton>
                  <ActionButton
                    onClick={() => {/* TODO: Implement settings */}}
                    title="Settings"
                  >
                    <FaCog />
                  </ActionButton>
                  <ActionButton
                    className="delete"
                    onClick={() => deleteDevice(device.id)}
                    title="Delete Device"
                  >
                    <FaTrash />
                  </ActionButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </DashboardContainer>
  );
};

export default Dashboard; 