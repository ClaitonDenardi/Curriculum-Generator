import React from "react";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Hover = styled.div`
  font-size: 18px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 100%;

  &:hover {
    background: #f0f0f0;
  }
`;

const Icon = ({ module, collapse, toggle }) => {
  return (
    <Hover onClick={() => toggle(module)}>{collapse ? <FiChevronDown /> : <FiChevronUp />}</Hover>
  );
};

export default Icon;
