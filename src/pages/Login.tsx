import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { user, login } = useAuth(); //  Get `user` from AuthContext
  const navigate = useNavigate();

  //  Redirect if the user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container>
      <Logo>
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/deco-glyph/48/FD7E14/clipboard.png"
          alt="clipboard"
        />
        TaskMate
      </Logo>

      <Para>
        Streamline your workflow and track progress effortlessly with our
        all-in-one task management app.
      </Para>

      <GoogleButton
        onClick={async () => {
          await login(); //  Call login and let useEffect handle navigation
        }}
      >
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/fluency/48/google-logo.png"
          alt="google-logo"
        />
        Continue with Google
      </GoogleButton>
    </Container>
  );
};

export default Login;


// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fd7e14;
  font-size: 2rem;
  gap: 0.5rem;
  font-weight: 600;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Para = styled.p`
  color: #9ca3af;
  text-align: center;
  width: 30%;
  `

const GoogleButton = styled.button`
  background-color: #303030;
  color: white;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #2b2b2b;
    border: 1px solid #5c5c5c;
  }
`;
