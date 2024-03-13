import { useState } from "react";

import { MultiSelect } from "@mantine/core";

import "@mantine/core/styles/global.css"; //for global style
import "@mantine/core/styles/Combobox.css"; // style the big tick marks
import "@mantine/core/styles/Input.css"; //for input style
import "@mantine/core/styles/Pill.css"; //to make button type those which are added
import "@mantine/core/styles/PillsInput.css"; //to remove inner input from the input
import "@mantine/core/styles/Popover.css"; //to style the options
import "@mantine/core/styles/UnstyledButton.css"; // to style the UnstyledButton {cross marks}

function MultiSelectComp() {
  const [value, setValue] = useState([]);

  const options = ["Kathmandu", "Pokhara", "Biratnagar", "Birgunj"];

  return (
    <>
      <MultiSelect
        label="Your favorite City"
        placeholder="Pick value"
        data={options}
        value={value}
        searchable
        nothingFoundMessage="Nothing found..."
        onChange={setValue}
        styles={{
          label: {
            marginLeft: "33rem",
            marginBottom: "1rem",
            marginTop: "1rem",
            fontSize: "18px",
          },
        }}
      />
    </>
  );
}

export default MultiSelectComp;
