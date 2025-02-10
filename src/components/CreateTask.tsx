import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

export const CreateTask = () => {
  const { user } = useAuth();

  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "",
    dueDate: "",
    status: "",
    user: user ? user.uid : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleCategorySelect = (category: string) => {
    setTask((prevTask) => ({ ...prevTask, category }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("User not authenticated!");
      return;
    }

    const taskToSave = {
      ...task,
      user: user.uid, // Ensure correct user ID is stored
    };

    try {
      await addDoc(collection(db, "tasks"), taskToSave);
      alert("Task added successfully!");

      setTask({
        title: "",
        description: "",
        category: "",
        dueDate: "",
        status: "",
        user: user.uid, 
      });
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <Section>
      <Container>
        <Header>
          <Title>Create Task</Title>
        </Header>

        <Divider />

        <Form onSubmit={handleSubmit}>
          <Label>
            Task title
            <Input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              placeholder="Task title"
              required
            />
          </Label>

          <Label>
            Description
            <TextArea
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Description"
              maxLength={300}
            />
          </Label>

          <Group>
            <FormGroup>
              <Label>Task Category*</Label>
              <Group>
                <Button
                  type="button"
                  onClick={() => handleCategorySelect("Work")}
                  className={task.category === "Work" ? "selected" : ""}
                >
                  Work
                </Button>
                <Button
                  type="button"
                  onClick={() => handleCategorySelect("Personal")}
                  className={task.category === "Personal" ? "selected" : ""}
                >
                  Personal
                </Button>
              </Group>
            </FormGroup>

            <FormGroup>
              <Label>Due on*</Label>
              <Input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Task Status*</Label>
              <Select name="status" value={task.status} onChange={handleChange} required>
                <Nonoption value="">Choose</Nonoption>
                <option value="In-Progress">In-Progress</option>
                <option value="Completed">Completed</option>
              </Select>
            </FormGroup>
          </Group>

          <Group>
            <Button type="button">CANCEL</Button>
            <Button type="submit">CREATE</Button>
          </Group>
        </Form>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  border-radius: 20px;
  width: 674px;
  background-color: #fff;
  padding: 20px;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #2f2f2f;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff;
`;

const Select = styled.select`
  background-color: #f6f6f6;
  color: #363636;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px 0px 10px 5px;
`;

const Nonoption = styled.option`
background-color: red;
display: none;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #646464;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0px 10px 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #363636;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px 0px 10px 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  background-color: #f6f6f6;
  color: #363636;
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  gap: 10px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  color: #363636;
  
  &.selected {
    background-color: #4caf50;
    color: white;
  }
`;

export default CreateTask;
