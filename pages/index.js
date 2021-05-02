export default function HomePage({ movidita }) {
  const moviditas = require("../moviditas/moviditas.json");
  const movidita = moviditas.moviditas[Math.floor(Math.random() * moviditas.moviditas.length)];
  return <div>Tremenda movidita lo de {`${movidita.movidita}`} ¿Que no?!</div>;
}
