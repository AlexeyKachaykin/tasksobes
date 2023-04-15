const fs = require("fs");
const obj = JSON.parse(fs.readFileSync("task.json", "utf8"));
answer = {};
answer = JSON.parse(fs.readFileSync("answer.json", "utf8"));
let scena =obj[4].scena

let arrProjector = [];
scena.forEach((place, i) => {
  place.forEach((elem, j) => {
    if (elem === 0) {
      if (j !== 0 && scena[i][j - 1] === 1) {
        arrProjector.push(`лево[${i}],[${j}]`);
      }
      if (j !== scena[0].length - 1 && scena[i][j + 1] === 1) {
        arrProjector.push(`право[${i}],[${j}]`);
      }
      if (i !== 0 && scena[i - 1][j] === 1) {
        arrProjector.push(`верх [${i}],[${j}]`);
      }
      if (i !== scena.length - 1 && scena[i + 1][j] === 1) {
        arrProjector.push(`низ[${i}],[${j}]`);
      }
    }
  });
});

answer[4].task4 = arrProjector;
fs.writeFileSync("answer.json", JSON.stringify(answer));
