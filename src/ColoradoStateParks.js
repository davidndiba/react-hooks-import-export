import React from "react";
import MesaVerde from "./parks/MesaVerde";
import RockyMountain, * as RMFunctions from "./parks/RockyMountain";

console.log(RMFunctions.trees);
RMFunctions.wildlife();
RMFunctions.elevation();

function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}

export default ColoradoStateParks;
