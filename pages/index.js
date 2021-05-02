export async function getStaticProps() {
  const moviditas = require("../moviditas/moviditas.json");
  const movidita = moviditas.moviditas[Math.floor(Math.random() * moviditas.moviditas.length)];

  return {
    props: {
      movidita: movidita,
    },
    revalidate: 1,
  };
}

export default function HomePage({ movidita }) {
  return <div>Tremenda movidita lo de {`${movidita.movidita}`} ¿Que no?!</div>;
}
