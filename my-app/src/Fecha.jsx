import React from "react";

const Fecha = () => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const dayMonth = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const date =
    days[day] + " " + dayMonth + " de " + months[month] + " de " + year;
  return (
    <>
      <div className="fecha">{date}</div>
    </>
  );
};
export default Fecha;
