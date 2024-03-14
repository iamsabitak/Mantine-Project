
/* eslint-disable react/prop-types */
import { Group, Paper, Pill } from "@mantine/core";

import "@mantine/core/styles/Pill.css"; // to make button type those which are added
import "@mantine/core/styles/chip.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/UnstyledButton.css"; // to style the UnstyledButton {cross marks}

function PaperChipComp({ value, setValue }) {
  const handleRemove = (removedCountry) => {
    const updatedValue = value.filter((country) => country !== removedCountry);
    setValue(updatedValue);
  };

  return (
    <Paper style={{ marginTop: "4rem", padding: "5px" }}>
      <Group>
        {value.map((country) => (
          <Pill
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
          </Pill>
        ))}
      </Group>
    </Paper>
  );
}

export default PaperChipComp;
