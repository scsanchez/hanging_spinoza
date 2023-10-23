import { Word } from "./word.interface";

const words: Word[] = [
  { word: "Computadora", hint: "Es una maquina que procesa datos" },
  { word: "Aguacate", hint: "Es una fruta" },
  { word: "Animal", hint: "Es un ser vivo" },
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}
