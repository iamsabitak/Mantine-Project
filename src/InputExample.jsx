import { useState } from "react";
import styled from "styled-components";
import { Button, TextInput } from "@mantine/core";

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

const FormWrapper = styled.div`
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log({ email, password });
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
      <StyledButton onClick={onSubmitHandler}>Submit</StyledButton>
    </FormWrapper>
  );
}

export default InputExample;
