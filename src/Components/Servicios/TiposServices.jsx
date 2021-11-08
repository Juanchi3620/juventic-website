import React from "react";
import Services from "./Services.json";

export const TiposServices = () => {
  /* "row d-flex flex-row row-lg-6 row-md-12 row-sm-12" */
  return (
    <>
      ;
      <div className="Contenido">
        <div className="row align-items-start">
          {Services.map((servicio, index) => {
            return (
              <div key={index} className="d-flex flex-column col-lg-6 col-md-12 col-sm-12" style={{ flexDirection: "row", marginBottom: "2rem" }} >
                <div className="conte" style={{display: "flex",flexDirection: "row", backgroundColor: "rgb(219, 215, 215)" }}>
                  <div
                    className="col-sm-6 p-5"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40)",
                      textAlign: "center",
                    }}
                  >
                    <img
                      className="mx-auto Imagen-servicio rounded img-fluid"
                      src={servicio.imagen}
                      alt="Empleado tal"
                    ></img>
                  </div>
                  <div className="col-sm-6" style={{ marginTop: "2rem" }}>
                    <h1 className="mx-auto">{servicio.titulo}</h1>
                    <p className="mx-auto">{servicio.descripcion}</p>
                    <a type="button" className="btn btn-danger" href="/Reservas">
                      ¿PREGUNTAS? CONTACTANOS
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-sm-3 p-5" style={{backgroundImage:"linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40)",textAlign: "center",}}>
          <img src="img/regalo-de-cumpleanos.png" className="Imagen-servicio rounded img-fluid"alt="Cumpleaños"/>
        </div>
        <div className="col-sm-3" style={{ marginTop: "2rem" }}>
          <h1>Celebración de cumpleaños</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            odit, quasi repellat velit ex deserunt excepturi voluptatem et ullam
            vel sapiente molestiae, cumque deleniti delectus animi quae minus
            sunt iure?
          </p>
          <a type="button" className="btn btn-danger" href="#">
            ¿PREGUNTAS? CONTACTANOS
          </a>
        </div> */}
        </div>
      </div>
    </>
  );
};

/* <div class="Contenido">
            <div class="row" style="background-color: rgb(219, 215, 215);">
                <div class="col-sm-3 p-5" style="background-image: linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40); text-align: center;">
                    <img src="img/regalo-de-cumpleanos.png" class="Imagen-servicio rounded img-fluid" alt="Cumpleaños">
                </div>
                <div class="col-sm-3" style="margin-top: 2rem; ">
                    <h1>Celebración de cumpleaños</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit, quasi repellat velit ex deserunt excepturi voluptatem et ullam vel sapiente molestiae, cumque deleniti delectus animi quae minus sunt iure?</p>
                    <a type="button" class="btn btn-danger" href="contacto.html">¿PREGUNTAS? CONTACTANOS</a>
                </div>

                <div class="col-sm-3 p-5" style="background-image: linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40);">
                    <img src="img/aniversario.png" class="Imagen-servicio rounded img-fluid" alt="Aniversarios">
                </div>
                <div class="col-sm-3" style="margin-top: 2rem;">
                    <h1>Aniversarios</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit, quasi repellat velit ex deserunt excepturi voluptatem et ullam vel sapiente molestiae, cumque deleniti delectus animi quae minus sunt iure?</p>
                    <a type="button" class="btn btn-danger" href="contacto.html">¿PREGUNTAS? CONTACTANOS</a>
                </div>
            </div>
        
            <div class="row" style="margin-top: 3rem; background-color: rgb(219, 215, 215);">
                <div class="col-sm-3 p-5" style="background-image: linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40);">
                    <img src="img/globo.png" class="Imagen-servicio rounded img-fluid" alt="Fiestas Infantiles">
                </div>
                <div class="col-sm-3" style="margin-top: 2rem;">
                    <h1>Fiestas Infantiles</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit, quasi repellat velit ex deserunt excepturi voluptatem et ullam vel sapiente molestiae, cumque deleniti delectus animi quae minus sunt iure?</p>
                    <a type="button" class="btn btn-danger" href="contacto.html">¿PREGUNTAS? CONTACTANOS</a>
                </div>
                <div class="col-sm-3 p-5" style="background-image: linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40);">
                    <img src="img/propuesta.png" class="Imagen-servicio rounded img-fluid" alt="Declaraciones o propuestas">
                </div>
                <div class="col-sm-3" style="margin-top: 2rem;">
                    <h1>Declaraciones o propuestas</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit, quasi repellat velit ex deserunt excepturi voluptatem et ullam vel sapiente molestiae, cumque deleniti delectus animi quae minus sunt iure?</p>
                    <a type="button" class="btn btn-danger" href="contacto.html">¿PREGUNTAS? CONTACTANOS</a>
                </div>
            </div>
    
            <div class="row" style="margin-top: 3rem; background-color: rgb(219, 215, 215);">
             <div class="col-sm-3 p-5" style="background-image: linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40);">
                 <img src="img/despedida-de-soltera.png" class="Imagen-servicio rounded img-fluid" alt="Despedidas">
             </div>
             <div class="col-sm-3" style="margin-top: 2rem;">
                 <h1>Despedidas</h1>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit, quasi repellat velit ex deserunt excepturi voluptatem et ullam vel sapiente molestiae, cumque deleniti delectus animi quae minus sunt iure?</p>
                 <a type="button" class="btn btn-danger" href="contacto.html">¿PREGUNTAS? CONTACTANOS</a>
             </div>
             <div class="col-sm-3 p-5" style="background-image: linear-gradient(to right top, #f94d4d, #ff7a36, #ffa71d, #fed416, #e6ff40);">
                 <img src="img/cocina.png" class="Imagen-servicio rounded img-fluid" alt="Cena con amigos">
             </div>
             <div class="col-sm-3" style="margin-top: 2rem;">
                 <h1>Cena con amigos</h1>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, odit, quasi repellat velit ex deserunt excepturi voluptatem et ullam vel sapiente molestiae, cumque deleniti delectus animi quae minus sunt iure?</p>
                 <a type="button" class="btn btn-danger" href="contacto.html">¿PREGUNTAS? CONTACTANOS</a>
             </div>
         </div>
        </div> */
