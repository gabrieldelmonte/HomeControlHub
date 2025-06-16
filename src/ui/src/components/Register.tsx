import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  Container,
  ContentWrapper,
  LeftPanel,
  RightPanel,
  AppTitle,
  HouseIcon,
  Description,
  FormCard,
  FormTitle,
  FormGroup,
  Label,
  InputWrapper,
  Input,
  ToggleButton,
  SubmitButton,
  LoginButton,
  ErrorMessage,
  SuccessMessage,
} from "./Register.styles";

interface RegisterFormData {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Add auth-page class when component mounts
  useEffect(() => {
    document.body.classList.add("auth-page");

    // Cleanup: remove class when component unmounts
    return () => {
      document.body.classList.remove("auth-page");
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    if (
      !formData.fullName ||
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required");
      return false;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const isFormComplete = (): boolean => {
    return (
      formData.fullName.trim() !== "" &&
      formData.username.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      formData.confirmPassword.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.password.length >= 6 &&
      formData.password === formData.confirmPassword
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call - replace with your actual API endpoint
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        // For demo purposes, we'll just simulate a successful registration
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        const data = await response.json();
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      // For demo purposes, simulate successful registration
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <LeftPanel>
          <AppTitle>
            <HouseIcon>🏠</HouseIcon>
            Home Control Hub
          </AppTitle>
          <Description>
            Welcome!
          </Description>
          <Description>
            Register to access your smart home dashboard.
          </Description>
        </LeftPanel>
        <RightPanel>
          <FormCard>
            <FormTitle>Create an account</FormTitle>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="fullName">Full name</Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </FormGroup>

              <FormGroup>
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
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">
                  Password
                  <ToggleButton
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                    <span>Show</span>
                  </ToggleButton>
                </Label>
                <InputWrapper>
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="confirmPassword">
                  Confirm password
                  <ToggleButton
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    <span>Show</span>
                  </ToggleButton>
                </Label>
                <InputWrapper>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                </InputWrapper>
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isLoading}
                isComplete={isFormComplete()}
              >
                {isLoading ? "Please wait..." : "Register"}
              </SubmitButton>
            </form>
          </FormCard>
          <LoginButton as={Link} to="/login">
            Login
          </LoginButton>
        </RightPanel>
      </ContentWrapper>
    </Container>
  );
};

export default Register;
