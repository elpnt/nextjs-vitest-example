import { useState } from "react";
import { Listbox } from "@headlessui/react";

const options = ["Apple", "Banana", "Orange"];

export const SelectMenu = () => {
  const [selectedFruit, setSelectedFruit] = useState(options[0]);
  return (
    <Listbox value={selectedFruit} onChange={setSelectedFruit}>
      <Listbox.Button>{selectedFruit}</Listbox.Button>
      <Listbox.Options>
        {options.map((option) => (
          <Listbox.Option key={option} value={option}>
            {option}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
