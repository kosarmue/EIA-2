
namespace baumkonfig {
    namespace Aufgabe10 {
    window.addEventListener("load", createElements); // wenn window geladen, createElements ausgef�hrt
    window.addEventListener("change", warenkorb); // wenn sich was im formular ändert, wird warenkorb aufgerufen
    var name: HTMLInputElement;// Variable vom Typ...
    var strasse: HTMLInputElement; // Input-Element: Kann ich Sachen reinschreiben
    var hNr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var label: HTMLLabelElement;//Beschriftungen neben z.B. Checkbox, Radiobutton (X)
    
    var basketBaumform: string[] = [baumArt[0][0], "" + baumArt[0][1]];
    var basketNadeln: string[] = ["kein Halter ausgewählt", "0"];
    var basketSchmuck: string[][] = [];
    var basketLieferopt: string[] = ["keine Lieferoption ausgewählt", "0"];
    
    let feedback: HTMLDivElement = document.createElement("div"); //Was falsch gemacht?

    function createElements(): void { //Kreiert meine HTML Elemente
        //Baumart:
        let baumform: HTMLDivElement = <HTMLDivElement>document.getElementById("baumform"); //ich hole mir das div element "casten", "beweise, dass es ein html div ist
        let selectBox: HTMLSelectElement = document.createElement("select"); // Hier Kreiere ich die Selectbox
        selectBox.name = "SelectBaumform"; //"HTML in TS"
        selectBox.id = "selectBaumform"; // Ich weise der selectBox name und id zu
        baumform.appendChild(selectBox); //ich hänge an (selectbox an baumform)
       
        
        for (let i: number = 0; i < posten.length; i++) { //Datendatei: Posten //L�uft einmal durch durch Array Posten
            if (posten[i].art == "Baumform") { //�berpr�ft in jedem durchlauf Art
                var option: HTMLOptionElement = document.createElement("option"); //Kann Optionen kreieren f�r selectbox
                option.innerText = posten[i].name;
                option.id = "option" + i;
                console.log(option.id);
                selectBox.appendChild(option); //Option an SelectBox
            }
            
        }

        let nadeln: HTMLDivElement = <HTMLDivElement>document.getElementById("nadeln");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Nadeln") {
                var radioButton: HTMLInputElement = document.createElement("input");
                radioButton.type = "radio";
                radioButton.name = "radioGroupNadeln"; // Hey, das ist ja immer das gleiche :D
                radioButton.id = "radio" + i;
                nadeln.appendChild(radioButton);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioButton.id;
                label.innerText = posten[i].name;
                nadeln.appendChild(label);
            }
        }


        //Baumschmuck:
        let schmuck: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Schmuck") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuck.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = posten[i].name;
                schmuck.appendChild(label2);

                
                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuck.appendChild(stepper);
                var br: HTMLElement = document.createElement("br");
                schmuck.appendChild(br);
            }
        }

        //Deine Daten:
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
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
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);

                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = posten[i].name;
                lieferopt.appendChild(label3);
            }
        }

        //Button:
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Buy now";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < posten.length; i++) {
            console.log(_event.target);
            if (posten[i].art == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (target.value == posten[i].name && target.id == "selectBaumform") { //sucht select baum element
                basketBaumform[0] = posten[i].name; //holt ausgewählte assoziative-array-elemente name und preis vom posten
                basketBaumform[1] = "" + posten[i].preis;
            }
            if (target.id == "radio" + i) { //sucht radio element (nadeln)
                basketNadeln[0] = posten[i].name; //holt ausgewählte assoziative-array-elemente name und preis vom posten
                basketNadeln[1] = "" + posten[i].preis;

            }
            if (target.id == "radio2." + i) { //sucht radio element (lieferung)
                basketLieferopt[0] = posten[i].name; 
                basketLieferopt[1] = "" + posten[i].preis; //genau gleiche
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [posten[i].name, "" + (posten[i].preis * parseInt(stepper[i].value))];

            }
        }
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        korb.style.width = "25%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "lightgrey";
        korb.innerHTML = "<span class='wk'>Warenkorb</span><hr>";
        korb.innerHTML += "" + basketBaumform[0] + " " + basketBaumform[1] + " Euro <br>";
        korb.innerHTML += "Nadelanzahl: " + basketNadeln[0] + " " + basketNadeln[1] + " Euro <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + " Euro <br>";

        gesamtpreis = parseFloat(basketBaumform[1]) + parseFloat(basketNadeln[1]) + parseFloat(basketLieferopt[1]); // parse wandelt string in number um
        for (let i: number = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]); //+= z�hlt dazu
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + " Euro <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";
    }


    function handleMouseDown(_event: MouseEvent): void {
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
}