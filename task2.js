const fs = require("fs");
const obj = JSON.parse(fs.readFileSync("task.json", "utf8"));
answer = {}
answer = JSON.parse(fs.readFileSync("answer.json", "utf8"));
let n = obj[1].n
arr = []
 for (let i = 0; i <= n; i++) {
   
   arr[i] = Math.ceil(Math.random() * 10);
 
 } 
function find(arr, index = 0) {
  if (index === arr.length - 1 || arr.length < 1) {
    return "no match";
  }

  return arr.findLastIndex((n) => n === arr[index]) !== index
    ? arr[index]
    : find(arr, index + 1);
}

answer[1].task2= find(arr);
answer[1].arr=arr
fs.writeFileSync("answer.json", JSON.stringify(answer));
