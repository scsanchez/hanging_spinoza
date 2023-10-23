const words: string[] = ["COMPUTADORA", "AGUACATE", "ANIMAL"];

export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length)

  return words[randomIndex];
}
