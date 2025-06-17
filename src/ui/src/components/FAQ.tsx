import React, { useState } from "react";
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

const faqData = [
  {
    question: "What is Home Control Hub?",
    answer:
      "Home Control Hub is a platform that allows you to manage and monitor your smart home devices from a single dashboard.",
  },
  {
    question: "How do I add a new device?",
    answer:
      "Go to the Dashboard page and click on 'Add a device'. Follow the instructions to connect your new device.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use industry-standard encryption and security practices to keep your data safe.",
  },
  {
    question: "Can I control my devices remotely?",
    answer:
      "Absolutely! As long as you have an internet connection, you can control your devices from anywhere.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "You can reach our support team via the 'Support' link in the header navigation.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Go to the login page and click on 'Forget your password?'. Follow the instructions to reset your password.",
  },
];

const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleToggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
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
          <NavItem selected onClick={() => navigate("/faq")}>FAQ</NavItem>
          <NavItem onClick={() => navigate("/support")}>Support</NavItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </HeaderNav>
      </Header>
      <MainContent>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {faqData.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div key={idx} style={{ marginBottom: "1.5rem", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.06)", background: "#fff" }}>
                <button
                  onClick={() => handleToggle(idx)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "1.25rem 1.5rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: isOpen ? "1px solid #eee" : "none",
                    borderRadius: isOpen ? "8px 8px 0 0" : "8px",
                    transition: "background 0.2s"
                  }}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span style={{ fontSize: "1.5rem", marginLeft: 12, transition: "transform 0.3s" }}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.8s cubic-bezier(.4,2,.3,1), opacity 0.6s",
                    padding: isOpen ? "1.25rem 1.5rem" : "0 1.5rem",
                    fontSize: "1rem",
                    color: "#444",
                    background: "#fafbfc",
                    borderRadius: "0 0 8px 8px",
                    borderTop: isOpen ? "1px solid #eee" : "none"
                  }}
                >
                  {isOpen && item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </MainContent>
    </Container>
  );
};

export default FAQ;
