import React from "react";
import {
  Container,
  Item,
  ItemData,
  ItemRow,
  Input,
  Title,
  ContainerScroll,
  TextArea
} from "../Styles";
import Commands from "./Commands";
import Icon from "../atoms/Icon";

const Experiences = ({ experiences, updateField, collapse, toggle, remove, add }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Container collapse={collapse}>
        <Title>
          <span>Experience</span>
          <Icon module="experience" collapse={collapse} toggle={toggle}/>
        </Title>
        <ContainerScroll>
          {experiences.map((exp, index) => (
            <Item>
              <ItemData>
                <ItemRow>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateField(index, "company", e.target.value, "experience")}
                    placeholder="Company"
                  />
                  <Input
                    value={exp.job}
                    onChange={(e) => updateField(index, "job", e.target.value, "experience")}
                    placeholder="Job"
                  />
                </ItemRow>
                <ItemRow>
                  <Input
                    value={exp.dti}
                    onChange={(e) => updateField(index, "dti", e.target.value, "experience")}
                    type="date"
                  />
                  <Input
                    value={exp.dtf}
                    onChange={(e) => updateField(index, "dtf", e.target.value, "experience")}
                    type="date"
                  />
                </ItemRow>
                <ItemRow>
                  <TextArea
                    value={exp.tasks}
                    placeholder="Tasks performed"
                    onChange={(e) => updateField(index, "tasks", e.target.value, "experience")}
                  />
                </ItemRow>
              </ItemData>
              <Commands index={index} remove={remove} add={add} module="experience"/>
            </Item>
          ))}
        </ContainerScroll>
      </Container>
    </div>
  );
};

export default Experiences;
