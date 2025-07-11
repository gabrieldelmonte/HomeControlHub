import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaTrash, FaExclamationTriangle } from "react-icons/fa";
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
} from "./styles/Profile.styles";
import { ActionButton } from "./styles/DeviceDetails.styles";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [edit, setEdit] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Delete account state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showFinalDeleteConfirm, setShowFinalDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteConfirmationText, setDeleteConfirmationText] = useState("");

  // Fetch user profile on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch("http://localhost:8080/api/v1/users/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const userData: UserProfile = await response.json();
        setUser(userData);
        setEdit({
          username: userData.username,
          email: userData.email,
          password: "",
          confirmPassword: "",
        });
        setError(null);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to load user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Check if user has made any changes
  const hasChanges = () => {
    if (!user) return false;
    return (
      edit.username !== user.username ||
      edit.email !== user.email ||
      (changingPassword && edit.password.length > 0 && edit.password === edit.confirmPassword)
    );
  };

  // Check if passwords match
  const passwordsMatch = () => {
    return edit.password === edit.confirmPassword;
  };

  // Check if password requirements are met
  const isPasswordValid = () => {
    return edit.password.length >= 6; // You can add more requirements here
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!user || !hasChanges()) return;
    
    setSaving(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const updateData: any = {};
      
      if (edit.username !== user.username) {
        updateData.username = edit.username;
      }
      
      if (edit.email !== user.email) {
        updateData.email = edit.email;
      }
      
      if (changingPassword && edit.password.trim() !== '') {
        if (!passwordsMatch()) {
          setError("Passwords do not match");
          return;
        }
        if (!isPasswordValid()) {
          setError("Password must be at least 6 characters long");
          return;
        }
        updateData.password = edit.password;
      }

      const response = await fetch("http://localhost:8080/api/v1/users/profile", {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const updatedUser: UserProfile = await response.json();
      setUser(updatedUser);
      setEdit({
        username: updatedUser.username,
        email: updatedUser.email,
        password: "",
        confirmPassword: "",
      });
      setChangingPassword(false);
      setShowPassword(false);
      setError(null);
      
      // Show success message or notification here if desired
      
    } catch (err: any) {
      console.error("Error updating profile:", err);
      setError(err.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleCancelPasswordChange = () => {
    setChangingPassword(false);
    setEdit({ ...edit, password: "", confirmPassword: "" });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setShowFinalDeleteConfirm(false);
    setDeleteConfirmationText("");
  };

  const handleConfirmDelete = () => {
    setShowDeleteConfirm(false);
    setShowFinalDeleteConfirm(true);
  };

  const handleFinalDelete = async () => {
    if (deleteConfirmationText !== user?.username) {
      setError("Username confirmation does not match. Please try again.");
      return;
    }

    setDeleting(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("http://localhost:8080/api/v1/users/profile", {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Clear local storage and redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
      } else {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to delete account");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      setError("Failed to delete account. Please try again.");
    } finally {
      setDeleting(false);
      setShowFinalDeleteConfirm(false);
      setDeleteConfirmationText("");
    }
  };

  // Show loading state
  if (loading) {
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
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Loading profile...</p>
          </div>
        </MainContent>
      </Container>
    );
  }

  // Show error state
  if (error || !user) {
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
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ color: 'red' }}>{error || "Failed to load user profile"}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
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
          <UserName>{user.username}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserInfoSection>

        {error && (
          <div style={{ 
            backgroundColor: '#fee', 
            color: '#c33', 
            padding: '1rem', 
            borderRadius: '4px', 
            margin: '1rem 0',
            border: '1px solid #fcc'
          }}>
            {error}
          </div>
        )}

        <ProfileForm
          onSubmit={e => { e.preventDefault(); handleSave(); }}
        >
          <InfoTable>
            <tbody>
              <tr>
                <InfoLabel disabled>Creation date</InfoLabel>
                <InfoValue disabled>{formatDate(user.createdAt)}</InfoValue>
              </tr>
              <tr>
                <InfoLabel disabled>Last updated</InfoLabel>
                <InfoValue disabled>{formatDate(user.updatedAt)}</InfoValue>
              </tr>
              <tr>
                <InfoLabel disabled>User ID</InfoLabel>
                <InfoValue disabled>{user.id}</InfoValue>
              </tr>
              <tr>
                <InfoLabel disabled>Role</InfoLabel>
                <InfoValue disabled style={{ textTransform: 'capitalize' }}>
                  {user.role.toLowerCase().replace('_', ' ')}
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
                <InfoLabel>Password</InfoLabel>
                <InfoValue>
                  <PasswordFieldWrapper>
                    {changingPassword ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <PasswordInputWrapper style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={edit.password}
                            onChange={handleChange}
                            placeholder="Enter new password"
                            style={{
                              borderColor: changingPassword && edit.password && !isPasswordValid() ? '#dc3545' : undefined,
                              flex: 1
                            }}
                          />
                          <PasswordToggleButton
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </PasswordToggleButton>
                          {/* Invisible placeholder to match the Cancel button width */}
                          <div style={{ 
                            width: '104px', // Approximate width of Cancel button
                            visibility: 'hidden' 
                          }}></div>
                        </PasswordInputWrapper>
                        
                        <PasswordInputWrapper style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={edit.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm new password"
                            style={{
                              borderColor: changingPassword && edit.confirmPassword && !passwordsMatch() ? '#dc3545' : 
                                         changingPassword && edit.confirmPassword && passwordsMatch() ? '#28a745' : undefined,
                              flex: 1
                            }}
                          />
                          <PasswordToggleButton
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </PasswordToggleButton>
                          <SmallButton
                            type="button"
                            onClick={handleCancelPasswordChange}
                            style={{ 
                              background: "#f5f5f5",
                              color: "#333"
                            }}
                          >
                            Cancel
                          </SmallButton>
                        </PasswordInputWrapper>

                        {changingPassword && edit.password && !isPasswordValid() && (
                          <div style={{ color: '#dc3545', fontSize: '0.8rem' }}>
                            Password must be at least 6 characters long
                          </div>
                        )}

                        {changingPassword && edit.confirmPassword && !passwordsMatch() && (
                          <div style={{ color: '#dc3545', fontSize: '0.8rem' }}>
                            Passwords do not match
                          </div>
                        )}

                        {changingPassword && edit.confirmPassword && passwordsMatch() && isPasswordValid() && (
                          <div style={{ color: '#28a745', fontSize: '0.8rem' }}>
                            ✓ Passwords match
                          </div>
                        )}
                      </div>
                    ) : (
                      <PasswordDisplay isVisible={false}>
                        ********
                      </PasswordDisplay>
                    )}

                    {!changingPassword && (
                      <SmallButton
                        type="button"
                        onClick={() => setChangingPassword(true)}
                      >
                        Change password
                      </SmallButton>
                    )}
                  </PasswordFieldWrapper>
                </InfoValue>
              </tr>
            </tbody>
          </InfoTable>
          
          <ButtonContainer>
            <Button type="submit" isEnabled={hasChanges() && !saving}>
              {saving ? "Saving..." : "Save changes"}
            </Button>
          </ButtonContainer>
        </ProfileForm>

        {/* Danger Zone Section */}
        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          background: '#fff5f5', 
          border: '2px solid #fed7d7', 
          borderRadius: '12px' 
        }}>
          <h3 style={{ 
            color: '#c53030', 
            margin: '0 0 1rem 0', 
            fontSize: '1.3rem', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaExclamationTriangle /> Danger Zone
          </h3>
          <p style={{ 
            color: '#744210', 
            margin: '0 0 1.5rem 0', 
            fontSize: '0.95rem',
            lineHeight: '1.5'
          }}>
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button 
            type="button" 
            onClick={handleDeleteAccount}
            style={{
              background: '#dc3545',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <FaTrash /> Delete Account
          </Button>
        </div>

        {/* First Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <FaExclamationTriangle style={{ color: '#dc3545', fontSize: '3rem', marginBottom: '1rem' }} />
                <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Delete Account</h3>
                <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
                  Are you sure you want to delete your account <strong>{user?.username}</strong>?
                </p>
                <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem' }}>
                  This action will:
                </p>
                <ul style={{ 
                  margin: '0 0 1rem 0', 
                  paddingLeft: '1.5rem', 
                  textAlign: 'left',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  <li>Permanently delete your account</li>
                  <li>Delete all your devices and their data</li>
                  <li>Remove all automation rules</li>
                  <li>Delete all device logs and history</li>
                  <li>Unsubscribe from all MQTT topics</li>
                </ul>
                <p style={{ margin: '0', color: '#dc3545', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  This action cannot be undone!
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <ActionButton 
                  onClick={handleCancelDelete} 
                  variant="cancel"
                  disabled={deleting}
                  style={{ minWidth: '100px' }}
                >
                  Cancel
                </ActionButton>
                <ActionButton 
                  onClick={handleConfirmDelete} 
                  variant="danger"
                  disabled={deleting}
                  style={{ minWidth: '100px' }}
                >
                  Continue
                </ActionButton>
              </div>
            </div>
          </div>
        )}

        {/* Final Delete Confirmation Modal */}
        {showFinalDeleteConfirm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <FaExclamationTriangle style={{ color: '#dc3545', fontSize: '3rem', marginBottom: '1rem' }} />
                <h3 style={{ margin: '0 0 1rem 0', color: '#333' }}>Final Confirmation</h3>
                <p style={{ margin: '0 0 1rem 0', color: '#666' }}>
                  This is your final warning. To confirm account deletion, please type your username:
                </p>
                <p style={{ margin: '0 0 1rem 0', color: '#666', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  <strong>{user?.username}</strong>
                </p>
                <Input
                  type="text"
                  value={deleteConfirmationText}
                  onChange={(e) => setDeleteConfirmationText(e.target.value)}
                  placeholder="Type your username to confirm"
                  style={{
                    width: '100%',
                    marginBottom: '1rem',
                    borderColor: deleteConfirmationText && deleteConfirmationText !== user?.username ? '#dc3545' : undefined
                  }}
                />
                {deleteConfirmationText && deleteConfirmationText !== user?.username && (
                  <p style={{ color: '#dc3545', fontSize: '0.9rem', margin: '0 0 1rem 0' }}>
                    Username does not match
                  </p>
                )}
                <p style={{ margin: '0', color: '#dc3545', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  This will permanently delete your account and all associated data!
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <ActionButton 
                  onClick={handleCancelDelete} 
                  variant="cancel"
                  disabled={deleting}
                  style={{ minWidth: '100px' }}
                >
                  Cancel
                </ActionButton>
                <ActionButton 
                  onClick={handleFinalDelete} 
                  variant="danger"
                  disabled={deleteConfirmationText !== user?.username || deleting}
                  style={{ minWidth: '100px', opacity: deleteConfirmationText !== user?.username || deleting ? 0.6 : 1, cursor: deleteConfirmationText !== user?.username || deleting ? 'not-allowed' : 'pointer' }}
                >
                  {deleting ? 'Deleting...' : 'Delete Account'}
                </ActionButton>
              </div>
            </div>
          </div>
        )}
      </MainContent>
    </Container>
  );
};

export default Profile;
