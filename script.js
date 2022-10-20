"use strict";

// SOAL PERTAMA
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

let str = "NEGIE1";
const reverseStr = (str) => [...str].reverse().join("");
console.log(reverseStr(str));

// SOAL KEDUA
// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut,
// jika ada kata dengan panjang yang sama silahkan ambil salah satu

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longest = (sentence) => {
  // Split the string into array
  str = sentence.split(" ");
  // Get the index of largest item of the array
  let index = str.reduce((accumulator, current, i) => {
    if (current.length > str[accumulator].length) {
      return i;
    }
    return accumulator;
  }, 0);

  return str[index];
};

console.log(longest(sentence));

// SOAL KETIGA
// Terdapat dua buah array yaitu array INPUT dan array QUERY,
// silahkan tentukan berapa kali kata dalam QUERY terdapat pada arra
INPUT = ["xc", "dz", "bbb", "dz"];
QUERY = ["bbb", "ac", "dz"];

const sameStr = (input, query) => {
  input.forEach((duplicates) => {
    let curr = query.indexOf(duplicates);
    if (curr !== -1) {
      return console.log(duplicates);
    }
  });
};
console.log(sameStr(INPUT, QUERY));

// SOAL KEEMPAT
// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const diagonalDifference = (matrix) => {
  let firstSum = 0,
    secondSum = 0;
  for (let row = 0; row < matrix.length; row++) {
    firstSum += matrix[row][row];
    secondSum += matrix[row][matrix.length - row - 1];
  }
  console.log(firstSum + " " + secondSum);
  return firstSum - secondSum;
};
console.log(diagonalDifference(Matrix));
