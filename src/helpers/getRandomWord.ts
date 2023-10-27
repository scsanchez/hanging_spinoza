import { Word } from "./word.interface";

const words: Word[] = [
  {
    word: "Conatus",
    hint: "Esfuerzo de una cosa a permanecer o «perseverar en su ser», esfuerzo o potencia que identifica con la esencia misma de la cosa",
  },
  {
    word: "Sustancia",
    hint: "Lo que es en sí y se concibe por sí mismo, es decir, aquello cuyo concepto no requiere el concepto de otra cosa, de la que debe formarse.",
  },
  {
    word: "Atributo",
    hint: "Aquello que el entendimiento percibe de una substancia como constitutivo de la esencia de la misma.",
  },
  {
    word: "Modos",
    hint: "Afecciones de una substancia, o sea, aquello que es en otra cosa, por medio de la cual también es concebido.",
  },
  {
    word: "Dios",
    hint: "Ser absolutamente infinito, esto es, una substancia que consta de infinitos atributos, cada uno de los cuales expresa una esencia eterna e infinita.",
  },
  {
    word: "Libre",
    hint: "Aquella cosa que existe en virtud de la sola necesidad de su naturaleza y es determinada por sí sola a obrar; y necesaria o, mejor, compelida, a la que es determinada por otra cosa a existir y operar de cierta y determinada manera.",
  },
  {
    word: "Eternidad",
    hint: "Existencia misma, en cuanto se la concibe como siguiéndose necesariamente de la sola definición de una cosa eterna.",
  },
  {
    word: "Afecto",
    hint: "Afecciones del cuerpo, con las que se aumenta o disminuye, ayuda o estorba la potencia de actuar del mismo cuerpo, y al mismo tiempo, las ideas de estas afecciones.",
  },
  {
    word: "Deseo",
    hint: "Esencia misma del hombre, en cuanto que se concibe determinada por cualquier afección suya a hacer algo.",
  },
  {
    word: "Alegria",
    hint: "Paso del hombre de una perfección menor a una mayor.",
  },
  {
    word: "Tristeza",
    hint: "Paso del hombre de una perfección mayor a una menor.",
  },
  {
    word: "Admiracion",
    hint: "Imaginación de una cosa, en la que el alma permanece fija, precisamente porque esta imaginación singular no tiene conexión alguna con las demás.",
  },
  {
    word: "Desprecio",
    hint: "Imaginación de una cosa que impresiona tan poco al alma que la presencia de la cosa la mueve más bien a imaginar lo que no hay en ella que lo que en ella hay.",
  },
  {
    word: "Amor",
    hint: "Alegría acompañada de la idea de una causa exterior.",
  },
  {
    word: "Odio",
    hint: "Tristeza acompañada de la idea de una causa exterior.",
  },
  {
    word: "Propension",
    hint: "Alegría acompañada de la idea de alguna cosa que, por accidente, es causa de alegría.",
  },
  {
    word: "Aversion",
    hint: "Tristeza acompañada de la idea de alguna cosa que, por accidente, es causa de tristeza.",
  },
  { word: "Devocion", hint: "Amor hacia aquel que admiramos." },
  {
    word: "Irrision",
    hint: "Alegría surgida de que imaginamos que, en la cosa que odiamos, existe algo que despreciamos.",
  },
  {
    word: "Esperanza",
    hint: "Alegría inconstante, surgida de la idea de una cosa futura o pasada, de cuyo resultado tenemos alguna duda.",
  },
  {
    word: "Miedo",
    hint: "Tristeza inconstante, surgida de la idea de una cosa futura o pasada, de cuyo resultado tenemos alguna duda.",
  },
  {
    word: "Seguridad",
    hint: "Alegría surgiad de la idea de una cosa futura o pasada, cuya causa de duda ha desparecido.",
  },
  {
    word: "Desesperacion",
    hint: "Tristeza surgida de la idea de una cosa futura o pasada, cuya causa de duda ha desaparecido.",
  },
  {
    word: "Decepcion",
    hint: "Tristeza acompañada de la idea de una cosa pasada que sucedió contra lo esperado.",
  },
  {
    word: "Compasion",
    hint: "Tristeza acompada de la idea de un mal que sucedió a otro, al que imaginamos semejante a nosotros.",
  },
  { word: "Aprecio", hint: "Amor hacia alguien que hizo bien a otro." },
  { word: "Indignacion", hint: "Odio hacia alguien que hizo mal a otro." },
  { word: "Sobrestima", hint: "Estimar a alguno más de lo justo por amor." },
  { word: "Menosprecio", hint: "Estimar a alguno menos de lo justo por odio." },
  {
    word: "Envidia",
    hint: "Odio, en cuanto que afecta al hombre de tal manera que se entristece con la felicidad de otro y, al revés, goza con el mal del otro.",
  },
  {
    word: "Misericordia",
    hint: "Amor, en cuanto que afecta de tal manera al hombre, que goza con el bien de otro y, al revés, se entristece con el mal de otro.",
  },
  {
    word: "Humildad",
    hint: "Tristeza que surge del hecho de que el hombre contempla su impotencia o debilidad.",
  },
  {
    word: "Arrepentimiento",
    hint: "Tristeza acompañada de la idea de algún hecho que creemos haber realizado por libre decisión del alma.",
  },
  {
    word: "Soberbia",
    hint: "Estimarse a sí mismo más de lo justo por amor propio.",
  },
  {
    word: "Abyeccion",
    hint: "Estimarse a sí mismo menos de lo justo por tristeza.",
  },
  {
    word: "Gloria",
    hint: "Alegría acompañada de la idea de alguna acción nuestra, que imaginamos ser alabada por otros.",
  },
  {
    word: "Anhelo",
    hint: "Deseo o apetito de poseer una cosa, que es fomentado con su recuerdo y, a la vez, es reprimido con el recuerdo de otras cosas que excluyen la existencia de la cosa apetecida.",
  },
  {
    word: "Emulacion",
    hint: "Deseo de alguna cosa, que se engendra en nosotros, porque imaginamos que otros tienen el mismo deseo.",
  },
  {
    word: "Gratitud",
    hint: "Deseo o afán del amor, por el cual nos esforzamos en hacer bien a quien, con igual afecto de amor, nos hizo algún beneficio.",
  },
  {
    word: "Benevolencia",
    hint: "Deseo de hacer el bien a aquel de quien nos compadecemos.",
  },
  {
    word: "Ira",
    hint: "Deseo que, por odio, nos incita a que inflijamos un mal a aquel a quien odiamos.",
  },
  {
    word: "Venganza",
    hint: "Deseo que, por odio recíproco, nos incita a infligir un mal a aquel que nos infligió un mal igual.",
  },
  {
    word: "Temor",
    hint: "Deseo de evitar un mal mayor, que tenemos, mediante un mal menor.",
  },
  {
    word: "Audacia",
    hint: "Deseo por el que alguien es incitado a hacer algo con un peligro que sus iguales temen soportar.",
  },
  {
    word: "Pusilanimidad",
    hint: "Aquel cuyo deseo es reprimido por el temor de un peligro que sus iguales se atreven a soportar.",
  },
  {
    word: "Consternacion",
    hint: "Aquel cuyo deseo de evitar un mal es reprimido por la admiración del mal que teme.",
  },
  {
    word: "Humanidad",
    hint: "Deseo de hacer aquello que agrada a los hombres y de omitir lo que les desagrada.",
  },
  { word: "Ambicion", hint: "Deseo inmoderado de gloria." },
  { word: "Gula", hint: "Deseo inmoderado, o también el amor, de comer." },
  { word: "Ebriedad", hint: "Deseo inmoderado y el amor de beber." },
  { word: "Avaricia", hint: "Deseo inmoderado y el amor de riquezas." },
  { word: "Lujuria", hint: "Deseo y amor de mezclar los cuerpos." },
  { word: "Bien", hint: "Aquello que sabemos con certeza que nos es útil." },
  {
    word: "Mal",
    hint: "Aquello que sabemos con certeza que nos impidie poseer algún bien.",
  },
  { word: "Apetito", hint: "Por el cual hacemos algo." },
  {
    word: "Virtud",
    hint: "Esencia o naturaleza del hombre, en cuanto que tiene la potestad de hacer ciertas cosas que se pueden entender por las solas leyes de su propia naturaleza.",
  },
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}
