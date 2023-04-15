const fs = require("fs");
let answer={}

const obj = JSON.parse(fs.readFileSync("task.json", "utf8"));
  answer = JSON.parse(fs.readFileSync("answer.json", "utf8"));

 answer[0].task1 = transform(obj[0].a, obj[0].b);


function transform(a, b) {
  let tran;
  let c = String(a);
  if (a > b) {
    return (tran = "нет");
  }

  while (a < b) {
    {
      a = a * 2;
      c = c + 1;
      if (a === b || c == b) {
        return (tran = "да");
      } else if (a > b && c > b) {
        return (tran = "нет");
      }
    }
  }

  return tran;
}



fs.writeFileSync("answer.json", JSON.stringify(answer));
 
