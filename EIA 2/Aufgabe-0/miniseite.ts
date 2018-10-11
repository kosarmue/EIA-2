function dialogFeld() {
    var eingabe: string = prompt("Hi ich bin...", "Name");
    if (eingabe != null) {
        document.getElementById("hi").innerHTML =
           "Hi, " +  eingabe  + " was geht?";
    }
    console.log("Hey ", eingabe, ", alles gut?");
}
