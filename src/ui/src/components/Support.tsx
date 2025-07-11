import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
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
  TicketPanel,
  TicketHeader,
  TicketTitle,
  TicketStats,
  StatItem,
  TicketList,
  TicketItem,
  TicketSubject,
  TicketMeta,
  TicketPriority,
  TicketStatus,
  TicketMessage,
  TicketDate,
  EmptyState,
  EmptyStateIcon,
  EmptyStateText,
  LoadingSpinner,
  ErrorMessage,
  PrioritySelect,
  StatusSelect,
  AdminNotes,
  AdminNotesTextarea,
  UpdateButton,
} from "./styles/Support.styles";
import { useNavigate } from "react-router-dom";
import { FaTicketAlt, FaClock, FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaUser, FaEdit } from "react-icons/fa";

const SUBJECT_OPTIONS = [
  "Login Issue",
  "Device Not Responding",
  "Billing Question",
  "Feature Request",
  "Other",
];

interface SupportTicket {
  id: string;
  subject: string;
  message: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  userId: string;
  attachments: string[];
  adminNotes?: string;
  resolvedAt?: string;
  createdAt: string;
  updatedAt: string;
  user?: {
    id: string;
    username: string;
    email: string;
  };
}

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

const Support: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [customSubject, setCustomSubject] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState<"LOW" | "MEDIUM" | "HIGH" | "URGENT">("MEDIUM");
  const [files, setFiles] = useState<FileList | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(false);
  const [ticketsLoading, setTicketsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ticketsError, setTicketsError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [editingTicket, setEditingTicket] = useState<string | null>(null);
  const [newStatus, setNewStatus] = useState<string>("");
  const [adminNotes, setAdminNotes] = useState<string>("");
  const [updatingTicket, setUpdatingTicket] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch user info and tickets on component mount
  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (user) {
      fetchTickets();
    }
  }, [user]);

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("http://localhost:8080/api/v1/users/profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const userData: User = await response.json();
      setUser(userData);
    } catch (err) {
      console.error("Error fetching user info:", err);
      navigate("/login");
    }
  };

  const fetchTickets = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      // Admin fetches all tickets, regular users fetch their own
      const endpoint = user?.role === "ADMIN" 
        ? "http://localhost:8080/api/v1/support/tickets/all"
        : "http://localhost:8080/api/v1/support/tickets";

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const ticketsData: SupportTicket[] = await response.json();
      setTickets(ticketsData);
      setTicketsError(null);
    } catch (err) {
      console.error("Error fetching tickets:", err);
      setTicketsError("Failed to load tickets");
    } finally {
      setTicketsLoading(false);
    }
  };

  const handleSubjectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
    if (e.target.value !== "Other") setCustomSubject("");
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const finalSubject = subject === "Other" ? customSubject : subject;
      if (!finalSubject || !message.trim()) {
        setError("Please fill in all required fields");
        return;
      }

      const ticketData = {
        subject: finalSubject,
        message: message.trim(),
        priority,
        attachments: files ? Array.from(files).map(file => file.name) : [],
      };

      const response = await fetch("http://localhost:8080/api/v1/support/tickets", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticketData),
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const newTicket: SupportTicket = await response.json();
      setTickets(prev => [newTicket, ...prev]);
      setSubmitted(true);
      
      // Reset form
      setSubject("");
      setCustomSubject("");
      setMessage("");
      setPriority("MEDIUM");
      setFiles(null);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err: any) {
      console.error("Error creating ticket:", err);
      setError(err.message || "Failed to create ticket");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTicket = async (ticketId: string) => {
    setUpdatingTicket(ticketId);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const updateData: any = {};
      if (newStatus) updateData.status = newStatus;
      if (adminNotes.trim()) updateData.adminNotes = adminNotes.trim();

      const response = await fetch(`http://localhost:8080/api/v1/support/tickets/${ticketId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const updatedTicket: SupportTicket = await response.json();
      setTickets(prev => prev.map(ticket => 
        ticket.id === ticketId ? updatedTicket : ticket
      ));
      
      // Reset editing state
      setEditingTicket(null);
      setNewStatus("");
      setAdminNotes("");
    } catch (err: any) {
      console.error("Error updating ticket:", err);
      setError(err.message || "Failed to update ticket");
    } finally {
      setUpdatingTicket(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN': return '#ffc107';
      case 'IN_PROGRESS': return '#17a2b8';
      case 'RESOLVED': return '#28a745';
      case 'CLOSED': return '#6c757d';
      default: return '#e0e0e0';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'OPEN': return <FaClock />;
      case 'IN_PROGRESS': return <FaExclamationTriangle />;
      case 'RESOLVED': return <FaCheckCircle />;
      case 'CLOSED': return <FaTimesCircle />;
      default: return <FaClock />;
    }
  };

  const ticketStats = {
    open: tickets.filter(t => t.status === 'OPEN').length,
    inProgress: tickets.filter(t => t.status === 'IN_PROGRESS').length,
    resolved: tickets.filter(t => t.status === 'RESOLVED').length,
    closed: tickets.filter(t => t.status === 'CLOSED').length,
  };

  const isAdmin = user?.role === "ADMIN";

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
        <PageTitle>
          {isAdmin ? "Support Ticket Management" : "Contact Support"}
        </PageTitle>
        
        {/* Support Form - Only for non-admin users */}
        {!isAdmin && (
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
              <Label htmlFor="priority">Priority</Label>
              <PrioritySelect
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
              >
                <option value="LOW">Low</option>
                <option value="MEDIUM">Medium</option>
                <option value="HIGH">High</option>
                <option value="URGENT">Urgent</option>
              </PrioritySelect>
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
              disabled={message.trim() === "" || loading}
            >
              {loading ? "Creating..." : "Create Ticket"}
            </SubmitButton>
            
            {error && (
              <ErrorMessage>
                {error}
              </ErrorMessage>
            )}
            
            {submitted && (
              <SuccessMessage>
                Your ticket has been created successfully! We'll get back to you soon.
              </SuccessMessage>
            )}
          </SupportForm>
        )}

        {/* Tickets Panel */}
        <TicketPanel>
          <TicketHeader>
            <TicketTitle>
              {isAdmin ? "All Support Tickets" : "Support Tickets"}
            </TicketTitle>
            <TicketStats>
              <StatItem color="#ffc107">
                {getStatusIcon('OPEN')} {ticketStats.open} Open
              </StatItem>
              <StatItem color="#17a2b8">
                {getStatusIcon('IN_PROGRESS')} {ticketStats.inProgress} In Progress
              </StatItem>
              <StatItem color="#28a745">
                {getStatusIcon('RESOLVED')} {ticketStats.resolved} Resolved
              </StatItem>
              <StatItem color="#6c757d">
                {getStatusIcon('CLOSED')} {ticketStats.closed} Closed
              </StatItem>
            </TicketStats>
          </TicketHeader>

          {ticketsLoading ? (
            <LoadingSpinner>
              Loading tickets...
            </LoadingSpinner>
          ) : ticketsError ? (
            <ErrorMessage>
              {ticketsError}
            </ErrorMessage>
          ) : tickets.length === 0 ? (
            <EmptyState>
              <EmptyStateIcon>📝</EmptyStateIcon>
              <EmptyStateText>
                {isAdmin ? "No tickets in the system yet." : "No tickets yet. Create your first support ticket above!"}
              </EmptyStateText>
            </EmptyState>
          ) : (
            <TicketList>
              {tickets.map((ticket) => (
                <TicketItem key={ticket.id} status={ticket.status}>
                  <TicketSubject>{ticket.subject}</TicketSubject>
                  <TicketMeta>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <TicketPriority priority={ticket.priority}>
                        {ticket.priority}
                      </TicketPriority>
                      <TicketStatus status={ticket.status}>
                        {ticket.status.replace('_', ' ')}
                      </TicketStatus>
                      {isAdmin && ticket.user && (
                        <span style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.25rem',
                          fontSize: '0.8rem',
                          color: '#666'
                        }}>
                          <FaUser /> {ticket.user.username}
                        </span>
                      )}
                    </div>
                    <TicketDate>{formatDate(ticket.createdAt)}</TicketDate>
                  </TicketMeta>
                  <TicketMessage>{ticket.message}</TicketMessage>
                  
                  {/* Admin Notes */}
                  {ticket.adminNotes && (
                    <div style={{ 
                      marginTop: '0.5rem', 
                      padding: '0.5rem', 
                      background: '#e3f2fd', 
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      color: '#1976d2'
                    }}>
                      <strong>Admin Response:</strong> {ticket.adminNotes}
                    </div>
                  )}

                  {/* Admin Controls */}
                  {isAdmin && (
                    <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '6px' }}>
                      {editingTicket === ticket.id ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <div>
                            <Label>Update Status</Label>
                            <StatusSelect
                              value={newStatus || ticket.status}
                              onChange={(e) => setNewStatus(e.target.value)}
                            >
                              <option value="OPEN">Open</option>
                              <option value="IN_PROGRESS">In Progress</option>
                              <option value="RESOLVED">Resolved</option>
                              <option value="CLOSED">Closed</option>
                            </StatusSelect>
                          </div>
                          
                          <div>
                            <Label>Admin Notes</Label>
                            <AdminNotesTextarea
                              value={adminNotes}
                              onChange={(e) => setAdminNotes(e.target.value)}
                              placeholder="Add admin notes or response..."
                              rows={3}
                            />
                          </div>
                          
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <UpdateButton
                              onClick={() => handleUpdateTicket(ticket.id)}
                              disabled={updatingTicket === ticket.id}
                            >
                              {updatingTicket === ticket.id ? "Updating..." : "Update Ticket"}
                            </UpdateButton>
                            <button
                              onClick={() => {
                                setEditingTicket(null);
                                setNewStatus("");
                                setAdminNotes("");
                              }}
                              style={{
                                padding: '0.5rem 1rem',
                                border: '1px solid #dc3545',
                                borderRadius: '4px',
                                background: 'white',
                                color: '#dc3545',
                                cursor: 'pointer'
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setEditingTicket(ticket.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            border: 'none',
                            borderRadius: '4px',
                            background: '#007bff',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '0.9rem'
                          }}
                        >
                          <FaEdit /> Manage Ticket
                        </button>
                      )}
                    </div>
                  )}
                </TicketItem>
              ))}
            </TicketList>
          )}
        </TicketPanel>
      </MainContent>
    </Container>
  );
};

export default Support;
