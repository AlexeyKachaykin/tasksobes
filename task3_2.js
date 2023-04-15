const fs = require("fs");
const obj = JSON.parse(fs.readFileSync("task.json", "utf8"));

answer = {};
answer = JSON.parse(fs.readFileSync("answer.json", "utf8"));
sizes = obj[3].sizes;
let arrobjs = [];

const cartesian_product = (lists, cb) => {
  if (cb === undefined) {
    const items = [];
    cartesian_product(lists, (item) => items.push(item.slice()));

    return items;
  }

  let item = new Array(lists.length);
  const gen = (i) => {
    if (i === lists.length) {
      cb(item);
      arrobjs.push(
        item.reduce((target, key) => {
          typeof target[key] !== "undefined"
            ? (target[key] = target[key] + 1)
            : (target[key] = 1);

          return target;
        }, {})
      );
      return;
    }
    for (let v of lists[i]) {
      item[i] = v;
      gen(i + 1);
    }
  };
  gen(0);
};
t_shirt = obj[3].t_shirt;
cartesian_product(t_shirt);
const result = arrobjs.filter((obj) =>
  Object.keys(obj).every((key) => obj[key] <= sizes[key])
);
answer[3].task3_2 = result[0];
fs.writeFileSync("answer.json", JSON.stringify(answer));
