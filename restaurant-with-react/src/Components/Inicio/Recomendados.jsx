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
                  src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Fmenu1%402x.png?alt=media&token=41cbd626-0d81-4935-a1ad-071ba87da063"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Fmenu2%402x.png?alt=media&token=f17bee62-276f-4644-97d0-0563f8a46ead"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
              </div>
              <div className="col-6">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Fmenu3%402x.png?alt=media&token=e9356534-a3c2-4a4b-ad08-23b2c0964ad1"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Fmenu4%402x.png?alt=media&token=d74c6bba-35ec-48a4-84d0-2c11920ab77f"
                  className="w-100 shadow-1-strong rounded mb-4"
                  alt="Menu"
                />
              </div>
            </div>
            <div>
              <div className="btn_enviar">
                <a type="button" className="btn naranja w-50 text-white" href="/Menu" style={{fontSize:"1.5rem"}}>
                  Consulta el menu
                </a>
              </div>
            </div>
          </div>
          <div className="container col p-3">
            <div className="container row">
              <img src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Fmenu%402x.png?alt=media&token=b27dda71-26d6-4573-bffc-bca710074ee0" className="rounded w-100 " alt="Menu"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recomendados;
