import React, { useState } from "react"; //1. importar el hook useState

//use state = usar estado;

//include images into your bundle

//create your first component

const Home = () => {
  //    valor inicial, actualiza el valor inicial
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");

  //    useState()//===> [variable,function]

  //funcionalidades del componente
  //  variables, constates, funciones
  function encenderRojo() {
    if (color1 === "btn-danger") {
      setColor1("");
    } else if (color2 === "btn-warning") {
      setColor2("");
      setColor1("btn-danger");
    } else if (color3 === "btn-success") {
      setColor3("");
      setColor1("btn-danger");
    } else {
      setColor1("btn-danger");
    }
  }

  function encenderAmarillo() {
    if (color2 === "btn-warning") {
      setColor2("");
    } else if (color1 === "btn-danger") {
      setColor1("");
      setColor2("btn-warning");
    } else if (color3 === "btn-success") {
      setColor3("");
      setColor2("btn-warning");
    } else {
      setColor2("btn-warning");
    }
  }

  function encenderVerde() {
    if (color3 === "btn-success") {
      setColor3("");
    } else if (color1 === "btn-danger") {
      setColor1("");
      setColor3("btn-success");
    } else if (color2 === "btn-warning") {
      setColor2("");
      setColor3("btn-success");
    } else {
      setColor3("btn-success");
    }
  }

//   function cycle() {
    
//   }

  return (
    <div>
      <div className="container bg-dark mt-3" style={{ width: 20, height: 120 }}></div>
      <div
        className="align-items-center justify-content-center d-flex flex-column  p-1 mx-auto bg-dark rounded"
        style={{ width: 120, height: 300 }}
      >
        <button
          className={"rounded-circle border-danger btn " + color1}
          style={{ width: 90, height: 90 }}
          onClick={encenderRojo}
        ></button>
        <button
          className={"my-2 rounded-circle border-warning btn " + color2}
          style={{ width: 90, height: 90 }}
          onClick={encenderAmarillo}
        ></button>
        <button
          className={"rounded-circle border-success btn " + color3}
          style={{ width: 90, height: 90 }}
          onClick={encenderVerde}
        ></button>
      </div>
      {/* <div className="container"><button id="button" class="btn btn-light" onClick="">
      <strong>Start cycle</strong>
    </button></div> */}
    </div>
  );
};

export default Home;
