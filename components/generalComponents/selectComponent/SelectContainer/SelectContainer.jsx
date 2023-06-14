import filtersDB from "../../../../helpers/provisionalFiltersDB";
import Select from "../Select/Select";
import styles from "./SelectContainer.module.css";
import React, { useRef } from "react";

const SelectsContainer = ({ onSelectChange }) => {
  const selectedValuesRef = useRef({});

  const handleSelectChange = (name, value) => {
    selectedValuesRef.current[name] = value;
    onSelectChange(selectedValuesRef.current);
  };
  return (
    <div className={styles.Container}>
      {Object.keys(filtersDB).map((key) => (
        <Select key={key} name={key} options={filtersDB[key]} onChange={handleSelectChange}/>
      ))}
    </div>
  );
};

export default SelectsContainer;
