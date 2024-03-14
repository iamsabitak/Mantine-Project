/* eslint-disable react/prop-types */
import { Badge, Group, Paper } from "@mantine/core";

function PaperChipComp({ value, setValue }) {
  const handleRemove = (removedCountry) => {
    const updatedValue = value.filter((country) => country !== removedCountry);
    setValue(updatedValue);
  };

  return (
    <Paper>
      <Group>
        {value.map((country) => (
          <Badge
            bg={"	#A8A8A8"}
            key={country}
            style={{
              borderRadius: "2rem",
              display: "inline-block",
              marginTop: "1rem",
              marginLeft: "10px",
            }}
          >
            <span style={{ margin: "8px", fontSize: "14px" }}>
              {country}
              <span
                onClick={() => handleRemove(country)}
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
              >
                &#x2716;
              </span>
            </span>
          </Badge>
        ))}
      </Group>
    </Paper>
  );
}

export default PaperChipComp;
