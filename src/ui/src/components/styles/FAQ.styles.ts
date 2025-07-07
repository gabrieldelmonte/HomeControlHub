import styled from "styled-components";

export const FAQContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background: #fff;
`;

export const FAQQuestion = styled.button<{ isOpen: boolean }>`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.25rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ isOpen }) => isOpen ? "1px solid #eee" : "none"};
  border-radius: ${({ isOpen }) => isOpen ? "8px 8px 0 0" : "8px"};
  transition: background 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const FAQIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.5rem;
  margin-left: 12px;
  transition: transform 0.3s;
  transform: ${({ isOpen }) => isOpen ? "rotate(0deg)" : "rotate(0deg)"};
`;

export const FAQAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => isOpen ? "200px" : "0"};
  opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
  overflow: hidden;
  transition: max-height 0.8s cubic-bezier(0.4, 2, 0.3, 1), opacity 0.6s;
  padding: ${({ isOpen }) => isOpen ? "1.25rem 1.5rem" : "0 1.5rem"};
  font-size: 1rem;
  color: #444;
  background: #fafbfc;
  border-radius: 0 0 8px 8px;
  border-top: ${({ isOpen }) => isOpen ? "1px solid #eee" : "none"};
`;
