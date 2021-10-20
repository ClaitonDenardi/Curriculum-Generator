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
} from "../Styles";
import Education from "./Education";
import Languages from "./Languages";
import Experiences from "./Experiences";
import Personal from "./Personal";

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

  const ComponentToPrint = () => {
    return (
      <div style={{ textAlign: "left", padding: "10px" }}>
        {personal.map((exp) => (
          <ul>
            <PrimaryInfo>{exp.name}</PrimaryInfo>
            <SecondaryInfo>{exp.location}</SecondaryInfo>
            <SecondaryInfo>{exp.email + " / " + exp.phone}</SecondaryInfo>
            <Description>{exp.intro}</Description>
          </ul>
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
      </div>
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
          collapse={collapse.experiences}
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
        <Paper>
          <Scale>
            <div ref={componentRef}>
              <ComponentToPrint />
            </div>
          </Scale>
        </Paper>
        <ReactToPrint trigger={() => <button>Print</button>} content={() => componentRef.current} />
      </Preview>
    </div>
  );
}

export default Generator;
