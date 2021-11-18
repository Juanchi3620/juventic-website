import React from "react";

const Recomendados = () => {
  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="container col p-3 m-3">
            <h2>Los recomendados del chef</h2>
            <div className="row">
              <div className="col-6">
                <img
                  src="./Images/menu1@2x.png"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
                <img
                  src="./Images/menu2@2x.png"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
              </div>
              <div className="col-6">
                <img
                  src="./Images/menu3@2x.png"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
                <img
                  src="./Images/menu4@2x.png"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
              </div>
            </div>
            <div>
              <div className="btn_enviar">
                <a
                  type="button"
                  className="btn naranja w-50 text-white"
                  href="menua copy.html"
                >
                  Consulta el menu
                </a>
              </div>
            </div>
          </div>
          <div className="container col p-3">
            <div className="container row">
              <img src="./Images/menu@2x.png" className="rounded w-100 " alt="Menu"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recomendados;
