import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  background: #14a750;
  padding: 5px 15px;
  border-radius: 40px;
  color: #fff;
  border: transparent;
  cursor: pointer;
  font-family: inherit;
`;

const fonts = ["Helvetica", "Times New Roman", "Arial", "Lucida Console", "Georgia"];

const Select = ({ setFont }) => {
  return (
    <StyledSelect>
      {fonts.map((font) => (
        <option value={font} onClick={(e) => setFont(e.target.value)}>
          {font}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
