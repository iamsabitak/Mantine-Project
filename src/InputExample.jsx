import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FormWrapper = styled.form`
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333333;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledTextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  width: 30%;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 12px 0;
  margin-left: 9.18rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }
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
