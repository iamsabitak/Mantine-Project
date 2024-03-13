import { MantineProvider } from "@mantine/core";

// import AppContent from "./AppContent";

import { BrowserRouter } from "react-router-dom";
import MultiSelectComp from "./multiselect/MultiSelectComp";

function App() {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          {/* <AppContent /> */}
        </BrowserRouter>
        <MultiSelectComp />
      </MantineProvider>
    </>
  );
}

export default App;
