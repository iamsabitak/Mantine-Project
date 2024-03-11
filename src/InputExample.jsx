import { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import axios from "axios";

function InputExample() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    } catch (error) {
      console.log("Error:", error);
    }

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }
  };

  return (
    <>
      <form>
        <TextInput
          description="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && <div className="invalid-feedback">{emailError}</div>}
        <TextInput
          description="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && (
          <div className="invalid-feedback">{passwordError}</div>
        )}
        <Button onClick={onSubmitHandler} style={{ marginTop: "15px" }}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default InputExample;
