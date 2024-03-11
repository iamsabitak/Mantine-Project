import { useState } from "react";
import styled from "styled-components";
import { Button, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StyledTextInput = styled(TextInput)`
  margin-bottom: 20px;
  width: 150px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 200px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
`;

function InputExample() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const res = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
      console.log("token:", res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <FormWrapper>
      <Title>Sign In</Title>
      <StyledTextInput
        label="Email Address"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledTextInput
        label="Password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton onClick={onSubmitHandler}>Login</StyledButton>
    </FormWrapper>
  );
}

export default InputExample;
