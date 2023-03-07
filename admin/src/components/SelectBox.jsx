import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SelectBox = ({ state, options, onChange }) => {
  useEffect(() => {
    const handleClick = (event) => {
      const optionsContainer = document.querySelector(
        ".select-box-options-container"
      );
      if (!optionsContainer.contains(event.target)) {
        optionsContainer.classList.remove("show");
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="select-box-container">
      <div
        className="select-box-selected-option"
        onClick={() => {
          const optionsContainer = document.querySelector(
            ".select-box-options-container"
          );
          optionsContainer.classList.toggle("show");
        }}
      >
        <div className="select-box-selected-option-text">{state}</div>
        <IoIosArrowDown size={20} className="select-box-icon" />
      </div>
      <div className="select-box-options-container">
        {options.map((option) => (
          <div
            key={option}
            className={`select-box-option ${
              option === state ? "selected" : ""
            }`}
            onClick={() => {
              onChange({
                target: {
                  name: "status",
                  value: option,
                },
              });
              document
                .querySelector(".select-box-options-container")
                .classList.remove("show");
            }}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBox;
