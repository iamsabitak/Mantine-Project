import { useState } from "react";
import { FileInput } from "@mantine/core";

function InputExample() {
  const [value, setValue] = useState("");

  return (
    <div>
      <FileInput
        label="Enter your name"
        placeholder="John Doe"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>Your name is: {value}</p>
    </div>
  );
}

export default InputExample;
