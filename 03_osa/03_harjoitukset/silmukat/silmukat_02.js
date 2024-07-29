// Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
// 2, 98, 4, 96, 6, 94 ja niin edelleen. Tulosta luvut samalle riville.
// Saat itse valita käytkö luvut läpi kaksi kertaa vai lopetatko lukuun 50.
yksirivi = "";

for (let index = 2; index <= 50; index = index + 2) {
  yksirivi = yksirivi + index + ", ";
  if (index != 50) {
    yksirivi = yksirivi + (100 - index) + ", ";
  }
}

console.log(yksirivi);
