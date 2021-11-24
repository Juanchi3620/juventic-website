import React, { Component } from "react";

class Testimonios extends Component {
  render() {
    return (
      <>
        <div
          id="demo"
          className=" Carrusel Carrusel-slide carousel slide"
          data-ride="carousel"
        >
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="Carrusel-interno carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm col-sm-3">
                  <img
                    className="Testimonio-img"
                    src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2Ftestimonio1%402x.png?alt=media&token=fb67c7c0-ad05-4c07-8898-e9af783bf57e"
                    alt="Testimonio 1"
                  />
                </div>
                <div className="col-sm col-sm-9">
                  <h6 style={{fontSize:"1.5rem"}}>
                    <span className="comillas">"</span><i>Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Nesciunt numquam incidunt
                    rem porro. Esse aliquam numquam sit provident! Inventore
                    sapiente provident voluptate repellat facilis commodi at
                    odio, consequatur quis aperiam?</i>
                    <span className="comillas">"</span>
                  </h6>
                </div>
              </div>
              <div className="fila row">
                <div className="col-sm"></div>
                <div className="Nombre-Testimonio col-sm">
                  <h4><b>Francisco Mejia</b></h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm col-sm-3">
                  <img
                    className="Testimonio-img"
                    src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2FTestimonio3.jpeg?alt=media&token=6b3e98ad-8674-4da4-8258-b4ee871de715"
                    alt="Testimonio 1"
                  />
                </div>
                <div className="col-sm col-sm-9">
                  <h6 style={{fontSize:"1.5rem"}}>
                    <span className="comillas">"</span><i>Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Officiis voluptatibus
                    ipsum exercitationem velit fugit ea deleniti fuga mollitia.
                    Optio cum molestias delectus labore beatae consequatur odio
                    veritatis nulla unde consectetur!</i>
                    <span className="comillas">"</span>
                  </h6>
                </div>
              </div>
              <div className="fila row">
                <div className="col-sm"></div>
                <div className="Nombre-Testimonio col-sm">
                  <h4><b>Sofia Maza</b></h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm col-sm-3">
                  <img
                    className="Testimonio-img"
                    src="https://firebasestorage.googleapis.com/v0/b/imagenes-guardar.appspot.com/o/Restaurante%2FTestimonio2.jpeg?alt=media&token=85805456-639e-4bdf-9cb1-6772e0a81b61"
                    alt="Testimonio 1"
                  />
                </div>
                <div className="col-sm col-sm-9">
                  <h6 style={{fontSize:"1.5rem"}}>
                    <span className="comillas">"</span><i>Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Quod delectus harum vero
                    mollitia, provident sit, deserunt fuga beatae fugiat
                    doloremque quidem ab nulla impedit natus expedita, aliquid
                    cumque minima incidunt?</i>
                    <span className="comillas">"</span>
                  </h6>
                </div>
              </div>
              <div className="fila row">
                <div className="col-sm"></div>
                <div className="Nombre-Testimonio col-sm">
                  <h4><b>Long Xun</b></h4>
                </div>
              </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Testimonios;

/* <div id="demo" class=" Carrusel Carrusel-slide carousel slide" data-ride="carousel">

<!-- Indicators -->
<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<!-- The slideshow -->
<div class="Carrusel-interno carousel-inner">
  <div class="carousel-item active">
    <div class="row">
      <div class="col-sm col-sm-3">
        <img class= "Testimonio-img" src="img/testimonio1@2x.png" alt="Testimonio 1">  
      </div>
      <div class="col-sm col-sm-9">
        <h6><span class="comillas">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam incidunt rem porro. Esse aliquam numquam sit provident! Inventore sapiente provident voluptate repellat facilis commodi at odio, consequatur quis aperiam?<span class="comillas">"</span></h6>
      </div>
    </div>
    <div class="fila row">
      <div class="col-sm"></div>
      <div class="Nombre-Testimonio col-sm">
        <h4>Francisco Mejia</h4>
      </div>
    </div>

    <!--<div class="Carrusel-text-img">
      <img class= "Testimonio-img" src="img/testimonio1@2x.png" alt="Testimonio 1">
      <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores ex eius exercitationem rerum quis distinctio vitae cum, amet fugit! Officiis possimus facere, autem ut sed recusandae in ullam sint?</h6>
      <h4>Nombre Apellido</h4>
    </div>
    -->
  </div>
  <div class="carousel-item">
    <div class="row">
      <div class="col-sm col-sm-3">
        <img class= "Testimonio-img" src="img/Testimonio3.jpeg" alt="Testimonio 1">
      </div>
      <div class="col-sm col-sm-9">
        <h6><span class="comillas">"</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptatibus ipsum exercitationem velit fugit ea deleniti fuga mollitia. Optio cum molestias delectus labore beatae consequatur odio veritatis nulla unde consectetur!<span class="comillas">"</span></h6>
      </div>
    </div>
    <div class="fila row">
      <div class="col-sm"></div>
      <div class="Nombre-Testimonio col-sm">
        <h4>Sofia Maza</h4>
      </div>
    </div>
    <!--<div class="Carrusel-text-img">
      <img class= "Testimonio-img" src="img/testimonio1@2x.png" alt="Testimonio 2">
      <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores ex eius exercitationem rerum quis distinctio vitae cum, amet fugit! Officiis possimus facere, autem ut sed recusandae in ullam sint?</h6>
      <h4>Nombre Apellido</h4>
    </div>
    -->
  </div>
  <div class="carousel-item">
    <div class="row">
      <div class="col-sm col-sm-3">
        <img class= "Testimonio-img" src="img/Testimonio2.jpeg" alt="Testimonio 1">
      </div>
      <div class="col-sm col-sm-9">
        <h6><span class="comillas">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus harum vero mollitia, provident sit, deserunt fuga beatae fugiat doloremque quidem ab nulla impedit natus expedita, aliquid cumque minima incidunt?<span class="comillas">"</span></h6>
      </div>
    </div>

    <div class="fila row">
      <div class="col-sm"></div>
      <div class="Nombre-Testimonio col-sm">
        <h4>Long Xun</h4>
      </div>
    </div>
    <!--<div class="Carrusel-text-img">
      <img class= "Testimonio-img" src="img/testimonio1@2x.png" alt="Testimonio 3">
      <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores asperiores ex eius exercitationem rerum quis distinctio vitae cum, amet fugit! Officiis possimus facere, autem ut sed recusandae in ullam sint?</h6>
      <h4>Nombre Apellido</h4>
    </div>
  </div>-->
</div>

<!-- Left and right controls -->
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>

</div> */
