import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import {
  PrimaryInfo,
  SecondaryInfo,
  Dates,
  Description,
  Section,
  Editor,
  Preview,
  Paper,
  Scale,
  Name,
  Printable,
  Button,
} from "../../Styles";
import Education from "../molecules/Education";
import Languages from "../molecules/Languages";
import Experiences from "../molecules/Experience";
import Personal from "../molecules/Personal";
import Select from "../atoms/Select";
import { FiDownloadCloud } from "react-icons/fi";

const icon ={fontSize: "16px", marginBottom: "-3px" , marginRight: "6px"}

function Generator() {
  const componentRef = useRef(null);

  const [collapse, setCollapse] = useState({
    personal: false,
    experience: true,
    education: true,
    languages: true,
  });

  const [personal, setPersonal] = useState([
    {
      name: "",
      email: "",
      phone: "",
      location: "",
      intro: "",
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      company: "",
      job: "",
      dti: "",
      dtf: "",
      tasks: "",
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: "",
      degree: "",
      field: "",
      dti: "",
      dtf: "",
    },
  ]);

  const [languages, setLanguages] = useState([
    {
      langauge: "",
      fluence: "",
    },
  ]);

  const [font, setFont] = useState("Helvetica");

  const ComponentToPrint = () => {
    return (
      <Printable font={font}>
        {personal.map((exp) => (
          <>
            <Name>{exp.name}</Name>
            <SecondaryInfo>{exp.location}</SecondaryInfo>
            <SecondaryInfo>{"E-mail: " + exp.email + " / Phone: " + exp.phone}</SecondaryInfo>
            <Description>{exp.intro}</Description>
          </>
        ))}
        <Section>Work Experiences</Section>
        {experiences.map((exp) => (
          <ul>
            <PrimaryInfo>{exp.job}</PrimaryInfo>
            <SecondaryInfo>{exp.company}</SecondaryInfo>
            <p style={{ margin: 0 }}>
              <Dates>{exp.dti}</Dates>-<Dates>{exp.dtf ? exp.dtf : "present"}</Dates>
            </p>
            <Description>{exp.tasks}</Description>
          </ul>
        ))}
        <Section>Education</Section>
        {education.map((ed) => (
          <ul>
            <PrimaryInfo>{ed.school}</PrimaryInfo>
            <SecondaryInfo>{ed.degree + " - " + ed.field}</SecondaryInfo>
            <p style={{ margin: 0 }}>
              <Dates>{ed.dti}</Dates>-<Dates>{ed.dtf ? ed.dtf : "present"}</Dates>
            </p>
          </ul>
        ))}
        <Section>Languages</Section>
        {languages.map((exp) => (
          <ul>
            <PrimaryInfo>
              {exp.language} -{" "}
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>{exp.fluence}</span>
            </PrimaryInfo>
          </ul>
        ))}
      </Printable>
    );
  };

  const addItem = (section) => {
    console.log(section);
    let aux = [];
    switch (section) {
      case "experience":
        aux = experiences;
        aux.push({
          company: "",
          job: "",
          dti: "",
          dtf: "",
          tasks: "",
        });
        setExperiences([...aux]);
        break;
      case "education":
        aux = education;
        aux.push({
          school: "",
          degree: "",
          field: "",
          dti: "",
          dtf: "",
        });
        setEducation([...aux]);
        break;
      case "languages":
        aux = languages;
        aux.push({
          language: "",
          fluence: "",
        });
        setLanguages([...aux]);
        break;
      case "personal":
        aux = personal;
        aux.push({
          name: "",
          email: "",
          phone: "",
          location: "",
          intro: "",
        });
        setLanguages([...aux]);
        break;
      default:
        alert("brete");
    }
  };

  const removeItem = (index, section) => {
    let aux = [];
    switch (section) {
      case "experience":
        aux = experiences;
        aux.splice(index, 1);
        setExperiences([...aux]);
        break;
      case "education":
        aux = education;
        aux.splice(index, 1);
        setEducation([...aux]);
        break;
      case "languages":
        aux = languages;
        aux.splice(index, 1);
        setLanguages([...aux]);
        break;
      case "personal":
        aux = personal;
        aux.splice(index, 1);
        setPersonal([...aux]);
        break;
      default:
        alert("brete");
    }
  };

  const toggle = (module) => {
    setCollapse({ ...collapse, [module]: !collapse[module] });
  };

  const updateField = (index, field, e, section) => {
    let aux = [];
    switch (section) {
      case "experience":
        aux = experiences;
        aux[index][field] = e;
        setExperiences([...aux]);
        break;
      case "education":
        aux = education;
        aux[index][field] = e;
        setEducation([...aux]);
        break;
      case "languages":
        aux = languages;
        aux[index][field] = e;
        setLanguages([...aux]);
        break;
      case "personal":
        aux = personal;
        aux[index][field] = e;
        setLanguages([...aux]);
        break;
      default:
        alert("brete");
    }
  };

  return (
    <div className="App">
      <Editor>
        <Personal
          personal={personal}
          updateField={updateField}
          collapse={collapse.personal}
          toggle={toggle}
          remove={removeItem}
          add={addItem}
        />
        <Experiences
          experiences={experiences}
          updateField={updateField}
          collapse={collapse.experience}
          toggle={toggle}
          remove={removeItem}
          add={addItem}
        />
        <Education
          education={education}
          updateField={updateField}
          collapse={collapse.education}
          toggle={toggle}
          remove={removeItem}
          add={addItem}
        />
        <Languages
          languages={languages}
          updateField={updateField}
          collapse={collapse.languages}
          toggle={toggle}
          remove={removeItem}
          add={addItem}
        />
      </Editor>
      <Preview>
        <Select setFont={setFont} />
        <Paper>
          <Scale>
            <div ref={componentRef}>
              <ComponentToPrint />
            </div>
          </Scale>
        </Paper>
        <ReactToPrint trigger={() => <Button><FiDownloadCloud style={icon}/> {" "} Print or Download</Button>} content={() => componentRef.current} />
      </Preview>
    </div>
  );
}

export default Generator;
