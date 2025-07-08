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
  ForgotLink,
  CreateAccountButton,
  ErrorMessage,
  SuccessMessage,
} from "./styles/Login.styles";

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Clear any existing token when the login page loads and add auth-page class
  useEffect(() => {
    localStorage.removeItem("token");
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
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
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

    return true;
  };

  const isFormComplete = (): boolean => {
    return (
      formData.email.trim() !== "" &&
      formData.password.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.password.length >= 6
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Make real API call to backend
      //const response = await fetch("/api/v1/auth/login", {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store token and user info
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setSuccess("Login successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setError("");
    setSuccess("Password reset functionality coming soon.");
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
            Welcome back!
          </Description>
          <Description>
            Please log in to access your smart home dashboard.
          </Description>
        </LeftPanel>

        <RightPanel>
          <FormCard>
            <FormTitle>Login</FormTitle>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="email">Your email</Label>
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
                  Your password
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

              <SubmitButton
                type="submit"
                disabled={isLoading}
                isComplete={isFormComplete()}
              >
                {isLoading ? "Please wait..." : "Log in"}
              </SubmitButton>

              <ForgotLink onClick={handleForgotPassword}>
                Forget your password?
              </ForgotLink>
            </form>
          </FormCard>

          <CreateAccountButton as={Link} to="/register">
            Create an account
          </CreateAccountButton>
        </RightPanel>
      </ContentWrapper>
    </Container>
  );
};

export default Login;
