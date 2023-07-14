function accesWebPage() {
    console.log("HERE!")
    var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    if(user == "diego@saftu.com" && pass == "123") {
        alert("Bienvenido");
        window.location.href = "access.html";
    } else {
        alert("ERROR");
    }
}