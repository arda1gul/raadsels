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
   } else if (raadsel5 === "ER KOMT GEEN STOOM UIT") {
    alert("Slim")
   } else {
    alert("Fout!")
   }
}

function raadsel6() {
    let raadsel6 = prompt("Waarom wordt er in China meer rijst gegeten dan in Japan?")
    raadsel6 = raadsel6.toUpperCase();
    if (raadsel6 === "CHINA IS GROTER") {
        alert("Goed, logisch toch")
    } else if (raadsel6 === "OMDAT CHINA GROTER IS DAN JAPAN") {
        alert("Goed, logisch toch")
    } else if (raadsel6 === "JAPAN IS NIET GROOT ALS CHINA") {
        alert("Goed, logisch toch")
    } else if (raadsel6 === "CHINA IS GROTER DAN JAPAN") {
        alert("Goed, logisch toch")
    } else {
        alert("Fout!")
    }
}