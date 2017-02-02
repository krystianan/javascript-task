var rysujChoinke = prompt("Wpisz wysokosc choinki");
if (rysujChoinke <= 0) {
   console.log("Liczba jest nieprawidlowa")
}

var star = "";
var space = "";
var n = 1;

for (var h = 1 ; h <= rysujChoinke ; h++ ) {
    while (n <= (2*h-1)) {
        n = n +1;
        star += "*";
    }
    console.log(star);
} 
