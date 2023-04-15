const fs = require("fs");
const obj = JSON.parse(fs.readFileSync("task.json", "utf8"));
answer = {};
  answer = JSON.parse(fs.readFileSync("answer.json", "utf8"));
  let arrMassKgs = obj[2].arrMassKgs;
let arrMassLbs = obj[2].arrMassLbs;

let lbs = 0.453592;
arrMassLbs = arrMassLbs.map((i) => +(i * lbs).toFixed(2));

let weights = [...arrMassKgs, ...arrMassLbs];

let weight_limit = obj[2].weight_limit;

function nextBestResult(weight, w_l = weight_limit) {
  if (searchResult(weight) > w_l) {
   
    return;
  } else {
    nextBestResult(weight + 0.01);
  }
}
+nextBestResult(weight_limit);
function searchResult(weight_limit) {
  let result = [];

  for (let i = weights.length - 1; i >= 0; i--) {
    if (best_value(i + 1, weight_limit) > best_value(i, weight_limit)) {
      if (result.length <= 11) {
        result.push(weights[i]);

        weight_limit -= weights[i];
      }
    }
  }

  function best_value(nitems, weight_limit) {
    if (nitems == 0) {
      return 0;
    } else if (weights[nitems - 1] > weight_limit) {
      return best_value(nitems - 1, weight_limit);
    } else {
      return Math.max(
        best_value(nitems - 1, weight_limit),
        best_value(nitems - 1, weight_limit - weights[nitems - 1]) +
        weights[nitems - 1]
      );
    }
  }
 
   
  answer[2].task3_1 = result.reduce((acc, i) => acc + i)+20
    
    
  answer[2].po_2diska = result
    .map((i) => {
      arrMassLbs.forEach((elem) => {
        if (i === elem) {
          return (i = (+(i / lbs).toFixed(0))/2 + "lbs"+`=${i/2}kgs`);
        }
      });
      return i;
    })
    .map((i) => typeof i ===  "string" ?i :i / 2 + "kgs");
  
  

  return result.reduce((acc, i) => acc + i);
 
}

fs.writeFileSync("answer.json", JSON.stringify(answer));