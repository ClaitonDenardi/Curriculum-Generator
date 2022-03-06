import React from "react";
import styled from "styled-components";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ItemCommands } from "../../Styles";

const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ plus }) => (plus ? "#14a750" : "#ffbd3f")};
  color: #fff;
  margin-right: ${({ plus }) => !plus && "5px"};
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer;
  font-size: 18px;
`;

const Commands = ({ index, remove, add, module }) => {
  return (
    <ItemCommands>
      {index !== 0 && (
        <IconButton plus={false} onClick={() => remove(index, module)}>
          <FiMinus />
        </IconButton>
      )}
      <IconButton plus={true} onClick={() => add(module)} plus={true} onClick={() => add(module)}>
        <FiPlus />
      </IconButton>
    </ItemCommands>
  );
};

export default Commands;
