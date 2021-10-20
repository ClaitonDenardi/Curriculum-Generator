import React from "react";
import {
  Container,
  Item,
  ItemData,
  ItemRow,
  Input,
  Title,
  ContainerScroll,
} from "../Styles";
import Commands from "./Commands";
import ToggleIcon from "./ToggleIcon";

const Education = ({ education, updateField, collapse, toggle, remove, add }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Container collapse={collapse}>
        <Title>
          <span>Education</span>
          <ToggleIcon module="education" collapse={collapse} toggle={toggle}/>
        </Title>
        <ContainerScroll>
          {education.map((exp, index) => (
            <Item>
              <ItemData>
                <ItemRow>
                  <Input
                    value={exp.school}
                    onChange={(e) => updateField(index, "school", e.target.value, "education")}
                    placeholder="School"
                  />
                  <Input
                    value={exp.degree}
                    onChange={(e) => updateField(index, "degree", e.target.value, "education")}
                    placeholder="Degree"
                  />
                </ItemRow>
                <ItemRow>
                  <Input
                    value={exp.field}
                    onChange={(e) => updateField(index, "field", e.target.value, "education")}
                    placeholder="Field"
                  />
                </ItemRow>
                <ItemRow>
                  <Input
                    value={exp.dti}
                    onChange={(e) => updateField(index, "dti", e.target.value, "education")}
                    type="date"
                  />
                  <Input
                    value={exp.dtf}
                    onChange={(e) => updateField(index, "dtf", e.target.value, "education")}
                    type="date"
                  />
                </ItemRow>
              </ItemData>
              <Commands index={index} remove={remove} add={add} module="education"/>
            </Item>
          ))}
        </ContainerScroll>
      </Container>
    </div>
  );
};

export default Education;
