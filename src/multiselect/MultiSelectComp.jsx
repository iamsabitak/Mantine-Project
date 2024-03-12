import { useState } from "react";
import { MultiSelect } from "@mantine/core";

import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Input.css";

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
      />
    </>
  );
}

export default MultiSelectComp;
