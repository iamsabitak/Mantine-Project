import { useState } from "react";

import { MultiSelect } from "@mantine/core";

import PaperChipComp from "./PaperChipComp";

function MultiSelectComp() {
  const [value, setValue] = useState([]);

  const options = [
    "Nepal",
    "South Korea",
    "China",
    "Thailand",
    "Japan",
    "Canada",
    "Australia",
    "USA",
    "London",
    "Germany",
    "Brazil",
    "India",
    "France",
    "Italy",
    "Spain",
    "Russia",
    "South Africa",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{ marginLeft: "3.9rem", maxWidth: "300px", marginRight: "5rem" }}
      >
        <MultiSelect
          label="Your favorite Country"
          placeholder="Pick value"
          data={options}
          value={value}
          onChange={setValue}
          maxValues={10}
          searchable
          nothingFoundMessage="Nothing found..."
          hidePickedOptions
          styles={{
            inputField: { width: "18rem", height: "2rem", fontSize: "1rem",marginTop: "1rem", },
            label: {
              marginLeft: "3rem",

              fontSize: "1.3rem",
            },
            pill: { display: "none" },
            section: { display: "none" },
            dropdown: {
              borderRadius: "5px",
              marginLeft: "2.8rem",
            },
            options: {
              margin: "1rem",
              marginTop: "4px",
              cursor: "pointer",
              border: "1px solid #A8A8A8",
              borderRadius: "3px",
              width: "100%",
            },
            option: {
              border: "1px solid #A8A8A8",
              padding: "10px",
              textAlign: "center",
            },
          }}
        />
      </div>
      <PaperChipComp value={value} setValue={setValue} />
    </div>
  );
}

export default MultiSelectComp;
