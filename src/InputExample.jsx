import { useState } from "react";
import styled from "styled-components";
import { Button, Group, TextInput } from "@mantine/core";
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
      <Group>
        <TextInput
          label="Email Address"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          styles={{
            input: {
              border: "1px solid grey",
              width: "100%",
              height: "2rem",
              fontSize: "1rem",
              borderRadius: "5px",
              marginTop: "10px",
              marginBottom: "10px",
            },
            label: { fontSize: "1rem" },
          }}
        />
        <TextInput
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          styles={{
            input: {
              border: "1px solid grey",
              width: "100%",
              height: "2rem",
              fontSize: "1rem",
              borderRadius: "5px",
              marginTop: "10px",
              marginBottom: "10px",
            },
            label: { fontSize: "1rem" },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Group>
      <Button onClick={onSubmitHandler}>Login</Button>
    </FormWrapper>
  );
}

export default InputExample;
