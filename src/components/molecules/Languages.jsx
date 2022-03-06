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
import Icon from "../atoms/Icon";
import Commands from "./Commands";

const Languages = ({ languages, updateField, collapse, toggle, remove, add }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Container collapse={collapse}>
        <Title>
          <span>Languages</span>
          <Icon module="languages" collapse={collapse} toggle={toggle}/>
        </Title>
        <ContainerScroll>
          {languages.map((lang, index) => (
            <Item>
              <ItemData>
                <ItemRow>
                  <Input
                    value={lang.language}
                    onChange={(e) => updateField(index, "language", e.target.value, "languages")}
                    placeholder="Language"
                  />
                  <Input
                    value={lang.fluence}
                    onChange={(e) => updateField(index, "fluence", e.target.value, "languages")}
                    placeholder="Fluence"
                  />
                </ItemRow>
              </ItemData>
              <Commands index={index} remove={remove} add={add} module="languages"/>
            </Item>
          ))}
        </ContainerScroll>
      </Container>
    </div>
  );
};

export default Languages;
