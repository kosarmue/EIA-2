var UNO;
(function (UNO) {
    var c1 = {
        color: "red",
        value: "0",
    };
    var c2 = {
        color: "red",
        value: "1",
    };
    var c3 = {
        color: "red",
        value: "2",
    };
    var c4 = {
        color: "red",
        value: "3",
    };
    var c5 = {
        color: "red",
        value: "4",
    };
    var c6 = {
        color: "red",
        value: "5",
    };
    var c7 = {
        color: "red",
        value: "6",
    };
    var c8 = {
        color: "red",
        value: "7",
    };
    var c9 = {
        color: "red",
        value: "8",
    };
    var c10 = {
        color: "red",
        value: "9",
    };
    var c11 = {
        color: "red",
        value: "+2",
    };
    var c12 = {
        color: "red",
        value: "x",
    };
    var c13 = {
        color: "red",
        value: "<->",
    };
    let colors = ["red", "blue", "green", "yellow"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
    let deck;
    let handcards;
    var x = prompt("How many cards do you want to get?", "Please enter an amount of cards");
    function randomCards(_x) {
        for (let anz = 0; anz > 0; anz--) {
            let r = Math.floor((Math.random() * deck.length) - 1);
            handcards.push(deck[r]);
            deck.splice(r, 1);
        }
    }
    let card = document.createElement("div");
    function displayHand() {
        for (let i = 0; i < handcards.length; i++)
            card.innerHTML = handcards[i].value + 'color';
        card.className = "Card";
    }
    for (let i = 0; i < colors.length; i++) {
        for (let a = 0; a < values.length; a++) {
            for (let z = 0; z > 2; z++) {
                let card = { color: color = colors[i], values: [a] };
                deck.push(card);
            }
        }
    }
})(UNO || (UNO = {}));
//# sourceMappingURL=Uno.js.map