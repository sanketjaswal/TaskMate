import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

interface HeaderProps {
  logout: () => void;
}

export const Header = ({ logout }: HeaderProps): JSX.Element => {
  const { user } = useAuth();

  return (
    <Head>
      <Section>
        {/* <Icon as={TaskIcon} /> */}
        <Logo>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/deco-glyph/48/FD7E14/clipboard.png"
            alt="clipboard"
          />
          TaskMate
        </Logo>
        <Group>
          <Avatar src={`${user?.photoURL}`} alt="User Avatar" />
          <Title>{user?.displayName}</Title>
        </Group>
      </Section>

      <Section>
        <Button>
          {/* <Icon src={group1171276211} alt="Board Icon" /> */}
          <Text>Board</Text>
        </Button>
        <Button>
          {/* <Icon src={listIcon} alt="List Icon" /> */}
          <Text>List</Text>
        </Button>
        {/* <LogoutIcon />  */}
        <LogoutButton onClick={logout}>
          <Icon
            src={"https://img.icons8.com/ios/50/exit--v1.png"}
            alt="List Icon"
          />
          Logout
        </LogoutButton>
      </Section>
    </Head>
  );
};

const Head = styled.header`
  display: flex;
  color: red;
  flex-direction: column;
  align-items: center;
  width: 90%;
  background-color: white;
  padding: 10px 20px;
  top: 0;
  left: 0;
  /* height: 60px; */

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

const Group = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 600;
  color: #231f20d1;
  cursor: pointer;
`;

const LogoutButton = styled(Button)`
  background: #fff9f9;
  border: 1px solid #7b198426;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 12px;
  color: #000;

  &:hover {
    background: #7b198426;
  }

`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const Title = styled.span`
  font-size: 23px;
  font-weight: 700;
  color: #fd7e14;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #00000099;
`;



const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fd7e14;
  font-size: 1.5rem;
  gap: 0.5rem;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
