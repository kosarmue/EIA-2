function dialogFeld() {
    var eingabe = prompt("Hi ich bin...", "Müsli");
    if (eingabe != null) {
        document.getElementById("hi").innerHTML =
           "Ich esse jeden morgen " + eingabe + "und es schmeckt gut";
    }
}