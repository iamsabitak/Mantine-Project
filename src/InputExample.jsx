import { useState } from "react";
import { Button, TextInput } from "@mantine/core";

function InputExample() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <form>
        <TextInput
          description="Email Address"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          description="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmitHandler} style={{ marginTop: "15px" }}>
        Submit
      </Button>
      </form>
      
    </>
  );
}

export default InputExample;
