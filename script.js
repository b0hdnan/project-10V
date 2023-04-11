console.clear();
let box = document.querySelectorAll(".box");
let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", mark);
}
let last = "0";

function mark() {
  let target = 0;
  if (this === box[0]) {
    counter[0]++;
    target = 0;
  }
  if (this === box[1]) {
    counter[1]++;
    target = 1;
  }
  if (this === box[2]) {
    counter[2]++;
    target = 2;
  }
  if (this === box[3]) {
    counter[3]++;
    target = 3;
  }
  if (this === box[4]) {
    counter[4]++;
    target = 4;
  }
  if (this === box[5]) {
    counter[5]++;
    target = 5;
  }
  if (this === box[6]) {
    counter[6]++;
    target = 6;
  }
  if (this === box[7]) {
    counter[7]++;
    target = 7;
  }
  if (this === box[8]) {
    counter[8]++;
    target = 8;
  }
  console.log(counter);
  console.log(target);

  if (last == "0") last = "x";
  else last = "0";
  console.log(last);

  if (counter[target] % 2 === 1 && last == "0") {
    box[target].style.background = "red";
    box[target].innerText = "X";
  } else {
    box[target].style.background = "#999";
    box[target].innerText = "0";
  }
}
