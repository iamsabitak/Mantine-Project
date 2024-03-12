import { MantineProvider } from "@mantine/core";
// import InputExample from "./InputExample";
import AppContent from "./AppContent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}

export default App;
