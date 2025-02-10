import React, { useState } from "react";
import styled from "styled-components";
import { deleteTask, updateTaskStatus } from "../utils/TaskCRUD";

interface TaskItemProps {
  id: string;
  date: string;
  taskName: string;
  category: string;
  stats: string;
  statusOptions: string[];
  getTask: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  date,
  taskName,
  category,
  stats,
  statusOptions,
  getTask
}) => {    

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const setStatus = async (status: string) => {
    await updateTaskStatus(id, status);
    getTask(); 
  };

  const delItem = async () => {
    await deleteTask(id);
    getTask();
  }
  

  return (
    <Item>
      <TaskName>{taskName}</TaskName>
      <Date>{date}</Date>

      <StatusContainer onClick={() => setDropdownOpen(!dropdownOpen)}>
        <StatusText>{stats}</StatusText>
        {dropdownOpen && (
          <DropdownMenu>
            {statusOptions.map((option) => (
              <DropdownItem key={option} onClick={() => setStatus(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </StatusContainer>

      <Category>{category}</Category>

      <Icon src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" onClick={()=>delItem()}></Icon>
    </Item>
  );
};

export default TaskItem;

const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr .2fr;
  align-items: center;
  padding: 10px 0;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.44);
    transition: .1s;
}
`;
const Icon = styled.img`
  width: 23px;
  height: 23px;
  padding: 4px 3px;
  border-radius: 2px;
  display: inline-block; /* Ensures proper spacing */
  transition: background-color 0.3s ease-in-out; /* Smooth transition */

  &:hover {
    background-color: #ffa65e;
    cursor: pointer;
  }
`;
const TaskName = styled.span`
  font-weight: bold;
  padding-left: 10px;
`;

const Date = styled.span`
  color: #666;
`;

const StatusContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: fit-content;
`;

const StatusText = styled.span`
  padding: 5px 10px;
  background: #f3f3f3;
  border-radius: 4px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 5px 10px;
  width: max-content;
  /* background-color: red; */
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const Category = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
