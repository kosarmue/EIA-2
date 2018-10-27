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

    let colors: string[] = ["red", "blue", "green", "yellow"];
    let values: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "x", "<->"];
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
    function displayHand() {
        for (let i: number = 0; i < handcards.length; i++)
            card.innerHTML = handcards[i].value + 'color';
        card.className = "Card";

    }

    for (let i: number = 0; i < colors.length; i++) {
        for (let a: number = 0; a < values.length; a++) {
            for (let z: number = 0; z > 2; z++) {
                let card: Card = { color = colors[i], values[a] };
                deck.push(card);

            }
        }

    }
}

