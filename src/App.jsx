import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ReactToPrint from "react-to-print";
import { Container, Item, ItemData, ItemCommands, ItemRow, Input, TextArea, Button, Title, ContainerScroll } from './Styles';

function App() {
  const componentRef = useRef(null)
  const [collapse, setCollapse] = useState(false);
  const [content, setContent] = useState("<div>teste</div>");

  const [experiences, setExperiences] = useState([{
    company: "",
    job: "",
    dti: "",
    dtf: "",
    tasks: "",
  }])

  const ComponentToPrint = () => {
    return (
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    );
  }

  const addItem = () => {
    let aux = experiences;
    aux.push({
      company: "",
      job: "",
      dti: "",
      dtf: "",
      tasks: "",
    });
    setExperiences([...aux]);
  }

  const removeItem = (index) => {
    let aux = experiences;
    aux.splice(index, 1);
    setExperiences([...aux]);
  }

  const updateField = (index, field, e) => {
    let aux = experiences;
    aux[index][field] = e;
    setExperiences([...aux]);
  }

  const ContentEditor = () => {
    return(
      <div style={{padding: "20px"}}>
        <Container collapse={collapse}>
          <Title>
            <span>Experience</span>
            <span onClick={() => setCollapse(!collapse)}>{collapse ? "Y": "X"}</span>
          </Title>
          <ContainerScroll>
            {experiences.map((exp, index) => (
              <Item>
                <ItemData>
                  <ItemRow>
                    <Input 
                      value={exp.company} 
                      onChange={(e) => updateField(index, "company", e.target.value)} 
                      placeholder="Company" 
                    />
                    <Input 
                      value={exp.job} 
                      onChange={(e) => updateField(index, "job", e.target.value)} 
                      placeholder="Job" 
                    />
                  </ItemRow>
                  <ItemRow>
                    <Input 
                      value={exp.dti} 
                      onChange={(e) => updateField(index, "dti", e.target.value)} 
                      type="date"
                    />
                    <Input 
                      value={exp.dtf} 
                      onChange={(e) => updateField(index, "dtf", e.target.value)} 
                      type="date"
                    />
                  </ItemRow>
                  <ItemRow>
                    <TextArea 
                      value={exp.tasks}
                      placeholder="Tasks performed"
                      onChange={(e) => updateField(index, "tasks", e.target.value)} 
                    />
                  </ItemRow>
                </ItemData>
                <ItemCommands>
                  {index !== 0 &&
                    <Button plus={false} onClick={() => removeItem(index)}>-</Button>
                  }
                  <Button plus={true} onClick={() => addItem()}>+</Button>
                </ItemCommands>
              </Item>
            ))}
          </ContainerScroll>
        </Container>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="Content">
        {ContentEditor()}
      </div>
      <div className="Preview">
        <div ref={componentRef}>
          <ComponentToPrint />
        </div>
         <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => componentRef.current}
         />
      </div>
    </div>
  );
}

export default App;
