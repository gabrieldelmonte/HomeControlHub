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
  PageTitle,
} from "./styles/Common.styles";
import {
  FAQContainer,
  FAQItem,
  FAQQuestion,
  FAQIcon,
  FAQAnswer,
} from "./styles/FAQ.styles";
import { useNavigate } from "react-router-dom";

const faqData = [
  {
    question: "What is Home Control Hub and what makes it unique?",
    answer:
      "Home Control Hub is a unified smart home dashboard that lets you manage, automate, and monitor all your IoT devices in one place. Unlike generic dashboards, it features robust automation, real-time MQTT integration, granular user roles, and a built-in support ticketing system with file attachments.",
  },
  {
    question: "How does device integration work? What types of devices are supported?",
    answer:
      "You can add any device that supports MQTT or is compatible with our API. The platform is designed to be extensible, so you can register custom devices, define their commands, and manage them securely.",
  },
  {
    question: "How does Home Control Hub ensure my data is secure?",
    answer:
      "We use industry-standard encryption for all sensitive data, both in transit and at rest. User authentication is token-based, and device credentials are stored securely. Only authorized users can access or control devices.",
  },
  {
    question: "Can I automate device actions? How do automation rules work?",
    answer:
      "Yes! You can create automation rules that trigger device actions based on conditions (like time, device status, or sensor values). Rules are managed per device and can be enabled or disabled at any time.",
  },
  {
    question: "What is MQTT and why does the platform use it?",
    answer:
      "MQTT is a lightweight messaging protocol ideal for IoT. Home Control Hub uses MQTT for real-time device communication, allowing instant status updates and command delivery between the dashboard and your devices.",
  },
  {
    question: "How do support tickets and file attachments work?",
    answer:
      "You can create support tickets directly from the dashboard, attach files (like screenshots or logs), and track their status. Admins can view, manage, and respond to all tickets, including downloading attached files stored securely in the database.",
  },
  {
    question: "What happens if I delete my account or a device?",
    answer:
      "Deleting your account will remove all your devices, automation rules, and support tickets. Deleting a device will also unsubscribe it from MQTT topics and remove related automation rules.",
  },
  {
    question: "What are the differences between admin and regular user accounts?",
    answer:
      "Admins can view and manage all users, devices, and support tickets, but cannot create tickets themselves. Regular users can only manage their own devices and tickets. Admins have view-only access to user devices and automation rules.",
  },
  {
    question: "How are notifications and system logs managed?",
    answer:
      "The system generates notifications for important events (like device status changes or ticket updates). System logs track actions for auditing and troubleshooting, and are accessible to admins for monitoring platform health.",
  },
  {
    question: "How can I request new features or contribute to the project?",
    answer:
      "We welcome feedback and contributions! Use the support ticket system for feature requests, or contact the admin for collaboration opportunities. The project is designed to be extensible and community-driven.",
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
        <PageTitle>Frequently Asked Questions</PageTitle>
        <FAQContainer>
          {faqData.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <FAQItem key={idx}>
                <FAQQuestion
                  onClick={() => handleToggle(idx)}
                  isOpen={isOpen}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <FAQIcon isOpen={isOpen}>
                    {isOpen ? "−" : "+"}
                  </FAQIcon>
                </FAQQuestion>
                <FAQAnswer isOpen={isOpen}>
                  {isOpen && item.answer}
                </FAQAnswer>
              </FAQItem>
            );
          })}
        </FAQContainer>
      </MainContent>
    </Container>
  );
};

export default FAQ;
