import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";

interface TaskManagerProps {
  type: string;
  tasks: {
    id: string;
    title: string;
    category: string;
    description: string;
    dueDate: string;
    status: string;
    user: string;
  }[];
  getTask: () => void;
}

const TaskManager: React.FC<TaskManagerProps> = ({ type, tasks, getTask }) => {
  const filteredTasks = tasks.filter((task) => task.status === type);

  return (
    <Box>
      <TodoContainer>
        <Header type={type}>{type}</Header>

        <TaskContainer type={type}>
          {type === "Todo" ? <AddTaskButton>+ ADD TASK</AddTaskButton> : null}

          <TaskList>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <TaskItem
                  key={index}
                  id={task.id}
                  date={task.dueDate}
                  taskName={task.title}
                  category={task.category}
                  stats={task.status}
                  getTask={getTask}
                  statusOptions={["Todo", "In-Progress", "Completed"]}
                />
              ))
            ) : (
              <EmptyState>No tasks available</EmptyState>
            )}
          </TaskList>
        </TaskContainer>
      </TodoContainer>
    </Box>
  );
};

export default TaskManager;

const Box = styled.section`
  width: 100%;
  color: black;
  background: #f1f1f1;
  margin-bottom: 40px;

`;

const TodoContainer = styled.div`
  background: #f1f1f1;
  border-radius: 12px;
`;

const EmptyState = styled.div`
  text-align: center;
  color: gray;
  padding: 10px;
  font-size: 14px;
`;

const Header = styled.div<{ type: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: white;
  border-radius: 8px;
  background-color: ${(props) =>
    props.type === "Todo"
      ? "#ffaa65"
      : props.type === "In-Progress"
      ? "#85D9F1"
      : "#CEFFCC"};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const TaskContainer = styled.div<{ type: string }>`
  margin-top: 20px;
  padding: 15px;
  background-color: ${(props) =>
    props.type === "Todo"
      ? "#fff8f3"
      : props.type === "In-Progress"
      ? "#f7feff"
      : "#fbfffb"};  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const AddTaskButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-weight: bold;
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;
