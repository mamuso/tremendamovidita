const moviditas = require("../moviditas/moviditas.json");

export async function getStaticProps() {
  const movidita = moviditas.moviditas[Math.floor(Math.random() * moviditas.moviditas.length)];

  return {
    props: {
      movidita: movidita,
    },
  };
}

export default function HomePage({ movidita }) {
  return <div>Tremenda movidita lo de {`${movidita.movidita}`} ¿Que no?!</div>;
}
