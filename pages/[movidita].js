const moviditas = require("../moviditas/moviditas.json");

export async function getStaticPaths() {
  const paths = moviditas.moviditas.map((movidita) => ({
    params: { movidita: movidita.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movidita = moviditas.moviditas.filter(function (item) {
    return item.slug == params.movidita;
  })[0];
  return {
    props: {
      movidita: movidita,
    },
  };
}

export default function MovidaPage({ movidita }) {
  return <div>Tremenda movidita lo de {`${movidita.movidita}`} ¿Que no?!</div>;
}
