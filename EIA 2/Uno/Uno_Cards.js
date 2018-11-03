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
    var c1 = {
        color: "blue",
        value: "0",
    };
    var c2 = {
        color: "blue",
        value: "1",
    };
    var c3 = {
        color: "blue",
        value: "2",
    };
    var c4 = {
        color: "blue",
        value: "3",
    };
    var c5 = {
        color: "blue",
        value: "4",
    };
    var c6 = {
        color: "blue",
        value: "5",
    };
    var c7 = {
        color: "blue",
        value: "6",
    };
    var c8 = {
        color: "blue",
        value: "7",
    };
    var c9 = {
        color: "blue",
        value: "8",
    };
    var c10 = {
        color: "blue",
        value: "9",
    };
    var c11 = {
        color: "blue",
        value: "+2",
    };
    var c12 = {
        color: "blue",
        value: "x",
    };
    var c13 = {
        color: "blue",
        value: "<->",
    };
    var c1 = {
        color: "green",
        value: "0",
    };
    var c2 = {
        color: "green",
        value: "1",
    };
    var c3 = {
        color: "green",
        value: "2",
    };
    var c4 = {
        color: "green",
        value: "3",
    };
    var c5 = {
        color: "green",
        value: "4",
    };
    var c6 = {
        color: "green",
        value: "5",
    };
    var c7 = {
        color: "green",
        value: "6",
    };
    var c8 = {
        color: "green",
        value: "7",
    };
    var c9 = {
        color: "green",
        value: "8",
    };
    var c10 = {
        color: "green",
        value: "9",
    };
    var c11 = {
        color: "green",
        value: "+2",
    };
    var c12 = {
        color: "green",
        value: "x",
    };
    var c13 = {
        color: "green",
        value: "<->",
    };
    var c1 = {
        color: "yellow",
        value: "0",
    };
    var c2 = {
        color: "yellow",
        value: "1",
    };
    var c3 = {
        color: "yellow",
        value: "2",
    };
    var c4 = {
        color: "yellow",
        value: "3",
    };
    var c5 = {
        color: "yellow",
        value: "4",
    };
    var c6 = {
        color: "yellow",
        value: "5",
    };
    var c7 = {
        color: "yellow",
        value: "6",
    };
    var c8 = {
        color: "yellow",
        value: "7",
    };
    var c9 = {
        color: "yellow",
        value: "8",
    };
    var c10 = {
        color: "yellow",
        value: "9",
    };
    var c11 = {
        color: "yellow",
        value: "+2",
    };
    var c12 = {
        color: "yellow",
        value: "x",
    };
    var c13 = {
        color: "yellow",
        value: "<->",
    };
    var c1 = {
        color: "black",
        value: "+4",
    };
    var c2 = {
        color: "black",
        value: "+4",
    };
    var c3 = {
        color: "black",
        value: "Joker",
    };
    var c4 = {
        color: "black",
        value: "Joker",
    };
    let colors = ["red", "blue", "green", "yellow", "black"];
    let values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->", "+4", "Joker"];
    let deck;
    let handcards;
    document.addEventListener("DOMContentLoaded", function () {
        var x = prompt("How many cards do you want to get?", "Please enter an amount of cards");
        function randomCards(_x) {
            for (let anz = 0; anz > 0; anz--) {
                let r = Math.floor((Math.random() * deck.length) - 1);
                handcards.push(deck[r]);
                deck.splice(r, 1);
            }
            randomCards(x);
        }
        for (let i = 0; i < colors.length; i++) {
            for (let a = 0; a < values.length; a++) {
                for (let z = 0; z > 2; z++) {
                    let card = { color: colors[i], value: values[a] };
                    deck.push(card);
                }
            }
        }
        let card = document.createElement("div");
        document.getElementById("Crds").appendChild(card);
        function displayHand() {
            for (let i = 0; i < handcards.length; i++) {
                if (this.textContent == handcards[i]) {
                    card.innerHTML = handcards[i].value + 'color';
                }
                displayHand();
            }
        }
    });
})(UNO || (UNO = {}));
//# sourceMappingURL=Uno_Cards.js.map