import React from "react";

export function InputForm({
  handleChange,
  config: {  name, placeholder, minLength, maxLength, type },
  value,
}) {
  return (
    <>
      <label>
        {name}
        <input
          style={{ width: 280 }}
          name={name}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          type={type}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
}