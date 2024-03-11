import { MantineProvider } from "@mantine/core";
import InputExample from "./InputExample";

function App() {
  return (
    <MantineProvider>
      <h1>Vite React App with Mantine</h1>
      <InputExample />
    </MantineProvider>
  );
}

export default App;
