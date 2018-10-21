namespace UNO {

    document.addEventListener('DOMContentLoaded', function() {

        let card: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];
        let choosencard: string[] = [];
        let layingdown: string[] = [];

        document.getElementById("nachziehstapel").addEventListener("click", function() {
            if (choosencard.length < 30 && card.length > 0) {
                let cardnumber: number = Math.floor((Math.random() * 36) + 0);
                while (card[cardnumber] == undefined) {
                    cardnumber = Math.floor((Math.random() * 36) + 0);
                }
                choosencard.push(card[cardnumber]);
                card.splice(cardnumber, 1);

                let div: HTMLDivElement = document.createElement("div");
                document.getElementById("cards").appendChild(div);
                let s: CSSStyleDeclaration = div.style;
                div.className = "cardsyouhave";
                div.textContent = choosencard[choosencard.length - 1];


                div.addEventListener("click", function() {
                    for (let i = 0; i < card.length; i++) {
                        if (this.textContent == card[i]) {
                            layingdown.push(card[i]);
                            card.splice(i, 1);
                            break;
                        }
                        else { 
                        
                            }
                document.getElementById("ablagestapel").style.display = "inline-block";
                this.parentNode.removeChild(this); 
                    }
                })
            }
        })
    })
}