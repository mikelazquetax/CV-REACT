import React, { useState, useEffect } from "react";
import "./Education.scss";
import SingleEdu from "./SingleEdu";

export default function Education({ curriculumSections }) {
  const [certificaciones, setCertificaciones] = useState("Certificaciones");
let  val = certificaciones



  const textButton = (cursos) => {
    if (cursos === "Certificaciones") {
      val = 'Formacion'
      
    } else if(cursos === 'Formacion') {
       val = 'Certificaciones'
    }
  };

  useEffect(()=>{


    textButton(certificaciones)
  },[certificaciones])
  



  if (val === "Certificaciones" || val === "") {
    return (
      <div className="education">
        <h2 className="education__title">Educacion</h2>
        <button className="education__button" onClick={() => setCertificaciones(val)}>
          Formacion
        </button>

        <div className="education__section">
          {curriculumSections.certificaciones.map((educ, index) => {
            return <SingleEdu key={index} educ={educ} />;
          })}
        </div>
      </div>
    );
  } else if (val === "Formacion") {
    return(
    <div className="education">
      <h2 className="education__title">Educacion</h2>
      
      <button className="education__button" onClick={() => setCertificaciones(val)}>
        Certificaciones
      </button>
      
      <div className="education__section">
        {curriculumSections.formacion.map((educ, index) => {
          return <SingleEdu key={index} educ={educ} />;
        })}
      </div>
    </div>);
  }
}
