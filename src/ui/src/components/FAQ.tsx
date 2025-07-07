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
