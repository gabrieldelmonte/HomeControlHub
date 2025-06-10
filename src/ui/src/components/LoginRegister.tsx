import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormCard,
  Header,
  Logo,
  Subtitle,
  TabContainer,
  Tab,
  Form,
  InputGroup,
  Label,
  Input,
  SubmitButton,
  SecondaryButton,
  Divider,
  ErrorMessage,
  SuccessMessage
} from './LoginRegister.styles';

interface FormData {
  username: string;
  password: string;
  confirmPassword?: string;
  name?: string;
}

const LoginRegister: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Clear any existing token when the login page loads
  useEffect(() => {
    console.log('Current token:', localStorage.getItem('token'));
    localStorage.removeItem('token');
    console.log('Token after removal:', localStorage.getItem('token'));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = (): boolean => {
    if (!formData.username || !formData.password) {
      setError('Username and password are required');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long!');
      return false;
    }

    if (activeTab === 'register') {
      if (!formData.name) {
        setError('Name is required');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const endpoint = activeTab === 'login' ? '/api/v1/auth/login' : '/api/v1/auth/register';
      const response = await fetch(`http://localhost:3000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          ...(activeTab === 'register' && { name: formData.name })
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (activeTab === 'login') {
        // Store the token
        localStorage.setItem('token', data.token);
        setSuccess('Login successful!');
        // Force a page reload to ensure proper state update
        window.location.href = '/dashboard';
      } else {
        setSuccess('Registration successful! Please log in.');
        // Switch to login tab after successful registration
        setTimeout(() => {
          setActiveTab('login');
          setSuccess('');
          setFormData({ username: formData.username, password: '', confirmPassword: '', name: '' });
        }, 2000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const switchTab = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    setError('');
    setSuccess('');
    setFormData({ username: '', password: '', confirmPassword: '', name: '' });
  };

  const handleForgotPassword = () => {
    setError('');
    setSuccess('Password reset functionality coming soon.');
  };

  return (
    <Container>
      <FormCard>
        <Header>
          <Logo>🏠 Home Control Hub</Logo>
          <Subtitle>Smart home management made simple</Subtitle>
        </Header>

        <TabContainer>
          <Tab 
            active={activeTab === 'login'} 
            onClick={() => switchTab('login')}
            type="button"
          >
            Login
          </Tab>
          <Tab 
            active={activeTab === 'register'} 
            onClick={() => switchTab('register')}
            type="button"
          >
            Register
          </Tab>
        </TabContainer>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          {activeTab === 'register' && (
            <InputGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name || ''}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </InputGroup>
          )}

          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </InputGroup>

          {activeTab === 'register' && (
            <InputGroup>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword || ''}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
              />
            </InputGroup>
          )}

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Please wait...' : activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </SubmitButton>

          {activeTab === 'login' && (
            <>
              <Divider>
                <span>or</span>
              </Divider>
              <SecondaryButton type="button" onClick={handleForgotPassword}>
                Forgot Password?
              </SecondaryButton>
            </>
          )}
        </Form>
      </FormCard>
    </Container>
  );
};

export default LoginRegister;
