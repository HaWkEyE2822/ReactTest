import * as React from "react";
import { CustomInput } from "../atoms/Input";
import styled from "styled-components";
import InstagramLogo from "../assets/images/instagram-logo-text.png";
import { CustomButton } from "../atoms/Button";

const { useState } = React;

const LoginFormContainer = styled.div`
  width: 50%;
  margin-top: 3rem;
  & > div {
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }
`;

const LoginPageContainer = styled.div`
  height: 100vh;
  color: #fff;
  background: linear-gradient(
    176deg,
    rgba(180, 58, 58, 1) 0%,
    rgba(253, 29, 148, 1) 50%,
    rgba(252, 69, 225, 1) 100%
  );
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const LoginPage: React.FC = () => {
  const [userCrendentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (e) => {
    // do some authentication here...
    // or get the auth from the backend when logging in...
    setUserCredentials({
      ...userCrendentials,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <LoginPageContainer>
      <ImageContainer>
        <Image src={InstagramLogo} />
      </ImageContainer>
      <LoginFormContainer>
        <CustomInput
          id={"username"}
          label="Username"
          type="email"
          onChange={handleOnChange}
        />
        <CustomInput
          onChange={handleOnChange}
          id={"password"}
          label="Password"
          type="password"
        />
        <CustomButton>Log In</CustomButton>
      </LoginFormContainer>
      <div>
        <strong>Log in with Facebook</strong>
      </div>
      <div>
          Don't have an account? <strong>Sign up</strong>
      </div>
    </LoginPageContainer>
  );
};

export default LoginPage;
