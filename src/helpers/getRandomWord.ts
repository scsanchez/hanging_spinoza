import { Word } from "./word.interface";

const words: Word[] = [
  { word: "Conatus", hint: "Esfuerzo de una cosa a permanecer o «perseverar en su ser», esfuerzo o potencia que identifica con la esencia misma de la cosa" },
  { word: "Sustancia", hint: "Lo que es en sí y se concibe por sí mismo, es decir, aquello cuyo concepto no requiere el concepto de otra cosa, de la que debe formarse." },
  { word: "Atributo", hint: "Lo que el intelecto percibe de una sustancia, como constituyendo su esencia." },
  { word: "Modos", hint: "Los afectos de una sustancia, o lo que está en otra por la que también es concebida." },
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}
