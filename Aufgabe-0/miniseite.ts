function dialogFeld() {
    var eingabe = prompt("Hi ich bin...", "Name");
    if (eingabe != null) {
        document.getElementById("hi").innerHTML =
           "Hi, " +  eingabe  + " was geht?";
    }
}