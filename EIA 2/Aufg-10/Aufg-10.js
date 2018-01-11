var baumkonfig;
(function (baumkonfig) {
    baumkonfig.posten = [
        { art: "Baumform", name: "Nordmanntanne", preis: 220.00 },
        { art: "Baumform", name: "Fichte", preis: 130.00 },
        { art: "Baumform", name: "Edeltanne", preis: 300.00 },
        { art: "Baumform", name: "Kiefer", preis: 120.00 },
        { art: "Nadeln", name: "10", preis: 10.00 },
        { art: "Nadeln", name: "120", preis: 100.00 },
        { art: "Nadeln", name: "55", preis: 104.00 },
        { art: "Nadeln", name: "134", preis: 120.00 },
        { art: "Schmuck", name: "Kerzen**********", preis: 1.99 },
        { art: "Schmuck", name: "Weihnachtskugeln*", preis: 2.99 },
        { art: "Schmuck", name: "Figuren**********", preis: 3.99 },
        { art: "Schmuck", name: "Weihnachsstrümpfe", preis: 4.99 },
        { art: "Lieferkonditionen", name: "Standard-Lieferung", preis: 3.00 },
        { art: "Lieferkonditionen", name: "Express-Lieferung", preis: 10.00 }
    ];
    baumkonfig.baumArt = []; //Assoziatives Array (In jeder Schublade 2 F�cher)
    baumkonfig.b = [];
    for (var i = 0; i < baumkonfig.posten.length; i++) {
        if (baumkonfig.posten[i].art == "Baumform") {
            var temp = [baumkonfig.posten[i].name, baumkonfig.posten[i].preis]; //erstellt ein assoziatives array 
            baumkonfig.baumArt.push(temp); //Variable temp wird an n�chste Stelle des Arrays gepusht
        }
    }
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Aufg-10.js.map