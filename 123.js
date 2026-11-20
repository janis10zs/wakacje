const data = new Date(2027, 5, 26);
/*
*nazwa funkcji: dopiszZero
*opis: dopisuje zero do liczby ktora jest mniej niz 10
*parametry: x-liczba
*zwracamy ta sama liczbe ale z zerem na poczatku jezeli jest mniejsza od 10
*autor: Janislaw Kotwicki
*/
function dopiszZero(x) {
    if (x < 10) {
        return "0" + x;
    }
    return String(x);
}
/** 
*opis: pobiera dane godziny, minuty oraz sekundy po czym pokazuje je w postaci zegara
*@param {number} godziny - godziny z dopisanym zerem
*@param {number} minuty - minuty z dopisanym zerem
*@param {number} sekudny - sekundy z dopisanym zerem
*@returns {number} podane godziny, minuty i sekudny w postaci zegara
*@author Janislaw Kotwicki
*/
function pokazZegar() {
    const teraz = new Date();
    const godziny = dopiszZero(teraz.getHours());
    const minuty = dopiszZero(teraz.getMinutes());
    const sekundy = dopiszZero(teraz.getSeconds());

    document.getElementById("zegar").textContent = godziny + ":" + minuty + ":" + sekundy;
}
function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent =
        teraz.toLocaleDateString("pl-PL");
}
function policz(a, b) {
    const roznicaMs = b - a;
    return Math.ceil(roznicaMs / 86400000);
}
function pokazDni() {
    document.getElementById("dni").textContent =
        policz(new Date(), data);
}
function dzienTygodnia() {
    const teraz = new Date();
    document.getElementById("dzien").textContent =
        teraz.toLocaleDateString("pl-PL", { weekday: "long" });
}

dzienTygodnia();
pokazDate();
pokazZegar();
pokazDni();

setInterval(pokazZegar, 1000);