var a = prompt("Wpisz dlugosc podstawy a");
var h = prompt("Wpisz wartosc wysokosci h");

function getTriangleArea (a , h) {
    if ((a > 0) && (h > 0)) {
        return (a*h/2);
    } else if ((a < 0) && (h > 0)) {
        return ("Podstawa nie moze byc mniejsza niz 0");
    } else if ((a > 0) && (h < 0)) {
        return ("Wysokosc nie moze byc mniejsza niz 0");
    } else {
        return ("Wysokosc oraz podstawa musza byc wieksze niz 0");
    }

}

if (getTriangleArea(a,h) > 0 ) {
    console.log("Pole trojkata to: " + getTriangleArea(a,h));
} else {
    console.log(getTriangleArea(a,h));
}
