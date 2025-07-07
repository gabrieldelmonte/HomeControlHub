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
  ipAddress: string;
  port: string;
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
    ipAddress: "",
    port: "",
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random success/failure for demo
      const success = Math.random() > 0.3;
      
      if (success) {
        setSubmitStatus("success");
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
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
           formData.ipAddress.trim();
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
                  <Label htmlFor="port">Port</Label>
                  <Input
                    type="text"
                    id="port"
                    name="port"
                    value={formData.port}
                    onChange={handleChange}
                    placeholder="e.g., 8080"
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="ipAddress">IP Address *</Label>
                <Input
                  type="text"
                  id="ipAddress"
                  name="ipAddress"
                  value={formData.ipAddress}
                  onChange={handleChange}
                  placeholder="e.g., 192.168.1.100"
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
                <PreviewLabel>IP Address:</PreviewLabel>
                <PreviewValue>{formData.ipAddress || "Not specified"}</PreviewValue>
              </PreviewItem>
              {formData.port && (
                <PreviewItem>
                  <PreviewLabel>Port:</PreviewLabel>
                  <PreviewValue>{formData.port}</PreviewValue>
                </PreviewItem>
              )}
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
