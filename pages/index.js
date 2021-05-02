import Movidita from "../components/Movidita";
export default function HomePage() {
  const moviditas = require("../moviditas/moviditas.json");
  const movidita = moviditas.moviditas[Math.floor(Math.random() * moviditas.moviditas.length)];
  return (
    <div>
      <Movidita movidita={movidita.movidita} />
    </div>
  );
}
