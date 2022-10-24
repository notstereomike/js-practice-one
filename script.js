function add7(num) {
    console.log("add7 = " + (num + 7));
}

add7(5);

function multiply (a, b) {
    console.log("Multiply = " + a* b);
}
multiply( 5, 6);

function capitalize (text) {
    console.log("Capital First Letter = " + text[0].toUpperCase()+ text.slice(1).toLowerCase());
}
capitalize("MICHAEL");

function lastLetter(string) {
    console.log("Last Letter = " + string.slice(-1));
}
lastLetter('Beattie');