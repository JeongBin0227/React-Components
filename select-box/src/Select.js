import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const MyComponent = () => {
  return (
    <div>
      <div className="category">Default Select</div>
      <Select style={{ width: "100px" }} options={options} />
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
