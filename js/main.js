console.log("Raadsels loaded")

alert("Welkom, niet je hoofd kapot maken")

function raadsel1() {
    let raadselOne = prompt("Op welke rails rijden geen treinen?")
    raadselOne = raadselOne.toUpperCase()
    if (raadselOne === "VANGRAILS") {
        alert("Goed!")
    } else {
        alert("Fout!")
    }
}

function raadsel2() {
    let raadselTwo = prompt("In welke winkel komt iemand die blind is niet graag?")
    raadselTwo = raadselTwo.toUpperCase();
    if (raadselTwo === "KIJKSHOP") {
        alert("haha, goed antwoord!")
    } else {
        alert("Fout! probeer opnieuw")
    }
}

function raadsel3() {
    let raadsel3 = prompt("Waar zwemmen auto's")
    raadsel3 = raadsel3.toUpperCase()
    if (raadsel3 === "CARPOOL") {
        alert("correct!")
    } else {
        alert("Denk gewoon logisch na")
    }
}

function raadsel4() {
    let raadsel4 = prompt("Hoeveel broodjes kun je eten op je lege maag?")
    raadsel4 = raadsel4.toUpperCase();
    if (raadsel4 === "1") {
        alert("Dat klopt, want na 1tje is je maag niet meer leeg!")
    } else if (raadsel4 === "EENTJE") {
        alert("Dat klopt, want na 1tje is je mag niet meer leeg!")
    } else {
        alert("Incorrect!")
    }
}

function raadsel5() {
   let raadsel5 = prompt("Een elektrische trein rijdt 280 km per uur. De wind gaat 300 km per uur. Welke kant gaat de stoom van de trein op?")
   raadsel5 = raadsel5.toUpperCase();
   if (raadsel5 === "ELECTRISCHE TREIN HEEFT GEEN STOOM") {
    alert("Slim")
   } else if (raadsel5 === "GEEN STOOM") {
    alert("Slim")
   } else {
    alert("Fout!")
   }
}

function raadsel6() {
    let raadsel6 = prompt("Welk cijfer moet de volgende zijn in onderstaande reeks 2 – 5 – 11 – 23");
    raadsel6 = raadsel6.toUpperCase();
    if (raadsel6 === "47") {
        alert("Correct")
    } else {
        alert("Kijk nog eens goed want het is fout")
    }
}

function raadsel7() {
    let raadsel7 = prompt("Welk water kun je eten en kauwen?")
    raadsel7 = raadsel7.toUpperCase();
    if (raadsel7 === "WATERMELOEN") {
        alert("haha, goed")
    } else {
        alert("Het is echt een heel logisch antwoord, kijk eens nog een keer.")
    }
}