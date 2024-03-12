import { useState } from "react";
import { Button, Group, Input, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <Input.Wrapper>
      <Title order={2} style={{ marginLeft: "35rem" }}>
        Sign In
      </Title>
      <Group style={{ marginLeft: "25rem" }}>
        <TextInput
          label="Email Address"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          styles={{
            input: {
              border: "1px solid grey",
              width: "50%",
              height: "2rem",
              fontSize: "1rem",
              borderRadius: "5px",
              marginTop: "15px",
              marginBottom: "15px",
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
              width: "50%",
              height: "2rem",
              fontSize: "1rem",
              borderRadius: "5px",
              marginTop: "15px",
              marginBottom: "15px",
            },

            label: { fontSize: "1rem" },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{
            width: "5rem",
            height: "2.3rem",
            backgroundColor: "green",
            border: "1px solid green",
            boxShadow: "0 0 2px green",
            borderRadius: "5px",
            color: "white",
            marginLeft: "10rem",
            marginTop: "15px",
          }}
          onClick={onSubmitHandler}
        >
          Login
        </Button>
      </Group>
    </Input.Wrapper>
  );
}

export default InputExample;
