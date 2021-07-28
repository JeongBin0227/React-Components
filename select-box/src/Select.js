import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 100,
    // background: "green",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

export const MyComponent = () => {
  return (
    <div>
      <div className="category">Default Select</div>
      {/* <Select styles={customStyles} options={options} /> */}
      <Select options={options} />
      <div className="category">Loading Select</div>
      <Select options={options} isLoading />
      <div className="category">Clearable Select</div>
      <Select options={options} defaultValue={options[0]} isClearable />
      <div className="category">Disabled Select</div>
      <Select options={options} defaultValue={options[0]} isDisabled />
      <div className="category">Select with multiple values</div>
      <Select options={options} defaultValue={options} isMulti />
      <div className="category">Select that is initially open</div>
      <Select options={options} defaultValue={options[0]} defaultMenuIsOpen />
    </div>
  );
};
