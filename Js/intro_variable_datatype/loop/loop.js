// for

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


for (let i = 5; i >= 1; i--) {
  console.log(i);
}


for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}


for (let i = 1; i <= 9; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}


let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("Sum:", sum);


for (let i = 1; i <= 10; i++) {
  console.log("2 x " + i + " = " + (2 * i));
}


for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}


for (let i = 1; i <= 10; i++) {
  if (i == 6) break;
  console.log(i);
}

let name1 = "Dhanesh";
for (let i = 0; i < name1.length; i++) {
  console.log(name1[i]);
}

for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}


for (let i = 10; i <= 20; i++) {
  console.log(i);
}


for (let i = 0; i <= 10; i += 3) {
  console.log(i);
}


for (let i = 1; i <= 6; i++) {
  if (i > 3) console.log(i);
}

let fruits = ["Apple", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numbers = [10, 20, 30, 40];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
  count++;
}
console.log("Total items:", count);


let marks = [50, 60, 70];
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}
console.log("Total marks:", total);


for (let i = 1; i <= 5; i++) {
  console.log("*");
}



// while

let i1 = 1;
while (i1 <= 5) {
  console.log(i1);
  i1++;
}

let n1 = 10;
while (n1 >= 1) {
  console.log(n1);
  n1--;
}

let e1 = 2;
while (e1 <= 10) {
  console.log(e1);
  e1 += 2;
}

let count1 = 1;
while (count1 <= 4) {
  console.log("Hi");
  count1++;
}

let s1 = 1, total1 = 0;
while (s1 <= 5) {
  total1 = total1 + s1;
  s1++;
}
console.log("Sum:", total1);

let x1 = 1;
while (x1 <= 9) {
  console.log(x1);
  x1 += 2;
}

let a1 = 1;
while (a1 <= 6) {
  if (a1 == 4) break;
  console.log(a1);
  a1++;
}

let b1 = 1;
while (b1 <= 5) {
  if (b1 == 3) {
    b1++;
    continue;
  }
  console.log(b1);
  b1++;
}

let word1 = "Loop";
let index1 = 0;
while (index1 < word1.length) {
  console.log(word1[index1]);
  index1++;
}

let k1 = 1;
while (k1 <= 10) {
  if (k1 % 3 == 0) console.log(k1);
  k1++;
}

let j1 = 1;
while (j1 <= 3) {
  console.log(j1);
  j1++;
}

let t1 = 2;
while (t1 <= 6) {
  console.log(t1);
  t1++;
}


// do-while  

let i2 = 1;
do {
  console.log(i2);
  i2++;
} while (i2 <= 5);

let n2 = 5;
do {
  console.log(n2);
  n2--;
} while (n2 >= 1);

let e2 = 2;
do {
  console.log(e2);
  e2 += 2;
} while (e2 <= 10);

let o2 = 1;
do {
  console.log(o2);
  o2 += 2;
} while (o2 <= 9);

let w2 = 1;
do {
  console.log("Welcome");
  w2++;
} while (w2 <= 3);

let num2 = 1, sum2 = 0;
do {
  sum2 += num2;
  num2++;
} while (num2 <= 4);
console.log("Sum:", sum2);

let a2 = 1;
do {
  if (a2 == 4) break;
  console.log(a2);
  a2++;
} while (a2 <= 6);

let c2 = 0;
do {
  c2++;
  if (c2 == 2) continue;
  console.log(c2);
} while (c2 < 4);

let p2 = 10;
do {
  console.log(p2);
  p2++;
} while (p2 <= 15);

let s2 = 1;
do {
  console.log(s2);
  s2++;
} while (s2 < 4);

let test2 = 10;
do {
  console.log("Runs once");
} while (test2 < 5);

let line2 = 1;
do {
  console.log("*");
  line2++;
} while (line2 <= 3);
