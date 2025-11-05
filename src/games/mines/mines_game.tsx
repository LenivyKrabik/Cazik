import React from "react";

const am_tnt = 4; //приймач режиму гри
const place_of_bomb = Array(am_tnt);

for (let i = 0; i < place_of_bomb.length; i++) {
  const place = Math.floor(Math.random() * 36);

  if (!place_of_bomb.includes(place)) {
    place_of_bomb[i] = place;
  } else {
    i--;
  }
}
console.log(place_of_bomb);

const arr_1 = Array(6).fill(false); //
const arr_matrix = arr_1.map((item) => (item = Array(6).fill(false))); //створення дворівневий масив з пустими слотами

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    if (place_of_bomb.includes(i * 6 + j)) {
      arr_matrix[i][j] = true;
    }
  }
}

function matrix_of_button() {
  return;
}

export default matrix_of_button;
