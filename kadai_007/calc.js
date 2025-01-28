let num =  15;
console.log(num);
if (num % 3 == 0 && num % 5 == 0) {
  console.log("3と5の倍数です")
}

let num = 3;
console.log(num);
if (num % 3 == 0) {
  console.log("3の倍数です")
}

let num = 5;
console.log(num);
if (num % 5 == 0) {
  console.log("5の倍数です")
}

let num = 11;
console.log(num);
if (num % 5 == 0 && num % 3 == 0) {
  console.log("3と5の倍数です")
}
else if (num % 3 == 0) {
  console.log("3の倍数です")
}
else if (num % 5 == 0) {
  console.log("5の倍数です")
}
else {
  console.log("num")
}
