import { useState } from "react";
import { Button, Input, TextInput, Title } from "@mantine/core";
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
    <>
      <Title order={2} style={{ marginLeft: "35rem" }}>
        Sign In
      </Title>
      <Input.Wrapper style={{ marginLeft: "25rem" }}>
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
            marginLeft: "10rem",
            marginTop: "15px",
          }}
          variant="outline"
          onClick={onSubmitHandler}
        >
          Login
        </Button>
      </Input.Wrapper>
    </>
  );
}

export default InputExample;
