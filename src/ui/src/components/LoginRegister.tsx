import React, { useState } from 'react';
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
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
}

const LoginRegister: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    if (!formData.email || !formData.password) {
      setError('Email and password are required');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (activeTab === 'login') {
        setSuccess('Login successful! Welcome back.');
        // Here you would typically redirect to dashboard
      } else {
        setSuccess('Registration successful! Please check your email.');
        // Switch to login tab after successful registration
        setTimeout(() => {
          setActiveTab('login');
          setSuccess('');
          setFormData({ email: formData.email, password: '', confirmPassword: '', name: '' });
        }, 2000);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const switchTab = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    setError('');
    setSuccess('');
    setFormData({ email: '', password: '', confirmPassword: '', name: '' });
  };

  const handleForgotPassword = () => {
    setError('');
    setSuccess('Password reset link has been sent to your email.');
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
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
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
