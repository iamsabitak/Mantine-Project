import { useState } from "react";
import { Chip, Group, MultiSelect, Paper } from "@mantine/core";
import "@mantine/core/styles/global.css"; // for global style
import "@mantine/core/styles/Combobox.css"; // style the big tick marks
import "@mantine/core/styles/Input.css"; // for input style
import "@mantine/core/styles/Pill.css"; // to make button type those which are added
import "@mantine/core/styles/PillsInput.css"; // to remove inner input from the input
import "@mantine/core/styles/Popover.css"; // to style the options
import "@mantine/core/styles/UnstyledButton.css"; // to style the UnstyledButton {cross marks}
import "@mantine/core/styles/chip.css";
import "@mantine/core/styles/Group.css";

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

  const handleRemove = (removedCountry) => {
    const updatedValue = value.filter(
      (_, country) => country !== removedCountry
    );
    setValue(updatedValue);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <div style={{ marginLeft: "3rem", maxWidth: "300px" }}>
        <MultiSelect
          label="Your favorite Country"
          placeholder="Pick value"
          data={options}
          value={value}
          onChange={setValue}
          maxValues={10}
          searchable
          nothingFoundMessage="Nothing found..."
          hideValue
          // hidePickedOptions  //should i hide the selected option or not
          styles={{
            label: {
              marginLeft: "3rem",
              marginBottom: "1rem",
              marginTop: "1rem",
              fontSize: "18px",
            },
          }}
        />
      </div>
      <Paper style={{ marginTop: "4rem", padding: "5px" }}>
        <Group>
          {value.map((country) => (
            <Chip
              key={country}
              style={{
                marginRight: "10px",
                marginLeft: "4rem",
              }}
            >
              {country}{" "}
              <span
                onClick={() => handleRemove(country)}
                style={{ cursor: "pointer" }}
              >
                {" "}
                &#x2716;
              </span>
            </Chip>
          ))}
        </Group>
      </Paper>
    </div>
  );
}

export default MultiSelectComp;
