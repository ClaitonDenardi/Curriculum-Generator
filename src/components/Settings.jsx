import React from "react";
import { Container, Title, ContainerScroll, Printable } from "../Styles";
import ToggleIcon from "./ToggleIcon";

const fonts = ["Helvetica", "Times New Roman", "Arial", "Lucida Console", "Georgia"];

const Settings = ({ collapse, toggle, font, setFont }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Container collapse={collapse}>
        <Title>
          <span>Settings</span>
          <ToggleIcon module="settings" collapse={collapse} toggle={toggle} />
        </Title>
        <ContainerScroll>
          <select>
            {fonts.map((font) => (
              <option value={font} onClick={(e) => setFont(e.target.value)}>{font}</option>
            ))}
          </select>
        </ContainerScroll>
      </Container>
    </div>
  );
};

export default Settings;
