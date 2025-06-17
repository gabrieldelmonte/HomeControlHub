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
} from "./Dashboard.styles";
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
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Contact Support</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: 600,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <div>
            <label htmlFor="subject" style={{ fontWeight: 600, marginBottom: 8, display: "block" }}>
              Subject
            </label>
            <select
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: 6,
                border: "1px solid #e0e0e0",
                fontSize: "1rem",
                marginBottom: subject === "Other" ? 12 : 0,
              }}
            >
              <option value="" disabled>
                Select a subject
              </option>
              {SUBJECT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {subject === "Other" && (
              <input
                type="text"
                placeholder="Enter your subject"
                value={customSubject}
                onChange={(e) => setCustomSubject(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  borderRadius: 6,
                  border: "1px solid #e0e0e0",
                  fontSize: "1rem",
                  marginTop: 8,
                }}
              />
            )}
          </div>
          <div>
            <label htmlFor="message" style={{ fontWeight: 600, marginBottom: 8, display: "block" }}>
              Describe your problem
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={7}
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: 6,
                border: "1px solid #e0e0e0",
                fontSize: "1rem",
                resize: "vertical",
              }}
            />
          </div>
          <div>
            <label style={{ fontWeight: 600, marginBottom: 8, display: "block" }}>
              Attach files (optional)
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              style={{ fontSize: "1rem" }}
            />
            {files && files.length > 0 && (
              <ul style={{ marginTop: 8, fontSize: "0.95rem", color: "#555" }}>
                {Array.from(files).map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            disabled={message.trim() === ""}
            style={{
              background: message.trim() === "" ? "#ccc" : "linear-gradient(135deg, #ff7f50 0%,rgb(255, 157, 53) 50%, #40e0d0 100%)",
              color: "white",
              border: "none",
              borderRadius: 6,
              padding: "0.9rem 1.5rem",
              fontSize: "1.1rem",
              fontWeight: 600,
              cursor: message.trim() === "" ? "not-allowed" : "pointer",
              marginTop: 8,
              transition: "background 0.2s",
            }}
          >
            Send
          </button>
          {submitted && (
            <div style={{ color: "#28a745", fontWeight: 600, textAlign: "center", marginTop: 12 }}>
              Your message has been sent! Our support team will contact you soon.
            </div>
          )}
        </form>
      </MainContent>
    </Container>
  );
};

export default Support;
