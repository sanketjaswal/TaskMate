import styled from "styled-components";

export const TaskFeatures = (): JSX.Element => {
  return (
    <FilterBar>
    <Label>Filter by:</Label>
    <Filters>
      <Dropdown>
        <option>Category</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Urgent</option>
      </Dropdown>
      <Dropdown>
        <option>Due Date</option>
        <option>Today</option>
        <option>Tomorrow</option>
        <option>This Week</option>
      </Dropdown>
    </Filters>
    {/* <SearchContainer> */}
      {/* <Icon src={searchIcon} alt="Search" /> */}
      {/* <SearchInput placeholder="Search" type="text" /> */}
    {/* </SearchContainer> */}
    <AddTaskButton>ADD TASK</AddTaskButton>
  </FilterBar>
  );
};
    
const FilterBar = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
height: 48px;
background: white;
padding: 0 20px;
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const Label = styled.span`
color: #666;
font-size: 12px;
font-weight: 600;
`;

const Filters = styled.div`
display: flex;
gap: 10px;
color: #666;
`;

const Dropdown = styled.select`
padding: 6px 12px;
border: 1px solid #ccc;
border-radius: 20px;
background: white;
font-size: 12px;
cursor: pointer;
outline: none;
color: black;
`;

// const SearchContainer = styled.div`
// display: flex;
// align-items: center;
// gap: 6px;
// padding: 6px 12px;
// border: 1px solid #aaa;
// border-radius: 20px;
// background: white;
// `;

// const SearchInput = styled.input`
// border: none;
// outline: none;
// font-size: 12px;
// background: transparent;
// color: gray;
// `;

// const Icon = styled.img`
// width: 16px;
// height: 16px;
// `;

const AddTaskButton = styled.button`
background: #fd7e14;
color: white;
font-size: 14px;
font-weight: bold;
padding: 10px 20px;
border-radius: 20px;
border: none;
cursor: pointer;
`;
