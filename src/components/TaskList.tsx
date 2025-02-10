import styled from "styled-components";
import TaskManager from "./TaskManager";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchTasks } from "../utils/TaskCRUD";
interface Task {
  id: string;
  title: string;
  category: string;
  description: string;
  dueDate: string;
  status: string;
  user: string;
}

const TaskList = () => {
  const { user } = useAuth();

  const [tasks, setTasks] = useState<Task[]>([]);


  //get all Tasks
  const getTask = async () => {
    const fetchedTasks = await fetchTasks(user);
    if (fetchedTasks) {
        console.log(fetchedTasks);
      setTasks(fetchedTasks);
    }
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <TaskListComp>
      <TaskManager tasks={tasks} getTask={getTask} type="Todo"></TaskManager>
      <TaskManager tasks={tasks} getTask={getTask} type="In-Progress"></TaskManager>
      <TaskManager tasks={tasks} getTask={getTask} type="Completed"></TaskManager>
    </TaskListComp>
  );
};

export default TaskList;

const TaskListComp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
  width: 90vw;
  padding: 10px 20px;
  background: #f1f1f1;
  overflow: hidden;
`;
