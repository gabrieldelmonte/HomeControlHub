import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
  InfoTable,
  InfoLabel,
  InfoValue,
  Input,
  Button,
  SmallButton,
  PasswordFieldWrapper,
  PasswordInputWrapper,
  PasswordToggleButton,
  UserInfoSection,
  UserName,
  UserEmail,
  ProfileForm,
  ButtonContainer,
  PasswordDisplay,
  PasswordWarning,
  ShowPasswordButton,
} from "./styles/Profile.styles";
import { useNavigate } from "react-router-dom";

const mockUser = {
  id: "USR-20240616-001",
  name: "Gabriel Del Monte",
  email: "gabriel@email.com",
  username: "gabriel.delmonte",
  created: "2024-01-15",
  password: "********",
};

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(mockUser);
  const [edit, setEdit] = useState({
    name: user.name,
    email: user.email,
    username: user.username,
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [showActualPassword, setShowActualPassword] = useState(false);
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);

  // Check if user has made any changes
  const hasChanges = () => {
    return (
      edit.name !== user.name ||
      edit.email !== user.email ||
      edit.username !== user.username ||
      (changingPassword && edit.password.length > 0)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...user, ...edit, password: edit.password ? "********" : user.password });
    setChangingPassword(false);
    setEdit({ ...edit, password: "" });
    setShowPassword(false);
    // Here you would send the updated info to the backend
  };

  const handleCancelPasswordChange = () => {
    setChangingPassword(false);
    setEdit({ ...edit, password: "" });
    setShowPassword(false);
  };

  const handleShowActualPassword = () => {
    if (!showActualPassword) {
      setShowPasswordWarning(true);
    } else {
      setShowActualPassword(false);
      setShowPasswordWarning(false);
    }
  };

  const confirmShowPassword = () => {
    setShowActualPassword(true);
    setShowPasswordWarning(false);
  };

  const cancelShowPassword = () => {
    setShowPasswordWarning(false);
  };

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <HouseIcon>🏠</HouseIcon>
          <AppTitle>Home Control Hub</AppTitle>
        </HeaderLeft>
        <HeaderNav>
          <NavItem selected onClick={() => navigate("/profile")}>Profile</NavItem>
          <NavItem onClick={() => navigate("/dashboard")}>Dashboard</NavItem>
          <NavItem onClick={() => navigate("/faq")}>FAQ</NavItem>
          <NavItem onClick={() => navigate("/support")}>Support</NavItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderNav>
      </Header>
      <MainContent>
        <SectionHeader>
          <SectionTitle>Personal information</SectionTitle>
        </SectionHeader>
        
        <UserInfoSection>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserInfoSection>

        {showPasswordWarning && (
          <div style={{ width: "100%", margin: "0 auto" }}>
            <PasswordWarning>
              ⚠️ Your actual password will be displayed. Are you sure you want to continue?
              <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={confirmShowPassword}
                  style={{
                    background: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8rem",
                    cursor: "pointer"
                  }}
                >
                  Yes, show it
                </button>
                <button
                  onClick={cancelShowPassword}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8rem",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>
              </div>
            </PasswordWarning>
          </div>
        )}

        <ProfileForm
          onSubmit={e => { e.preventDefault(); handleSave(); }}
        >
          <InfoTable>
            <tbody>
              <tr>
                <InfoLabel disabled>Creation date</InfoLabel>
                <InfoValue disabled>{user.created}</InfoValue>
              </tr>
              <tr>
                <InfoLabel disabled>User ID</InfoLabel>
                <InfoValue disabled>{user.id}</InfoValue>
              </tr>
              <tr>
                <InfoLabel>Name</InfoLabel>
                <InfoValue>
                  <Input
                    type="text"
                    name="name"
                    value={edit.name}
                    onChange={handleChange}
                  />
                </InfoValue>
              </tr>
              <tr>
                <InfoLabel>E-mail</InfoLabel>
                <InfoValue>
                  <Input
                    type="email"
                    name="email"
                    value={edit.email}
                    onChange={handleChange}
                  />
                </InfoValue>
              </tr>
              <tr>
                <InfoLabel>Username</InfoLabel>
                <InfoValue>
                  <Input
                    type="text"
                    name="username"
                    value={edit.username}
                    onChange={handleChange}
                  />
                </InfoValue>
              </tr>
              <tr>
                <InfoLabel>Password</InfoLabel>
                <InfoValue>
                  <PasswordFieldWrapper>
                    {changingPassword ? (
                      <PasswordInputWrapper>
                        <Input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={edit.password}
                          onChange={handleChange}
                          placeholder="Enter new password"
                        />
                      </PasswordInputWrapper>
                    ) : (
                      <PasswordDisplay isVisible={showActualPassword}>
                        {showActualPassword ? "MySecurePassword123!" : user.password}
                      </PasswordDisplay>
                    )}
                    
                    {!changingPassword && (
                      <ShowPasswordButton
                        type="button"
                        onClick={handleShowActualPassword}
                      >
                        {showActualPassword ? "Hide" : "Show"}
                      </ShowPasswordButton>
                    )}

                    <SmallButton
                      type="button"
                      onClick={changingPassword ? handleCancelPasswordChange : () => setChangingPassword(true)}
                      style={{ 
                        background: changingPassword ? "#f5f5f5" : undefined, 
                        color: changingPassword ? "#333" : undefined 
                      }}
                    >
                      {changingPassword ? "Cancel" : "Change password"}
                    </SmallButton>
                    
                    {changingPassword && (
                      <PasswordToggleButton
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                        <span>Show</span>
                      </PasswordToggleButton>
                    )}
                  </PasswordFieldWrapper>
                </InfoValue>
              </tr>
            </tbody>
          </InfoTable>
          
          <ButtonContainer>
            <Button type="submit" isEnabled={hasChanges()}>
              Save changes
            </Button>
          </ButtonContainer>
        </ProfileForm>
      </MainContent>
    </Container>
  );
};

export default Profile;
