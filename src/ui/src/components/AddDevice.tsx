import React, { useState } from "react";
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
  PageTitle,
} from "./styles/Common.styles";
import {
  AddDeviceForm,
  FormSection,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  DevicePreview,
  PreviewCard,
  PreviewTitle,
  PreviewItem,
  PreviewLabel,
  PreviewValue,
  SuccessMessage,
  ErrorMessage,
} from "./styles/AddDevice.styles";

interface DeviceFormData {
  name: string;
  type: string;
  location: string;
  description: string;
  mqttTopic: string;
  aesKey: string;
  status: boolean;
}

const DEVICE_TYPES = [
  "Smart Light",
  "Smart Switch",
  "Smart Thermostat",
  "Smart Lock",
  "Smart Camera",
  "Smart Sensor",
  "Smart Speaker",
  "Smart TV",
  "Smart Plug",
  "Other",
];

const LOCATIONS = [
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Office",
  "Garage",
  "Garden",
  "Basement",
  "Attic",
  "Other",
];

const AddDevice: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<DeviceFormData>({
    name: "",
    type: "",
    location: "",
    description: "",
    mqttTopic: "",
    aesKey: "",
    status: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("http://localhost:8080/api/v1/devices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          type: formData.type,
          description: formData.description,
          location: formData.location,
          mqttTopic: formData.mqttTopic,
          aesKey: formData.aesKey,
          status: formData.status,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Clear any cached device data to ensure fresh fetch
        localStorage.removeItem("deviceCache");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error response:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error creating device:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const isFormValid = () => {
    return formData.name.trim() && 
           formData.type && 
           formData.location &&
           formData.mqttTopic.trim() &&
           formData.aesKey.trim();
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
          <NavItem onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
          <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
          <NavItem onClick={() => navigate("/support")}>Support</NavItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderNav>
      </Header>

      <MainContent>
        <PageTitle>Add New Device</PageTitle>

        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
          <AddDeviceForm onSubmit={handleSubmit}>
            <FormSection>
              <h3 style={{ margin: "0 0 1.5rem 0", color: "#333", fontSize: "1.3rem" }}>Device Information</h3>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">Device Name *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Living Room Light"
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="type">Device Type *</Label>
                  <Select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select device type</option>
                    {DEVICE_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Select>
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="location">Location *</Label>
                  <Select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select location</option>
                    {LOCATIONS.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="status">Current Status</Label>
                  <Select
                    id="status"
                    name="status"
                    value={formData.status.toString()}
                    onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value === 'true' }))}
                  >
                    <option value="false">Off</option>
                    <option value="true">On</option>
                  </Select>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="mqttTopic">MQTT Topic *</Label>
                <Input
                  type="text"
                  id="mqttTopic"
                  name="mqttTopic"
                  value={formData.mqttTopic}
                  onChange={handleChange}
                  placeholder="e.g., devices/livingroom/lamp"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="aesKey">Device AES Key *</Label>
                <Input
                  type="password"
                  id="aesKey"
                  name="aesKey"
                  value={formData.aesKey}
                  onChange={handleChange}
                  placeholder="Secure encryption key for device communication"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <TextArea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Optional description of the device..."
                  rows={4}
                />
              </FormGroup>
            </FormSection>

            {submitStatus === "success" && (
              <SuccessMessage>
                ✅ Device added successfully! Redirecting to dashboard...
              </SuccessMessage>
            )}

            {submitStatus === "error" && (
              <ErrorMessage>
                ❌ Failed to add device. Please check your information and try again.
              </ErrorMessage>
            )}

            <ButtonGroup>
              <SecondaryButton type="button" onClick={handleCancel}>
                Cancel
              </SecondaryButton>
              <PrimaryButton 
                type="submit" 
                disabled={!isFormValid() || isSubmitting}
              >
                {isSubmitting ? "Adding Device..." : "Add Device"}
              </PrimaryButton>
            </ButtonGroup>
          </AddDeviceForm>

          <DevicePreview>
            <PreviewCard>
              <PreviewTitle>Device Preview</PreviewTitle>
              <PreviewItem>
                <PreviewLabel>Name:</PreviewLabel>
                <PreviewValue>{formData.name || "Not specified"}</PreviewValue>
              </PreviewItem>
              <PreviewItem>
                <PreviewLabel>Type:</PreviewLabel>
                <PreviewValue>{formData.type || "Not specified"}</PreviewValue>
              </PreviewItem>
              <PreviewItem>
                <PreviewLabel>Location:</PreviewLabel>
                <PreviewValue>{formData.location || "Not specified"}</PreviewValue>
              </PreviewItem>
              <PreviewItem>
                <PreviewLabel>Status:</PreviewLabel>
                <PreviewValue>{formData.status ? "On" : "Off"}</PreviewValue>
              </PreviewItem>
              <PreviewItem>
                <PreviewLabel>MQTT Topic:</PreviewLabel>
                <PreviewValue>{formData.mqttTopic || "Not specified"}</PreviewValue>
              </PreviewItem>
              <PreviewItem>
                <PreviewLabel>AES Key:</PreviewLabel>
                <PreviewValue>{formData.aesKey ? "••••••••••••" : "Not specified"}</PreviewValue>
              </PreviewItem>
              {formData.description && (
                <PreviewItem>
                  <PreviewLabel>Description:</PreviewLabel>
                  <PreviewValue>{formData.description}</PreviewValue>
                </PreviewItem>
              )}
            </PreviewCard>
          </DevicePreview>
        </div>
      </MainContent>
    </Container>
  );
};

export default AddDevice;
