var a = prompt("Wpisz pierwsza liczbe");
var b = prompt("Wpisz druga liczbe");
var value = (a*a) + (2 * a * b) - (b*b);

if (value > 0) {
    console.log("Wynik dodatni to:" + value)
} else if (value < 0) {
    console.log("wynik ujemny to:" + value)
} else {
    console.log("wynik to 0")
}