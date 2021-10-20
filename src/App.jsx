import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import ReactToPrint from "react-to-print";
import { Container, Item, ItemData, ItemCommands, ItemRow, Input, TextArea, Button, Title, ContainerScroll, PrimaryInfo, SecondaryInfo, Dates, Description } from './Styles';

function App() {
  const componentRef = useRef(null);
  const [collapse, setCollapse] = useState({
    experience: false,
    education: true,
    languages: true,
  });

  const [content, setContent] = useState("<div>teste</div>");

  const [experiences, setExperiences] = useState([{
    company: "",
    job: "",
    dti: "",
    dtf: "",
    tasks: "",
  }]);

  const [education, setEducation] = useState([{
    school: "",
    degree: "",
    field: "",
    dti: "",
    dtf: "",
  }]);


  const ComponentToPrint = () => {
    return (
      // <div dangerouslySetInnerHTML={{__html: content}}></div>
      <div style={{textAlign: "left", padding: "10px"}}>
        <h2 style={{marginBottom: 0, borderBottom: "1px solid #000"}}>Work Experiences</h2>
        {experiences.map((exp) => (
          <ul>
            <PrimaryInfo>{exp.job}</PrimaryInfo>
            <SecondaryInfo>{exp.company}</SecondaryInfo>
            <p style={{margin: 0}}>
              <Dates>{exp.dti}</Dates>-<Dates>{exp.dtf ? exp.dtf: "present"}</Dates>
            </p>
            <Description>{exp.tasks}</Description>
          </ul>
        ))}
        <h2 style={{marginBottom: 0, borderBottom: "1px solid #000"}}>Education</h2>
        {education.map((exp) => (
          <ul>
            <PrimaryInfo>{exp.school}</PrimaryInfo>
            <SecondaryInfo>{exp.degree + " - " + exp.field}</SecondaryInfo>
            <p style={{margin: 0}}>
              <Dates>{exp.dti}</Dates>-<Dates>{exp.dtf ? exp.dtf: "present"}</Dates>
            </p>
          </ul>
        ))}
      </div>
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

  const updateField = (index, field, e, section) => {
    let aux = section === "education" ? education : experiences;
    aux[index][field] = e;

    if (section === "education") {
      setEducation([...aux]);
    } else {
      setExperiences([...aux]);
    }
  }

  const ExperienceSection = () => {
    return(
      <div style={{padding: "20px"}}>
        <Container collapse={collapse.experience}>
          <Title>
            <span>Experience</span>
            <span onClick={() => setCollapse({...collapse, experience: !collapse.experience })}>{collapse.experience ? "Y": "X"}</span>
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

  const EducationSection = () => {
    return(
      <div style={{padding: "20px"}}>
        <Container collapse={collapse.education}>
          <Title>
            <span>Education</span>
            <span onClick={() => setCollapse({...collapse, education: !collapse.education })}>{collapse.education ? "Y": "X"}</span>
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
        {ExperienceSection()}
        {EducationSection()}
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
