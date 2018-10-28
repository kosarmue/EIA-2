namespace UNO {

    interface Card {
        color: string;
        value: string;
    }

    var c1: Card = {
        color: "red",
        value: "0",
    }

    var c2: Card = {
        color: "red",
        value: "1",
    }

    var c3: Card = {
        color: "red",
        value: "2",
    }

    var c4: Card = {
        color: "red",
        value: "3",
    }

    var c5: Card = {
        color: "red",
        value: "4",
    }

    var c6: Card = {
        color: "red",
        value: "5",
    }

    var c7: Card = {
        color: "red",
        value: "6",
    }

    var c8: Card = {
        color: "red",
        value: "7",
    }

    var c9: Card = {
        color: "red",
        value: "8",
    }

    var c10: Card = {
        color: "red",
        value: "9",
    }

    var c11: Card = {
        color: "red",
        value: "+2",
    }

    var c12: Card = {
        color: "red",
        value: "x",
    }

    var c13: Card = {
        color: "red",
        value: "<->",
    }

    var c1: Card = {
        color: "blue",
        value: "0",
    }

    var c2: Card = {
        color: "blue",
        value: "1",
    }

    var c3: Card = {
        color: "blue",
        value: "2",
    }

    var c4: Card = {
        color: "blue",
        value: "3",
    }

    var c5: Card = {
        color: "blue",
        value: "4",
    }

    var c6: Card = {
        color: "blue",
        value: "5",
    }

    var c7: Card = {
        color: "blue",
        value: "6",
    }

    var c8: Card = {
        color: "blue",
        value: "7",
    }

    var c9: Card = {
        color: "blue",
        value: "8",
    }

    var c10: Card = {
        color: "blue",
        value: "9",
    }

    var c11: Card = {
        color: "blue",
        value: "+2",
    }

    var c12: Card = {
        color: "blue",
        value: "x",
    }

    var c13: Card = {
        color: "blue",
        value: "<->",
    }

    var c1: Card = {
        color: "green",
        value: "0",
    }

    var c2: Card = {
        color: "green",
        value: "1",
    }

    var c3: Card = {
        color: "green",
        value: "2",
    }

    var c4: Card = {
        color: "green",
        value: "3",
    }

    var c5: Card = {
        color: "green",
        value: "4",
    }

    var c6: Card = {
        color: "green",
        value: "5",
    }

    var c7: Card = {
        color: "green",
        value: "6",
    }

    var c8: Card = {
        color: "green",
        value: "7",
    }

    var c9: Card = {
        color: "green",
        value: "8",
    }

    var c10: Card = {
        color: "green",
        value: "9",
    }

    var c11: Card = {
        color: "green",
        value: "+2",
    }

    var c12: Card = {
        color: "green",
        value: "x",
    }

    var c13: Card = {
        color: "green",
        value: "<->",
    }

    var c1: Card = {
        color: "yellow",
        value: "0",
    }

    var c2: Card = {
        color: "yellow",
        value: "1",
    }

    var c3: Card = {
        color: "yellow",
        value: "2",
    }

    var c4: Card = {
        color: "yellow",
        value: "3",
    }

    var c5: Card = {
        color: "yellow",
        value: "4",
    }

    var c6: Card = {
        color: "yellow",
        value: "5",
    }

    var c7: Card = {
        color: "yellow",
        value: "6",
    }

    var c8: Card = {
        color: "yellow",
        value: "7",
    }

    var c9: Card = {
        color: "yellow",
        value: "8",
    }

    var c10: Card = {
        color: "yellow",
        value: "9",
    }

    var c11: Card = {
        color: "yellow",
        value: "+2",
    }

    var c12: Card = {
        color: "yellow",
        value: "x",
    }

    var c13: Card = {
        color: "yellow",
        value: "<->",
    }

    var c1: Card = {
        color: "black",
        value: "+4",
    }

    var c2: Card = {
        color: "black",
        value: "+4",
    }

    var c3: Card = {
        color: "black",
        value: "Joker",
    }

    var c4: Card = {
        color: "black",
        value: "Joker",
    }



    document.addEventListener("DOMContentLoaded", function() {

        let colors: string[] = ["red", "blue", "green", "yellow", "black"];
        let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->", "+4", "Joker"];
        let deck: Card[];
        let handcards: Card[];

        var x = prompt("How many cards do you want to get?", "Please enter an amount of cards")
        function randomCards(_x: number) {
            for (let anz: number = 0; anz > 0; anz--) {
                let r = Math.floor((Math.random() * deck.length) - 1);
                handcards.push(deck[r])
                deck.splice(r, 1);
            }
        }

        let card: HTMLDivElement = document.createElement("div");
        document.getElementById("Crds").appendChild(card);
        function displayHand() {
            for (let i: number = 0; i < handcards.length; i++) {
                if (this.textContent == handcards[i]) {
                    card.innerHTML = handcards[i].value + 'color';
                }

                for (let i: number = 0; i < colors.length; i++) {
                    for (let a: number = 0; a < values.length; a++) {
                        for (let z: number = 0; z > 2; z++) {
                            let card = (colors[i], values[a]);
                            deck.push(card);

                        }
                    }

                }

            }
        }
    }
    )
}


