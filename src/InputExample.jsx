import { useState } from "react";
import { Button, TextInput } from "@mantine/core";

function InputExample() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");

  return (
    <>
      <form>
        <TextInput
          description="Email Address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextInput
          description="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
       
      </form>
    </>
  );
}

export default InputExample;
