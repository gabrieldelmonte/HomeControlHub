import React, { useState, ChangeEvent, FormEvent } from "react";
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
  SupportForm,
  FormGroup,
  Label,
  Select,
  Input,
  TextArea,
  FileInput,
  FileList,
  SubmitButton,
  SuccessMessage,
} from "./styles/Support.styles";
import { useNavigate } from "react-router-dom";

const SUBJECT_OPTIONS = [
  "Login Issue",
  "Device Not Responding",
  "Billing Question",
  "Feature Request",
  "Other",
];

const Support: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubjectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
    if (e.target.value !== "Other") setCustomSubject("");
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle the form submission, e.g., send to backend
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
          <NavItem selected onClick={() => navigate("/support")}>Support</NavItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderNav>
      </Header>
      <MainContent>
        <PageTitle>Contact Support</PageTitle>
        <SupportForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Select
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              required
            >
              <option value="" disabled>
                Select a subject
              </option>
              {SUBJECT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Select>
            {subject === "Other" && (
              <Input
                type="text"
                placeholder="Enter your subject"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                required
              />
            )}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Describe your problem</Label>
            <TextArea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={7}
            />
          </FormGroup>
          <FormGroup>
            <Label>Attach files (optional)</Label>
            <FileInput
              type="file"
              multiple
              onChange={handleFileChange}
            />
            {files && files.length > 0 && (
              <FileList>
                {Array.from(files).map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </FileList>
            )}
          </FormGroup>
          <SubmitButton
            type="submit"
            disabled={message.trim() === ""}
          >
            Send
          </SubmitButton>
          {submitted && (
            <SuccessMessage>
              Your message has been sent! Our support team will contact you soon.
            </SuccessMessage>
          )}
        </SupportForm>
      </MainContent>
    </Container>
  );
};

export default Support;
