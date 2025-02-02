import styled from "styled-components";

import { useAuth } from "../context/AuthContext";

import TaskList from "../components/TaskList";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <LogoutButton onClick={logout}>Logout</LogoutButton>
      <TaskList />
    </div>
  );
};

export default Dashboard;

// Styled components
const LogoutButton = styled.button`
  background-color: #ef4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;
