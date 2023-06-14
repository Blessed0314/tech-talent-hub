import React from "react";
import styles from "./Select.module.css";

function Select({ options, name, onChange }) {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onChange(name, selectedValue);
  };
  return (
    <div>
      <select name={name} id={name} className={styles.select} onChange={handleSelectChange}>
        {options.map((option) => (
          <option value={option.id} key={option.id} className={styles.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
