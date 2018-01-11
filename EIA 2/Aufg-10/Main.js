var baumkonfig;
(function (baumkonfig) {
    var Aufgabe10;
    (function (Aufgabe10) {
        window.addEventListener("load", createElements); // wenn window geladen, createElements ausgef�hrt
        window.addEventListener("change", warenkorb); // wenn sich was im formular ändert, wird warenkorb aufgerufen
        var name; // Variable vom Typ...
        var strasse; // Input-Element: Kann ich Sachen reinschreiben
        var hNr;
        var ort;
        var plz;
        var mail;
        var label; //Beschriftungen neben z.B. Checkbox, Radiobutton (X)
        var basketBaumform = [baumkonfig.baumArt[0][0], "" + baumkonfig.baumArt[0][1]];
        var basketNadeln = ["kein Halter ausgewählt", "0"];
        var basketSchmuck = [];
        var basketLieferopt = ["keine Lieferoption ausgewählt", "0"];
        let feedback = document.createElement("div"); //Was falsch gemacht?
        function createElements() {
            //Baumart:
            let baumform = document.getElementById("baumform"); //ich hole mir das div element "casten", "beweise, dass es ein html div ist
            let selectBox = document.createElement("select"); // Hier Kreiere ich die Selectbox
            selectBox.name = "SelectBaumform"; //"HTML in TS"
            selectBox.id = "selectBaumform"; // Ich weise der selectBox name und id zu
            baumform.appendChild(selectBox); //ich hänge an (selectbox an baumform)
            for (let i = 0; i < baumkonfig.posten.length; i++) {
                if (baumkonfig.posten[i].art == "Baumform") {
                    var option = document.createElement("option"); //Kann Optionen kreieren f�r selectbox
                    option.innerText = baumkonfig.posten[i].name;
                    option.id = "option" + i;
                    console.log(option.id);
                    selectBox.appendChild(option); //Option an SelectBox
                }
            }
            let nadeln = document.getElementById("nadeln");
            for (let i = 0; i < baumkonfig.posten.length; i++) {
                if (baumkonfig.posten[i].art == "Nadeln") {
                    var radioButton = document.createElement("input");
                    radioButton.type = "radio";
                    radioButton.name = "radioGroupNadeln"; // Hey, das ist ja immer das gleiche :D
                    radioButton.id = "radio" + i;
                    nadeln.appendChild(radioButton);
                    label = document.createElement("label");
                    label.id = "label" + i;
                    label.htmlFor = radioButton.id;
                    label.innerText = baumkonfig.posten[i].name;
                    nadeln.appendChild(label);
                }
            }
            //Baumschmuck:
            let schmuck = document.getElementById("schmuckartikel");
            for (let i = 0; i < baumkonfig.posten.length; i++) {
                if (baumkonfig.posten[i].art == "Schmuck") {
                    var checkB = document.createElement("input");
                    checkB.type = "checkbox";
                    checkB.name = "CheckboxSchmuckartikel";
                    checkB.value = "check";
                    checkB.id = "check" + i;
                    schmuck.appendChild(checkB);
                    var label2 = document.createElement("label");
                    label2.id = "label2." + i;
                    label2.htmlFor = checkB.id;
                    label2.innerText = baumkonfig.posten[i].name;
                    schmuck.appendChild(label2);
                    let stepper = document.createElement("input");
                    stepper.type = "number";
                    stepper.name = "StepperSchmuckartikel" + i;
                    stepper.value = "1";
                    stepper.id = "stepper" + i;
                    stepper.min = "0";
                    stepper.max = "15";
                    stepper.step = "1";
                    schmuck.appendChild(stepper);
                    var br = document.createElement("br");
                    schmuck.appendChild(br);
                }
            }
            //Deine Daten:
            let daten = document.getElementById("daten");
            name = document.createElement("input");
            name.type = "text";
            name.name = "DatenName";
            name.placeholder = "Vor-, Nachname";
            name.pattern = "[a-zA-Z]{1,}";
            name.required = true;
            daten.appendChild(name);
            strasse = document.createElement("input");
            strasse.type = "text";
            strasse.name = "DatenStrasse";
            strasse.placeholder = "Straße";
            strasse.pattern = "[a-zA-Z]{1,}";
            strasse.required = true;
            daten.appendChild(strasse);
            hNr = document.createElement("input");
            hNr.type = "text";
            hNr.name = "DatenHausnummer";
            hNr.placeholder = "Hausnummer";
            hNr.pattern = "[0-9]{1,}";
            hNr.required = true;
            daten.appendChild(hNr);
            ort = document.createElement("input");
            ort.type = "text";
            ort.name = "DatenOrt";
            ort.placeholder = "Ort";
            ort.pattern = "[a-zA-Z]{1,}";
            ort.required = true;
            daten.appendChild(ort);
            plz = document.createElement("input");
            plz.type = "text";
            plz.name = "DatenPLZ";
            plz.placeholder = "Postleitzahl";
            plz.pattern = "[0-9]{5}";
            plz.required = true;
            daten.appendChild(plz);
            mail = document.createElement("input");
            mail.type = "email";
            mail.name = "DatenMail";
            mail.placeholder = "E-Mail Adresse";
            mail.required = true;
            daten.appendChild(mail);
            //Lieferoptionen:
            let lieferopt = document.getElementById("lieferoptionen");
            for (let i = 0; i < baumkonfig.posten.length; i++) {
                if (baumkonfig.posten[i].art == "Lieferung") {
                    var radioB2 = document.createElement("input");
                    radioB2.type = "radio";
                    radioB2.name = "radioGroupLieferoptionen";
                    radioB2.value = "radio2." + i;
                    radioB2.id = "radio2." + i;
                    lieferopt.appendChild(radioB2);
                    var label3 = document.createElement("label");
                    label3.id = "label3." + i;
                    label3.htmlFor = radioB2.id;
                    label3.innerText = baumkonfig.posten[i].name;
                    lieferopt.appendChild(label3);
                }
            }
            //Button:
            let button = document.getElementById("button");
            let submit = document.createElement("button");
            submit.name = "Button";
            submit.type = "button";
            submit.innerText = "Buy now";
            submit.addEventListener("mousedown", handleMouseDown);
            button.appendChild(submit);
        }
        function warenkorb(_event) {
            let target = _event.target;
            let stepper = [];
            let checkBoxes = [];
            let gesamtpreis = 0;
            for (let i = 0; i < baumkonfig.posten.length; i++) {
                console.log(_event.target);
                if (baumkonfig.posten[i].art == "Schmuck") {
                    stepper[i] = document.getElementById("stepper" + i);
                    checkBoxes[i] = document.getElementById("check" + i);
                }
                if (target.value == baumkonfig.posten[i].name && target.id == "selectBaumform") {
                    basketBaumform[0] = baumkonfig.posten[i].name; //holt ausgewählte assoziative-array-elemente name und preis vom posten
                    basketBaumform[1] = "" + baumkonfig.posten[i].preis;
                }
                if (target.id == "radio" + i) {
                    basketNadeln[0] = baumkonfig.posten[i].name; //holt ausgewählte assoziative-array-elemente name und preis vom posten
                    basketNadeln[1] = "" + baumkonfig.posten[i].preis;
                }
                if (target.id == "radio2." + i) {
                    basketLieferopt[0] = baumkonfig.posten[i].name;
                    basketLieferopt[1] = "" + baumkonfig.posten[i].preis; //genau gleiche
                }
                if (target.id == "check" + i || target.id == "stepper" + i) {
                    basketSchmuck[i] = [baumkonfig.posten[i].name, "" + (baumkonfig.posten[i].preis * parseInt(stepper[i].value))];
                }
            }
            let korb = document.getElementById("zusammenfassung");
            korb.style.width = "25%";
            korb.style.height = "auto";
            korb.style.backgroundColor = "lightgrey";
            korb.innerHTML = "<span class='wk'>Warenkorb</span><hr>";
            korb.innerHTML += "" + basketBaumform[0] + " " + basketBaumform[1] + " Euro <br>";
            korb.innerHTML += "Nadelanzahl: " + basketNadeln[0] + " " + basketNadeln[1] + " Euro <br>";
            korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + " Euro <br>";
            gesamtpreis = parseFloat(basketBaumform[1]) + parseFloat(basketNadeln[1]) + parseFloat(basketLieferopt[1]); // parse wandelt string in number um
            for (let i = 0; i < stepper.length; i++) {
                if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                    gesamtpreis += parseFloat(basketSchmuck[i][1]); //+= z�hlt dazu
                    korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + " Euro <br>";
                }
            }
            korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";
        }
        function handleMouseDown(_event) {
            feedback.innerText = " ";
            feedback.style.paddingBottom = "1em"; // II=oder
            if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
                feedback.innerText = "Es fehlen Informationen";
                feedback.style.color = "red";
                document.body.appendChild(feedback); // Hier Body anhängen
            }
            else {
                feedback.innerText = "Bestellung wird bearbeitet";
                feedback.style.color = "green";
                document.body.appendChild(feedback);
            }
        }
    })(Aufgabe10 || (Aufgabe10 = {}));
})(baumkonfig || (baumkonfig = {}));
//# sourceMappingURL=Main.js.map