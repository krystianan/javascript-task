var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var animalUpperCased = animal.toUpperCase();
var textAfter = text.replace("Papugi" , animalUpperCased);
var textAfterLength = textAfter.substr(0, 45);

console.log(textAfterLength);

