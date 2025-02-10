import styled from "styled-components";

import { useAuth } from "../context/AuthContext";

import TaskList from "../components/TaskList";
import { Header } from "../components/Header";
import { TaskFeatures } from "../components/Features";
import { CreateTask } from "../components/CreateTask";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <Box>
      <Header logout={logout}></Header>
      <TaskFeatures></TaskFeatures>
      <TaskList />
      <CreateTask></CreateTask>
    </Box>
  );
};

export default Dashboard;

// Styled components
const Box = styled.div`
  width: 100vw;
  /* height: 20vh; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
