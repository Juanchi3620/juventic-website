import emailjs from "emailjs-com";


const sendMail = (params) => {
  const tempParams = {
    nombre: params.nombres,
    cc: params.email,
    servicios: params.servicio,
    fecha: params.fecha,
    n_personas: params.num_personas,
    telefono: params.telefono,
    indicaciones: params.observacion,
  };

  emailjs
    .send("service_o72r98f", "template_ikbiyn7", tempParams, "user_0iYypn9FeZXEv1dohl7Ch")
    .then((res) => {
      console.log("success", res.status);
    });
};

export { sendMail };
