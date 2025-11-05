const am_tnt = 4; //приймач режиму гри
const size = 5;
const place_of_bomb = Array(am_tnt);

for (let i = 0; i < place_of_bomb.length; i++) {
  const place = Math.floor(Math.random() * 25);

  if (!place_of_bomb.includes(place)) {
    place_of_bomb[i] = place;
  } else {
    i--;
  }
}
console.log(place_of_bomb);

const arr_1 = Array(size).fill(false); //
const arr_matrix = arr_1.map((item) => (item = Array(size).fill(false))); //створення дворівневий масив з пустими слотами

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (place_of_bomb.includes(i * size + j)) {
      arr_matrix[i][j] = true;
    }
  }
} // згідно згенерованих положень бомб виставляє в ці місця значення true(саме це значення буде вказівником)

export default arr_matrix;
