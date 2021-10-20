import React from "react";
import {
  Container,
  Item,
  ItemData,
  ItemRow,
  Input,
  Title,
  ContainerScroll,
  TextArea,
} from "../Styles";
import Commands from "./Commands";
import ToggleIcon from "./ToggleIcon";

const Personal = ({ personal, updateField, collapse, toggle, remove, add }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Container collapse={collapse}>
        <Title>
          <span>Personal data</span>
          <ToggleIcon module="personal" collapse={collapse} toggle={toggle} />
        </Title>
        <ContainerScroll>
          {personal.map((exp, index) => (
            <Item>
              <ItemData>
                <ItemRow>
                  <Input
                    value={exp.name}
                    onChange={(e) => updateField(index, "name", e.target.value, "personal")}
                    placeholder="Full name"
                  />
                  <Input
                    value={exp.location}
                    onChange={(e) => updateField(index, "location", e.target.value, "personal")}
                    placeholder="Location"
                  />
                </ItemRow>
                <ItemRow>
                  <Input
                    value={exp.email}
                    onChange={(e) => updateField(index, "email", e.target.value, "personal")}
                    placeholder="E-mail"
                  />
                  <Input
                    value={exp.phone}
                    onChange={(e) => updateField(index, "phone", e.target.value, "personal")}
                    placeholder="Phone"
                  />
                </ItemRow>
                <ItemRow>
                  <TextArea
                    value={exp.intro}
                    placeholder="Introduction"
                    onChange={(e) => updateField(index, "intro", e.target.value, "personal")}
                  />
                </ItemRow>
              </ItemData>
              <Commands index={index} remove={remove} add={add} module="personal" />
            </Item>
          ))}
        </ContainerScroll>
      </Container>
    </div>
  );
};

export default Personal;
